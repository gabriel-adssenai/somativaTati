<template>
  <div id="app">
      <Navbar />
      <h1>Gestão de Livros Reservados</h1>
      
      <!-- Lista de Livros Reservados -->
      <div>
          <h2>Livros Reservados</h2>
          <ul>
              <li v-for="(book, index) in reservedBooks" :key="book.id" class="livro-reservado">
                  <img :src="book.imagem || require('@/imageBook/fahrenheit.png')" :alt="book.title" class="imagem-livro" />
                  <div class="informacoes">
                      <strong>{{ book.titulo }}</strong> por {{ book.autor }} ({{ book.ano }})
                      <p><strong>Sinopse:</strong> {{ book.sinopse }}</p>
                      <p><strong>Reservado:</strong> {{ book.reservedCount }} {{ book.reservedCount === 1 ? 'vez' : 'vezes' }}</p>
                      <!-- Botão de Devolução -->
                      <button @click="devolverLivro(index)">Devolução</button>
                  </div>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  components: {
      Navbar,
  },
  data() {
      return {
          reservedBooks: [], // Lista dinâmica de livros reservados
      };
  },
  created() {
      // Recuperar os livros reservados do localStorage ao carregar o componente
      const livrosReservados = localStorage.getItem('livrosReservados');
      if (livrosReservados) {
          this.reservedBooks = JSON.parse(livrosReservados);
      }
  },
  methods: {
      devolverLivro(index) {
          // Remover o livro da lista
          this.reservedBooks.splice(index, 1);
          
          // Atualizar o localStorage com a lista de livros atualizada
          localStorage.setItem('livrosReservados', JSON.stringify(this.reservedBooks));
      }
  },
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  margin: 20px;
  padding: 0;
}
h1 {
  color: #333;
}
button {
  margin: 5px;
  padding: 5px 10px;
  cursor: pointer;
}
button:hover {
  background-color: #ddd;
}
.livro-reservado {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
}
.imagem-livro {
  width: 100px;
  height: auto;
  margin-right: 15px;
  border-radius: 5px;
  object-fit: cover;
}
.informacoes {
  flex: 1;
}
</style>
