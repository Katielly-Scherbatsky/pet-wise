<template>
  <div style="position: relative; width: 100%; margin-bottom: 100px">
    <v-row
      style="
        position: relative;
        background-color: #04131a;
        padding-bottom: 40px;
      "
      class="d-flex flex-column"
    >
      <div class="d-flex justify-space-around align-center">
        <v-col cols="4" style="margin-top: 160px; margin-right: 560px">
          <div class="d-flex flex-wrap ma-0 pa-0">
            <h1>PET WISE<span style="color: #00bfae">.</span></h1>
            <p class="text-left text-justify mt-5 mb-16">
              Cuidar da saúde do seu pet nunca foi tão fácil. Registre,
              acompanhe e mantenha seu amigo de quatro patas sempre saudável com
              nossas ferramentas personalizadas.
            </p>
            <span class="text-left">
              <v-btn
                style="
                  background: linear-gradient(#12e0ce, #007a6f);
                  padding: 10px 32px;
                  height: 50px;
                  width: 230px;
                "
                @click="cadastrarConta()"
              >
                <h3>Registre-se agora</h3>
              </v-btn>
              <h4>
                JÁ TEM UMA CONTA?
                <v-btn
                  variant="plain"
                  class="ma-0 pa-0"
                  :ripple="false"
                  @click="realizarLogin()"
                >
                  <h4 style="color: #00bfae">FAÇA LOGIN AQUI!</h4>
                </v-btn>
              </h4>
            </span>
          </div>
        </v-col>
        <img
          src="@/assets/gato-home.jpg"
          alt="Imagem Gato"
          width="50px"
          style="
            margin-left: 600px;
            position: absolute;
            top: 60px;
            z-index: 0;
            height: 100%;
            width: 40%;
            object-fit: cover;
          "
        />
      </div>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "PaginaHome",
  methods: {
    cadastrarConta() {
      this.$router.push("/cadastrar");
    },
    realizarLogin() {
      this.$router.push("/login");
    },
  },
};
</script>
