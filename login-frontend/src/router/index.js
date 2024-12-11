import { createRouter, createWebHistory } from 'vue-router'; 
import Login from '../views/login.vue'; 
import Dashboard from '../views/Dashboard.vue'; 
import App from '../views/cadastrarLivros.vue'; // Importa o componente App
import Cadastro  from '@/views/Cadastro.vue';
import Principal from '@/views/Principal.vue';
import CadastrarLivros from '../views/cadastrarLivros.vue';
import DetalhesLivros from '@/views/DetalhesLivros.vue';
import StatusEmpres from '@/views/StatusEmpres.vue';

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
  },
  {
    path: '/app', // Nova rota para App.vue
    name: 'App',
    component: App,
  },
  {
    path: '/cadastro', // Nova rota para App.vue
    name: 'Cadastro',
    component: Cadastro,
  },
  {
    path: '/principal', // Nova rota para App.vue
    name: 'principal',
    component: Principal,
  },
  {
    path: '/cadastrarlivros', // Nova rota para App.vue
    name: 'cadastrarlivros',
    component: CadastrarLivros,
  },
  {
    path: '/statusempres', 
    name: 'StatusEmpres',
    component: StatusEmpres,
  },
  {
    path: '/detalheslivros', 
    name: 'detalheslivros',
    component: DetalhesLivros,
  },
  {
    path: '/:catchAll(.*)', // Usando a nova sintaxe para rotas coringa
    redirect: '/login',
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// Proteção das rotas
router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem('token');

  if (to.matched.some(record => record.meta.requiresAuth) && !loggedIn) {
    next('/login');
  } else {
    next();
  }
});

export default router;