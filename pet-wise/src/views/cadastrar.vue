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
                @click="voltarInicio()"
              />
            </v-btn>
            <h2 class="text-left mb-8">
              Junte-se ao PetWise e comece a cuidar <br />do seu pet hoje!
            </h2>
            <span class="text-left">
              <field-component
                width="400px"
                label="Usuário"
                icone="mdi-account"
              >
              </field-component>
              <field-component width="400px" label="E-mail" icone="mdi-email">
              </field-component>
              <field-component width="400px" label="Senha" icone="mdi-lock">
              </field-component>
              <field-component
                width="400px"
                label="Confirmar Senha"
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
                  <h3>Realizar Cadastro</h3>
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
export default {
  name: "PaginaCadastrar",
  methods: {
    voltarInicio() {
      this.$router.push("/");
    },
    realizarCadastro() {
      this.$router.push("/pagina_inicial");
    },
    realizarLogin() {
      this.$router.push("/login");
    },
  },
};
</script>
