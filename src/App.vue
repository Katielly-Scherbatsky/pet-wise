<template>
  <v-app>
    <v-app-bar
      v-if="navBarNaoUsuario"
      app
      color="primary"
      dark
      style="height: 85px"
      class="pt-3"
    >
      <v-btn
        style="margin-left: 170px; opacity: 1"
        variant="plain"
        :ripple="false"
      >
        <img
          :src="logo"
          alt="Logo Pet Wise"
          width="150px"
          @click="voltarInicio()"
        />
      </v-btn>
      <v-spacer></v-spacer>
      <div style="margin-right: 80px">
        <v-btn
          text
          to="/"
          style="text-transform: initial; font-size: 15px"
          class="mx-2"
          >Home</v-btn
        >
        <v-btn
          text
          to="/funcionalidades"
          style="text-transform: initial; font-size: 15px"
          class="mx-2"
          >Funcionalidades</v-btn
        >
        <v-btn
          text
          to="/login"
          style="margin-right: 170px; text-transform: initial; font-size: 15px"
          class="mx-2"
          >Login</v-btn
        >
      </div>
    </v-app-bar>
    <v-app-bar
      v-else-if="!semNavBar"
      app
      color="primary"
      dark
      style="height: 85px"
      class="pt-3"
    >
      <v-btn
        style="margin-left: 170px; opacity: 1"
        variant="plain"
        :ripple="false"
      >
        <img
          :src="logo"
          alt="Logo Pet Wise"
          width="150px"
          @click="voltarPaginaInicial()"
        />
      </v-btn>
      <v-spacer></v-spacer>
      <div>
        <v-btn
          text
          to="/pagina_inicial"
          style="text-transform: initial; font-size: 15px"
          class="mx-2"
          >Home</v-btn
        >
        <v-btn
          style="text-transform: initial; font-size: 15px; opacity: 1"
          :ripple="false"
          variant="plain"
          text
          to="/pagina_inicial_pet"
        >
          <v-avatar color="#00bfae" style="height: 40px; margin-right: 10px">
            <img
              src="@/assets/gato-marrom.jpg"
              alt="Avatar Online"
              style="
                height: 100%;
                width: 100%;
                object-fit: cover;
                border-radius: 50%;
              "
            />
          </v-avatar>
          Pets</v-btn
        >
        <v-menu width="100" style="margin-left: 50px">
          <template v-slot:activator="{ props }">
            <v-btn
              v-bind="props"
              style="
                margin-right: 170px;
                text-transform: initial;
                font-size: 15px;
                opacity: 1;
              "
              :ripple="false"
              variant="plain"
            >
              <v-avatar
                color="#00bfae"
                style="height: 40px; margin-right: 10px"
              >
                <h1 style="font-size: 14px">{{ nomeAbreviado }}</h1>
              </v-avatar>
              Perfil
            </v-btn>
          </template>

          <v-list
            class="mt-2 ma-0 pa-0 custom-list"
            style="border: #03202e solid 2px; border-radius: 10px"
          >
            <v-list-item>
              <v-btn
                style="opacity: 1"
                color="white"
                variant="plain"
                :ripple="false"
                class="text-left"
                text
                to="/perfil"
              >
                <h3
                  style="
                    color: #03202e;
                    font-size: 11px;
                    text-transform: capitalize;
                  "
                >
                  Configuração
                </h3>
              </v-btn>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-app-bar>
    <router-view></router-view>
  </v-app>
</template>

<script setup>
import { useRouter, useRoute } from "vue-router";
import { computed, ref, onMounted } from "vue";
import logo from "@/assets/pet-wise-logo.png";

const router = useRouter();
const route = useRoute();

const navBarNaoUsuario = computed(() => {
  const rotasNavBarNaoUsuario = ["/", "/funcionalidades"];
  return rotasNavBarNaoUsuario.includes(route.path);
});

const semNavBar = computed(() => {
  const rotassemNavBar = ["/login", "/cadastrar"];
  return rotassemNavBar.includes(route.path);
});

function voltarInicio() {
  router.push("/");
}
function voltarPaginaInicial() {
  router.push("/pagina_inicial");
}

const nomeAbreviado = ref("");

function extractnomeAbreviado() {
  const user = JSON.parse(localStorage.getItem("usuario"));
  if (user && user.nome) {
    const nomePartes = user.nome.split(" ");
    const primeiroNome = nomePartes[0] || "";
    const segundoNome = nomePartes[1] || "";
    nomeAbreviado.value =
      (primeiroNome.charAt(0) || "") + (segundoNome.charAt(0) || "");
  }
}

onMounted(() => {
  extractnomeAbreviado();
});
</script>

<style>
.v-application__wrap {
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  max-width: 100%;
  min-height: 90vh !important;
  min-height: 90dvh !important;
  position: relative;
}
.custom-list {
  overflow: hidden; /* Esconde qualquer conteúdo que exceda a altura */
}
</style>
