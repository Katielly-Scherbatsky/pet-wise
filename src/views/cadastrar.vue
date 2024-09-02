<template>
  <div style="position: relative; width: 100%; margin-bottom: 70px">
    <v-row
      style="
        position: relative;
        background-color: #04131a;
        padding-bottom: 40px;
        height: 780px;
      "
      class="d-flex flex-column"
    >
      <div class="d-flex justify-space-around align-center">
        <v-col cols="4" style="margin-top: 40px; margin-right: 560px">
          <div class="d-flex flex-wrap ma-0 pa-0">
            <v-btn
              style="opacity: 1"
              variant="plain"
              :ripple="false"
              class="ma-0 pa-0 mb-16"
            >
              <img
                src="@/assets/pet-wise-logo.png"
                alt="Logo Pet Wise"
                width="150px"
                @click="voltarInicio"
              />
            </v-btn>
            <h2 class="text-left mb-8">
              Junte-se ao PetWise e comece a cuidar <br />do seu pet hoje!
            </h2>
            <span class="text-left">
              <field-component
                v-model="nome"
                width="400px"
                label="Nome"
                icone="mdi-account"
              ></field-component>
              <field-component
                v-model="email"
                width="400px"
                label="E-mail"
                icone="mdi-email"
              ></field-component>
              <field-component
                v-model="senha"
                type="password"
                width="400px"
                label="Senha"
                icone="mdi-lock"
              ></field-component>
              <field-component
                v-model="confirmarSenha"
                type="password"
                width="400px"
                label="Confirmar Senha"
                icone="mdi-lock"
              ></field-component>
              <span class="text-left">
                <v-btn
                  style="
                    background: linear-gradient(#12e0ce, #007a6f);
                    padding: 10px 32px;
                    height: 50px;
                    width: 230px;
                  "
                  class="mt-6"
                  @click="realizarCadastro"
                >
                  <h3>Realizar Cadastro</h3>
                </v-btn>
                <h4>
                  JÁ TEM UMA CONTA?
                  <v-btn
                    variant="plain"
                    class="ma-0 pa-0"
                    :ripple="false"
                    @click="realizarLogin"
                  >
                    <h4 style="color: #00bfae">FAÇA LOGIN AQUI!</h4>
                  </v-btn>
                </h4>
              </span>
            </span>
          </div>
        </v-col>
        <img
          src="@/assets/gato-registrar.jpg"
          alt="Imagem Gato"
          style="
            margin-left: 600px;
            position: absolute;
            top: -30px;
            z-index: 0;
            height: 840px;
            width: 40%;
            object-fit: cover;
          "
        />
      </div>
    </v-row>
  </div>
</template>

<script>
import { cadastrarUsuario } from "./store/index.js";

export default {
  name: "PaginaCadastrar",
  data() {
    return {
      nome: "",
      email: "",
      senha: "",
      confirmarSenha: "",
    };
  },
  methods: {
    voltarInicio() {
      this.$router.push("/");
    },
    async realizarCadastro() {
      if (this.senha !== this.confirmarSenha) {
        window.console.error("As senhas não coincidem");
        return;
      }

      const result = await cadastrarUsuario(this.nome, this.email, this.senha);
      if (result) {
        this.$router.push("/pagina_inicial");
      } else {
        window.console.error("Erro ao realizar cadastro");
      }
    },
    realizarLogin() {
      this.$router.push("/login");
    },
  },
};
</script>
