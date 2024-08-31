<template>
  <div style="width: 100%">
    <v-row style="background-color: #04131a">
      <v-col
        cols="12"
        style="margin-top: 60px; margin-left: 190px; margin-right: 60px"
      >
        <h1 class="text-left">
          Informação<span style="color: #00bfae">.</span>
        </h1>
        <div style="margin-right: 380px">
          <h2 class="text-left text-justify mt-0 mb-16">
            Cachorros precisam de exercícios diários para se manterem saudáveis
            e felizes.
          </h2>
        </div>
      </v-col>
    </v-row>
  </div>
  <div style="margin-bottom: 40px">
    <v-row>
      <v-col cols="12" style="margin-top: 60px; margin-left: 190px">
        <h1 class="text-left" style="color: #04131a">
          Seus Pets<span style="color: #00bfae">.</span>
        </h1>
      </v-col>
    </v-row>
  </div>
  <div class="d-flex flex-wrap" style="margin-left: 150px; margin-bottom: 60px">
    <div
      style="
        background-color: #00bfae;
        border-radius: 5px;
        height: 300px;
        margin: 33px;
        width: 300px;
      "
    >
      <div style="position: relative">
        <button @click="logarPet()">
          <img
            src="@/assets/gato-marrom.jpg"
            alt="Detalhe"
            class="ma-2"
            style="border-radius: 5px"
            height="285"
            width="285"
          />
        </button>
      </div>
      <h3>Nome do Pet</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "PaginaInicialPet",
  methods: {
    cadastrarConta() {
      this.$router.push("/cadastrar");
    },
    realizarLogin() {
      this.$router.push("/login");
    },
    logarPet() {
      this.$router.push("/pagina_inicial");
    },
  },
};
</script>

<style>
.gradient-icon {
  background: linear-gradient(#12e0ce, #007a6f);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
