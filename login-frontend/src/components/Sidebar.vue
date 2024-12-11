
<!-- Arquivo: Sidebar.vue -->
<template>
  <aside class="sidebar">
    <div class="section">
      <h3>Gêneros:</h3>
      <ul>
        <li>Ficção</li>
        <li>História</li>
        <li>Biografias e Memórias</li>
        <li>Romance</li>
        <li>Suspense e Mistério</li>
      </ul>
    </div>
    <div class="section">
      <h3>Anos:</h3>
      <ul>
        <li>2000 - 2010</li>
        <li>2010 - 2020</li>
        <li>2020 - 2023</li>
      </ul>
    </div>
    <div class="section">
      <h3>Autores:</h3>
      <ul>
        <li>Agatha Christie</li>
        <li>George Orwell</li>
        <li>Jane Austen</li>
        <li>J.R.R. Tolkien</li>
        <li>Toni Morrison</li>
      </ul>
    </div>
  </aside>
</template>

<script>
export default {
  name: "Sidebar",
};
</script>

<style scoped>
.sidebar {
  width: 250px;
  background-color: #d4f1f9;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.section {
  margin-bottom: 20px;
}

h3 {
  font-size: 18px;
  margin-bottom: 10px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 5px;
}
</style>
