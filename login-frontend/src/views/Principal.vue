<!-- Arquivo: TelaPrincipal.vue -->
<template>
  <div class="tela-principal">
    <Navbar /> <!-- Componente de barra de navegação -->
    <div class="main-content">
      <Sidebar /> <!-- Componente de barra lateral -->
      <div class="conteudo">
        <div class="livros-em-alta">
          <h2>Livros em alta! <span class="icon-fire">🔥</span></h2> <!-- Título para livros em alta -->
          <div class="livros">
            <!-- Cards dos livros em alta -->
            <div class="livro-card" v-for="livro in livrosEmAlta" :key="livro.id">
              <img :src="livro.imagem" :alt="livro.titulo" /> <!-- Imagem do livro -->
              <h3>{{ livro.titulo }}</h3> <!-- Título do livro -->
              <p>Autor: {{ livro.autor }}</p> <!-- Autor do livro -->
              <p>Ano: {{ livro.ano }}</p> <!-- Ano de publicação -->
              <button @click="gotoDetalhes(livro)">Sobre o Livro</button> <!-- Botão para editar livro -->
            </div>
          </div>
        </div>

        <div class="todos-os-livros">
          <h2>Todos os livros <span class="icon-books">📚</span></h2> <!-- Título para todos os livros -->
          <div class="livros">
            <!-- Cards de todos os livros -->
            <div class="livro-card" v-for="livro in todosOsLivros" :key="livro.id">
              <img :src="livro.imagem" :alt="livro.titulo" /> <!-- Imagem do livro -->
              <h3>{{ livro.titulo }}</h3> <!-- Título do livro -->
              <p>Autor: {{ livro.autor }}</p> <!-- Autor do livro -->
              <p>Ano: {{ livro.ano }}</p> <!-- Ano de publicação -->
              <button @click="gotoDetalhes(livro)">Sobre o Livro</button> <!-- Botão para editar livro -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Sidebar from "../components/Sidebar.vue";

export default {
  name: "TelaPrincipal", // Nome do componente
  components: {
    Navbar,
    Sidebar,
  },
  data() {
    return {
      // Lista de livros em alta
      livrosEmAlta: [
        { 
          id: 1, 
          titulo: "1984", 
          autor: "George Orwell", 
          ano: 1949, 
          imagem: require('../imageBook/georgeOrwell.png'), 
          sinopse: "Uma distopia que explora o totalitarismo e a vigilância governamental.", 
          copias: 5 
        },
        { 
          id: 2, 
          titulo: "Morte no Nilo", 
          autor: "Agatha Christie", 
          ano: 1937, 
          imagem: require('../imageBook/agathaChristie.png'), 
          sinopse: "Um clássico romance policial envolvendo mistério e intriga.", 
          copias: 3 
        },
        { 
          id: 3, 
          titulo: "As Aventuras de Tom Sawyer", 
          autor: "Mark Twain", 
          ano: 1876, 
          imagem: require('../imageBook/tomSawyer.png'), 
          sinopse: "As aventuras de um jovem travesso ao longo do rio Mississippi.", 
          copias: 7 
        },
        { 
          id: 4, 
          titulo: "Eu, Robô", 
          autor: "Isaac Asimov", 
          ano: 1950, 
          imagem: require('../imageBook/IsaacAshimov.png'), 
          sinopse: "Uma coletânea de histórias sobre robôs e suas interações com os humanos.", 
          copias: 6 
        },
      ],
      // Lista de todos os livros
      todosOsLivros: [
        { 
          id: 5, 
          titulo: "O Apanhador no Campo de Centeio", 
          autor: "J.D. Salinger", 
          ano: 1951, 
          imagem: require('../imageBook/apanhadorCenteio.png'), 
          sinopse: "Um adolescente rebelde navega pelos desafios da vida e da sociedade.", 
          copias: 4 
        },
        { 
          id: 6, 
          titulo: "Fahrenheit 451", 
          autor: "Ray Bradbury", 
          ano: 1953, 
          imagem: require('../imageBook/fahrenheit.png'), 
          sinopse: "Uma sociedade onde livros são proibidos e queimados.", 
          copias: 8 
        },
        { 
          id: 7, 
          titulo: "Cem Anos de Solidão", 
          autor: "Gabriel García Márquez", 
          ano: 1967, 
          imagem: require('../imageBook/cemanosSolidao.png'), 
          sinopse: "A saga épica da família Buendía ao longo de gerações.", 
          copias: 5 
        },
        { 
          id: 8, 
          titulo: "Amada", 
          autor: "Toni Morrison", 
          ano: 1987, 
          imagem: require('../imageBook/toniMorison.png'), 
          sinopse: "Uma poderosa narrativa sobre escravidão e redenção.", 
          copias: 2 
        },
      ],
    };
  },
  methods: {
    gotoDetalhes(livro) {
      console.log("Livro selecionado:", livro);
      this.$router.push({ 
        path: "/detalheslivros", 
        query: { livro: JSON.stringify(livro) }
      });
    },
  },
};
</script>


<style scoped>
.tela-principal {
  display: flex;
  flex-direction: column;
  font-family: Arial, sans-serif; /* Fonte principal */
}

.main-content {
  display: flex; /* Alinha o conteúdo principal lado a lado */
}

.conteudo {
  flex: 1;
  padding: 20px;
  background-color: #e6f7ff; /* Fundo azul claro */
}

h2 {
  display: flex;
  align-items: center; /* Centraliza verticalmente o texto e o ícone */
  font-size: 24px; /* Tamanho da fonte do título */
}

.icon-fire {
  margin-left: 10px; /* Espaçamento entre texto e ícone */
}

.icon-books {
  margin-left: 10px;
}

.livros {
  display: grid; /* Layout em grade para os cards */
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); /* Configura o número de colunas automaticamente */
  gap: 20px; /* Espaçamento entre os cards */
  margin-top: 20px;
}

.livro-card {
  background: #fff; /* Fundo branco */
  border: 1px solid #ccc; /* Borda cinza clara */
  border-radius: 10px; /* Bordas arredondadas */
  padding: 10px; /* Espaçamento interno */
  text-align: center; /* Centraliza o texto */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Sombra leve */
}

.livro-card img {
  max-width: 100%; /* Limita a largura da imagem ao container */
  border-radius: 5px; /* Bordas arredondadas da imagem */
}

button {
  margin-top: 10px;
  padding: 8px 12px; /* Espaçamento interno do botão */
  background-color: #007bff; /* Fundo azul */
  color: white; /* Texto branco */
  border: none;
  border-radius: 5px; /* Bordas arredondadas */
  cursor: pointer; /* Cursor de mão ao passar sobre o botão */
}

button:hover {
  background-color: #0056b3; /* Fundo azul mais escuro ao passar o mouse */
}
</style>
