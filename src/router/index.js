import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/home.vue";
import Funcionalidades from "../views/funcionalidades.vue";
import PaginaInicial from "../views/pagina_inicial.vue";
import PaginaInicialPet from "../views/pagina_inicial_pet.vue";
import Login from "../views/login.vue";
import Cadastrar from "../views/cadastrar.vue";
import ControlePeso from "../views/saude_bem_estar/controle_peso.vue";
import VitaminasSaisMinerais from "../views/saude_bem_estar/vitaminas_sais_minerais.vue";
import VacinasAntiPulgas from "../views/saude_bem_estar/vacinas_anti_pulgas.vue";
import BanhoTosa from "../views/cuidados/banho_tosa.vue";
import Lembretes from "../views/lembretes/lembretes.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/funcionalidades",
    name: "funcionalidades",
    component: Funcionalidades,
  },
  {
    path: "/pagina_inicial",
    name: "pagina_inicial",
    component: PaginaInicial,
  },
  {
    path: "/pagina_inicial_pet",
    name: "pagina_inicial_pet",
    component: PaginaInicialPet,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/cadastrar",
    name: "cadastrar",
    component: Cadastrar,
  },
  {
    path: "/controle_peso",
    name: "controle_peso",
    component: ControlePeso,
  },
  {
    path: "/vitaminas_sais_minerais",
    name: "vitaminas_sais_minerais",
    component: VitaminasSaisMinerais,
  },
  {
    path: "/vacinas_anti_pulgas",
    name: "vacinas_anti_pulgas",
    component: VacinasAntiPulgas,
  },
  {
    path: "/banho_tosa",
    name: "banho_tosa",
    component: BanhoTosa,
  },
  {
    path: "/lembretes",
    name: "lembretes",
    component: Lembretes,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
