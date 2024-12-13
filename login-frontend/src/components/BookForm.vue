<template>
    <div class="bookform-container">
      <!-- Formulário que bloqueia o envio padrão e chama um método customizado -->
      <form @submit.prevent="handleSubmit">
        <!-- Campo de entrada para o título do livro -->
        <input class="input-field" v-model="book.title" placeholder="Título" required />
        <!-- Campo de entrada para o nome do autor -->
        <input class="input-field" v-model="book.author" placeholder="Autor" required />
        <!-- Campo de entrada para o ano de publicação -->
        <input class="input-field" v-model="book.year" placeholder="Ano" required />
        <!-- Botão de submissão, alterando o texto conforme se está adicionando ou editando -->

        <label for="file-upload" class="file-upload-label">Imagem do livro:</label>
        <!-- Input escondido -->
        <input type="file" id="file-upload" @change="handleFileChange" class="file-input-hidden" />
        <!-- Botão estilizado -->
        <label for="file-upload" class="custom-file-upload">
          {{ selectedImage ? selectedImage.name : "Selecione uma imagem" }}
        </label>
        <button class="submit-button" type="submit">{{ book._id ? 'Atualizar' : 'Adicionar' }}</button>
      </form>
    </div>
  </template>
  
  <script>
  // Faz a importação do serviço de API para as requisições
  import api from '@/services/api'; 
  
  export default {
    // Recebe o livro a ser editado como propriedade do componente
    props: ['bookToEdit'], 
    data() {
      return {
      book: this.bookToEdit || { title: '', author: '', year: null, image: null, _id: null },
      selectedImage: null, // Variável para armazenar a imagem selecionada
      imageChosen: false, // Controle do estado de imagem escolhida
    };
    },
    watch: {
      // Monitora alterações na propriedade bookToEdit
      bookToEdit: {
        immediate: true, // Executa a função assim que o componente for montado
        handler(newValue) {
          if (newValue) {
          this.book = { ...newValue }; // Atualiza os dados do livro para edição
        } else {
          this.resetForm(); // Se não houver livro para editar, reseta o formulário
        }
        },
      },
    },
    methods: {
      handleFileChange(event) {
      this.selectedImage = event.target.files[0]; // Armazena a imagem selecionada
      this.imageChosen = !!this.selectedImage; // Marca a imagem como escolhida se houver
    },
      handleSubmit() {
      const formData = new FormData();
      formData.append('title', this.book.title);
      formData.append('author', this.book.author);
      formData.append('year', this.book.year);

      // Se uma imagem foi selecionada, adiciona ao FormData
      if (this.selectedImage) {
        formData.append('image', this.selectedImage);
      }

      // Verifica se o livro tem um _id (para atualização) ou se é um novo livro
      if (this.book._id) {
        api.updateBook(this.book._id, formData).then(() => {
          this.$emit('book-updated'); // Emite evento após atualização
          this.resetForm(); // Reseta o formulário
        });
      } else {
        // Caso não tenha um ID, adiciona um novo livro
        api.addBook(formData).then(() => {
          this.$emit('book-added'); // Emite evento após adicionar
          this.resetForm(); // Reseta o formulário
        });
      }
    },
    // Função para resetar os dados do formulário
    resetForm() {
      this.book = {
        title: '',
        author: '',
        year: null,
        image: null,
        _id: null,
      };
      this.selectedImage = null; // Reseta a imagem selecionada
      this.imageChosen = false; // Reseta o estado de imagem escolhida
    },
    },
  };
  </script>  
  
  <style scoped>
.bookform-container {
  max-width: 420px;
  margin: 30px auto;
  padding: 25px;
  border: 2px solid #5c67f2; 
  border-radius: 20px; 
  background-color: #f4f7fe; 
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15); 
}

.input-field {
  width: 96%; /* Largura do campo */
  padding: 12px;
  margin: 12px 0;
  border: 1px solid #3e4ca7; /* Cor da borda */
  border-radius: 15px; /* Bordas arredondadas */
  font-size: 17px;
  font-family: 'Poppins', sans-serif; 
  background-color: #eef0fc; /* Cor de fundo suave */
  transition: border-color 0.4s, box-shadow 0.4s; /* Transições suaves */
}

.input-field:focus {
  border-color: #2a357c; /* Cor da borda ao focar */
  box-shadow: 0 0 10px rgba(60, 70, 170, 0.5); /* Adiciona uma sombra ao focar */
  outline: none;
}

.submit-button {
  width: 100%;
  padding: 12px;
  background-color: #4a55d1; 
  color: white;
  border: none;
  border-radius: 25px; 
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 1px; /* Espaçamento entre letras */
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s, box-shadow 0.2s; /* Transições para efeito */
}

.submit-button:hover {
  background-color: #3642a5; /* Muda a cor de fundo ao passar o mouse */
  transform: scale(1.06); /* Aumenta o tamanho ao passar o mouse */
  box-shadow: 0 8px 16px rgba(60, 70, 170, 0.4); /* Adiciona uma sombra ao passar o mouse */
}

  </style>