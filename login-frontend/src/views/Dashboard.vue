<template>
    <Navbar  />
  <div id="app" class="dashboard-container">
    <!-- Conteúdo principal em grade -->
    <div class="dashboard-grid">
      <!-- Gráfico de Livros mais Emprestados -->
      <section class="card">
        <h2 class="card-title">Livros mais Emprestados</h2>
        <canvas id="reservationDoughnutChart"></canvas>
      </section>

      <!-- Gráfico de Usuários mais Comuns -->
      <section class="card">
        <h2 class="card-title">Usuários mais Comuns</h2>
        <canvas id="userBarChart"></canvas>
      </section>

      <!-- Gerar Relatórios -->
      <section class="card">
        <h2 class="card-title">Gerar Relatório</h2>
        <form class="report-form">
          <label>
            Tipo de Relatório:
            <select>
              <option value="pdf">PDF</option>
              <option value="excel">Excel</option>
              <option value="csv">CSV</option>
            </select>
          </label>
          <button class="btn btn-primary" @click="downloadChartAsPDF">Gerar</button>
        </form>
      </section>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import { Chart, registerables } from "chart.js";
import { jsPDF } from "jspdf";

Chart.register(...registerables);

export default {
  components: {
    Navbar,
  },
  mounted() {
    this.renderDoughnutChart();
    this.renderBarChart();
  },
  methods: {
    renderDoughnutChart() {
      const ctx = document.getElementById("reservationDoughnutChart").getContext("2d");
      new Chart(ctx, {
        type: "doughnut",
        data: {
          labels: ["Livro A", "Livro B", "Livro C"],
          datasets: [{
            data: [30, 30, 30],
            backgroundColor: ["#FFD700", "#ADFF2F", "#00BFFF"],
          }],
        },
        options: {
          plugins: {
            legend: { display: true, position: "bottom" },
          },
        },
      });
    },
    renderBarChart() {
      const ctx = document.getElementById("userBarChart").getContext("2d");
      new Chart(ctx, {
        type: "bar",
        data: {
          labels: ["Usuário X", "Usuário Y", "Usuário Z"],
          datasets: [{
            label: "Reservas",
            data: [10, 15, 20],
            backgroundColor: ["#FF4500", "#1E90FF", "#32CD32"],
          }],
        },
        options: {
          plugins: {
            legend: { display: false },
          },
        },
      });
    },
    downloadChartAsPDF() {
      const pdf = new jsPDF();
      const canvas = document.getElementById("reservationDoughnutChart");
      const imgData = canvas.toDataURL("image/png");
      pdf.addImage(imgData, "PNG", 10, 10, 180, 180);
      pdf.save("grafico_reservas.pdf");
    },
  },
};
</script>


<style scoped>
body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  background-color: #EAF6FF;
}

.dashboard-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.dashboard-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #4682B4;
  padding: 10px 20px;
  border-radius: 10px;
  color: white;
}

.header-title {
  font-size: 1.5rem;
  margin: 0;
}

.header-icon {
  font-size: 2rem;
}

.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: 20px;
}

.card {
  background-color: #1E1E2E;
  color: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.card-title {
  font-size: 1.2rem;
  margin-bottom: 20px;
}

canvas {
  max-width: 100%;
  height: auto;
}

.report-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.btn {
  font-size: 1rem;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
}

.btn-primary {
  background-color: #007BFF;
  color: white;
}

.btn-primary:hover {
  background-color: #0056b3;
}
</style>
