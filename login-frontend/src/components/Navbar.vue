<template>
  <nav class="navbar">
    <div class="logo">
      <img src="../assets/logoN.png" @click="goToPrincipal()" alt="Troca de Livros" />
      <span>Nuvem de Livros</span>
    </div>
    <div class="search-bar">
      <input type="text" placeholder="Digite o nome do livro ou autor desejado..." />
      <button>🔍</button>
    </div>
    <div class="user-actions">
      <button @click="gotoCadastroLivros()">📚 Adicionar Livros </button>
      <a href=""><button @click="gotoDashBoard()">📊 Dashboard</button></a>
      <button @click="gotoStatus()">⚙️ Reservas</button>
      <button @click="showNotifications()">🔔 Notificações</button>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  methods:{

    gotoCadastroLivros(){
      this.$router.push('/cadastrarlivros')
    },
    goToPrincipal() {
      this.$router.push('/principal'); 
    },
    gotoDashBoard() {
      this.$router.push('/dashboard'); 
    },
    gotoStatus(){
      this.$router.push('/statusempres'); 
    },
    showNotifications() {
      alert('Você não tem notificações no momento.');
    }

  },
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #5cd1ff;
  color: #fff;
  font-family: Arial, sans-serif;
}

.logo {
  display: flex;
  align-items: center;
}

.logo img {
  height: 40px;
  margin-right: 10px;
}

.search-bar {
  display: flex;
  align-items: center;
}

.search-bar input {
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.search-bar button {
  margin-left: 5px;
  padding: 5px 10px;
  background-color: #007bff;
  border: none;
  color: white;
  border-radius: 5px;
  cursor: pointer;
}

.user-actions button {
  margin-left: 10px;
  padding: 5px 10px;
  background-color: #007bff;
  border: none;
  color: white;
  border-radius: 5px;
  cursor: pointer;
}
</style>
