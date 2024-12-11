<template>
  <div class="detalhes-livro">
    <Navbar />
    <div class="conteudo">
      <button class="voltar" @click="voltar">&larr; Voltar</button>
      <div class="detalhes" v-if="livro">
        <img :src="livro.imagem || require('@/imageBook/fahrenheit.png')" :alt="livro.titulo" class="imagem-livro" />
        <div class="informacoes">
          <h1>{{ livro.titulo }}</h1>
          <p><strong>Autor:</strong> {{ livro.autor }}</p>
          <p><strong>Ano:</strong> {{ livro.ano }}</p>
          <p><strong>Sinopse:</strong> {{ livro.sinopse }}</p>
          <p><strong>Número de cópias:</strong> {{ livro.copias }}</p>
          <button class="reservar" @click="reservarLivro">Reservar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";

export default {
  name: "DetalhesLivro",
  components: {
    Navbar,
  },
  data() {
    return {
      livro: null, // Inicialize como null para indicar ausência de dados
      livrosReservados: [], // Lista de livros reservados
    };
  },
  created() {
    // Carregar o livro selecionado via query
    this.livro = this.$route.query.livro ? JSON.parse(this.$route.query.livro) : null;

    // Recuperar a lista de livros reservados do localStorage
    const livrosReservados = localStorage.getItem('livrosReservados');
    if (livrosReservados) {
      this.livrosReservados = JSON.parse(livrosReservados);
    }
  },
  methods: {
    voltar() {
      this.$router.go(-1);
    },
    reservarLivro() {
      if (this.livro.copias > 0) {
        this.livro.copias -= 1; // Decrementar o número de cópias
        this.livrosReservados.push({ ...this.livro, reservedCount: 1 }); // Adicionar à lista de reservas
        alert("Livro reservado com sucesso!");

        // Atualizar o localStorage com a lista de livros reservados
        localStorage.setItem('livrosReservados', JSON.stringify(this.livrosReservados));

        // Simular redirecionamento para a tela de reservas
        this.$router.push({
          path: "/statusempres",
          query: { livrosReservados: JSON.stringify(this.livrosReservados) },
        });
      } else {
        alert("Desculpe, não há cópias disponíveis para reserva.");
      }
    },
  },
};
</script>

<style scoped>

.detalles-livro {
  display: flex;
  flex-direction: column;
  font-family: Arial, sans-serif; /* Fonte principal */
}

.conteudo {
  display: flex; /* Alinha o conteúdo lado a lado */
  flex-direction: column;
  padding: 20px;
  background-color: #f9f9f9; /* Fundo cinza claro */
}

.voltar {
  background-color: #007bff; /* Azul */
  color: white; /* Texto branco */
  border: none;
  border-radius: 5px; /* Bordas arredondadas */
  padding: 8px 12px;
  cursor: pointer;
  margin-bottom: 20px;
}

.voltar:hover {
  background-color: #0056b3; /* Azul escuro ao passar o mouse */
}

.detalles {
  display: flex;
  flex-direction: row; /* Alinha o conteúdo do livro horizontalmente */
  background-color: #fff; /* Fundo branco */
  border-radius: 10px; /* Bordas arredondadas */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Sombra suave */
  padding: 20px;
  margin-top: 20px;
}

.imagem-livro {
  max-width: 200px; /* Define o tamanho máximo da imagem */
  height: auto;
  margin-right: 20px; /* Espaçamento entre imagem e texto */
  border-radius: 5px; /* Bordas arredondadas para a imagem */
}

.informacoes {
  flex: 1;
}

.informacoes h1 {
  font-size: 28px;
  color: #333;
}

.informacoes p {
  font-size: 16px;
  color: #555;
}

.reservar {
  background-color: #28a745; /* Verde para o botão de reserva */
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  cursor: pointer;
  margin-top: 15px;
}

.reservar:hover {
  background-color: #218838; /* Verde mais escuro ao passar o mouse */
}
</style>

