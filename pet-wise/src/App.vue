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
      <v-btn text to="/" style="text-transform: initial; font-size: 15px"
        >Home</v-btn
      >
      <v-btn
        text
        to="/funcionalidades"
        style="text-transform: initial; font-size: 15px"
        >Funcionalidades</v-btn
      >
      <v-btn
        text
        to="/login"
        style="margin-right: 170px; text-transform: initial; font-size: 15px"
        >Login</v-btn
      >
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
      <v-btn
        text
        to="/pagina_inicial"
        style="text-transform: initial; font-size: 15px"
        >Home</v-btn
      >
      <v-btn style="text-transform: initial; font-size: 15px">Pets</v-btn>
      <v-btn
        style="margin-right: 170px; text-transform: initial; font-size: 15px"
        >Perfil</v-btn
      >
    </v-app-bar>
    <router-view></router-view>
  </v-app>
</template>

<script setup>
import { useRouter, useRoute } from "vue-router";
import { computed } from "vue";
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
</style>
