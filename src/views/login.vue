<template>
  <div style="position: relative; width: 100%; margin-bottom: 70px">
    <v-row
      style="
        position: relative;
        background-color: #04131a;
        padding-bottom: 40px;
        height: 600px;
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
                @click="voltarInicio()"
              />
            </v-btn>
            <h2 class="text-left mb-8">Bem-vindo de volta ao PetWise!</h2>
            <span class="text-left">
              <field-component
                v-model="email"
                width="400px"
                label="E-mail"
                icone="mdi-account"
              >
              </field-component>
              <field-component
                v-model="senha"
                width="400px"
                label="Senha"
                icone="mdi-lock"
              >
              </field-component>
              <span class="text-left">
                <v-btn
                  style="
                    background: linear-gradient(#12e0ce, #007a6f);
                    padding: 10px 32px;
                    height: 50px;
                    width: 230px;
                  "
                  class="mt-6"
                  @click="realizarCadastro()"
                >
                  <h3>Realizar Login</h3>
                </v-btn>
                <h4>
                  NOVO POR AQUI?
                  <v-btn
                    variant="plain"
                    class="ma-0 pa-0"
                    :ripple="false"
                    @click="cadastrarConta()"
                  >
                    <h4 style="color: #00bfae">
                      CRIE UMA CONTA E COMECE A CUIDAR MELHOR DO SEU PET!
                    </h4>
                  </v-btn>
                </h4>
              </span>
            </span>
          </div>
        </v-col>
        <img
          src="@/assets/cachorro-login.jpg"
          alt="Imagem Gato"
          style="
            margin-left: 600px;
            position: absolute;
            top: -30px;
            z-index: 0;
            height: 660px;
            width: 40%;
            object-fit: cover;
          "
        />
      </div>
    </v-row>
  </div>
</template>

<script>
import { autenticarUsuario } from "./store/index.js";
export default {
  name: "PaginaLogin",
  data() {
    return {
      email: null,
      senha: null,
    };
  },
  methods: {
    voltarInicio() {
      this.$router.push("/");
    },
    async realizarCadastro() {
      const sucesso = await autenticarUsuario(this.email, this.senha);
      if (sucesso) {
        setTimeout(() => {
          this.$router.push("/pagina_inicial_pet");
        }, 1000);
      } else {
        window.console.log(
          "Registro Não Encontrado ou Usuário ou Senha Inválido"
        );
      }
    },
    cadastrarConta() {
      this.$router.push("/cadastrar");
    },
  },
};
</script>
