<template>
  <div style="width: 100%">
    <v-row style="background-color: #04131a">
      <v-col cols="12" style="margin-top: 60px; margin-left: 190px">
        <h1 class="text-left">
          Informação<span style="color: #00bfae">.</span>
        </h1>
        <h2 class="text-left text-justify mt-0 mb-16">
          Gatos adoram esconderijos! proporcione um cantinho tranquilo para ele
          se sentir seguro.
        </h2>
      </v-col>
    </v-row>
  </div>
  <div
    style="margin: 60px 0; padding: 0 130px"
    class="d-flex justify-space-around"
  >
    <v-menu width="270">
      <template v-slot:activator="{ props }">
        <button-component
          v-bind="props"
          label="Saúde e Bem-Estar"
          width="270px"
        >
        </button-component>
      </template>
      <v-list
        class="mt-1"
        style="border: #03202e solid 2px; border-radius: 10px"
      >
        <v-list-item class="text-left">
          <v-btn
            style="opacity: 1"
            color="white"
            variant="plain"
            :ripple="false"
            class="text-left mb-2"
            text
            to="/controle_peso"
          >
            <h3
              style="
                color: #03202e;
                font-size: 14px;
                text-transform: capitalize;
              "
            >
              Controle de Peso
            </h3>
          </v-btn>
        </v-list-item>
        <v-divider color="primary" :thickness="2" opacity="1"></v-divider>
        <v-list-item>
          <v-btn
            style="opacity: 1"
            color="white"
            variant="plain"
            :ripple="false"
            class="text-left my-2"
            text
            to="/vacinas_anti_pulgas"
          >
            <h3
              style="
                color: #03202e;
                font-size: 14px;
                text-transform: capitalize;
              "
            >
              Vacinas e Anti-pulgas
            </h3>
          </v-btn>
        </v-list-item>
        <v-divider color="primary" :thickness="2" opacity="1"></v-divider>
        <v-list-item>
          <v-btn
            style="opacity: 1"
            color="white"
            variant="plain"
            :ripple="false"
            class="text-left mt-2"
            text
            to="/vitaminas_sais_minerais"
          >
            <h3
              style="
                color: #03202e;
                font-size: 14px;
                text-transform: capitalize;
              "
            >
              Vitaminas e Sais Minerais
            </h3>
          </v-btn>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-menu width="270">
      <template v-slot:activator="{ props }">
        <button-component v-bind="props" label="Cuidados" width="270px">
        </button-component>
      </template>
      <v-list
        class="mt-1"
        style="border: #03202e solid 2px; border-radius: 10px"
      >
        <v-list-item class="text-left">
          <v-btn
            style="opacity: 1"
            color="white"
            variant="plain"
            :ripple="false"
            class="text-left"
            text
            to="/banho_tosa"
          >
            <h3
              style="
                color: #03202e;
                font-size: 14px;
                text-transform: capitalize;
              "
            >
              Banho e Tosa
            </h3>
          </v-btn>
        </v-list-item>
      </v-list>
    </v-menu>
    <button-component label="Lembretes" width="270px" to="/lembretes">
    </button-component>
  </div>
  <div style="margin-bottom: 100px">
    <v-row>
      <v-col cols="12" style="margin-top: 60px; margin-left: 190px">
        <h1 class="text-left" style="color: #04131a">
          Últimas atualizações<span style="color: #00bfae">.</span>
        </h1>
      </v-col>
    </v-row>
    <v-row
      style="
        background-color: #03202e;
        margin: 30px 190px 10px 190px;
        border-radius: 10px;
      "
    >
      <v-col cols="7" style="margin: 40px 0; margin-left: 80px">
        <span class="d-flex d-flex-inline align-center mb-5">
          <img src="@/assets/sep.png" alt="Detalhe" width="10px" height="6px" />
          <h7 class="ml-4">Vacina cadastrada</h7>
        </span>
        <span class="text-left"
          ><span class="mb-1 d-flex flex-row align-center"
            ><v-icon class="mr-2 gradient-icon" size="18">mdi-needle</v-icon>
            <h5>Vacina: [Nome da Vacina]</h5>
          </span>
          <span class="mb-1 d-flex flex-row align-center"
            ><v-icon class="mr-2 gradient-icon" size="18"
              >mdi-calendar-today</v-icon
            >
            <h5>Data: [Data da Aplicação]</h5>
          </span>
          <span class="mb-1 d-flex flex-row align-center"
            ><v-icon class="mr-2 gradient-icon" size="18"
              >mdi-calendar-today</v-icon
            >
            <h5>Próxima Dose: [Data da Próxima Dose]</h5>
          </span>
        </span>
      </v-col>
      <v-col cols="4">
        <v-btn
          style="
            background: linear-gradient(#12e0ce, #007a6f);
            padding: 10px 32px;
            height: 50px;
            width: 230px;
            margin-top: 140px;
          "
        >
          <h3>Ver vacina</h3>
          <img
            class="ml-4"
            src="@/assets/seta.svg"
            alt="Detalhe"
            height="12px"
          />
        </v-btn>
      </v-col>
    </v-row>
    <v-row
      style="
        background-color: #03202e;
        margin: 30px 190px 10px 190px;
        border-radius: 10px;
      "
    >
      <v-col cols="7" style="margin: 40px 0; margin-left: 80px">
        <span class="d-flex d-flex-inline align-center mb-5">
          <img src="@/assets/sep.png" alt="Detalhe" width="10px" height="6px" />
          <h7 class="ml-4">Mudança de Peso registrada</h7>
        </span>
        <span class="text-left"
          ><span class="mb-1 d-flex flex-row align-center"
            ><v-icon class="mr-2 gradient-icon" size="18">mdi-needle</v-icon>
            <h5>Peso Atual: [Peso em kg]</h5>
          </span>
          <span class="mb-1 d-flex flex-row align-center"
            ><v-icon class="mr-2 gradient-icon" size="18"
              >mdi-calendar-today</v-icon
            >
            <h5>Data: [Data da Pesagem]</h5>
          </span>
        </span>
      </v-col>
      <v-col cols="4">
        <v-btn
          style="
            background: linear-gradient(#12e0ce, #007a6f);
            padding: 10px 32px;
            height: 50px;
            width: 230px;
            margin-top: 140px;
          "
        >
          <h3>Ver Peso</h3>
          <img
            class="ml-4"
            src="@/assets/seta.svg"
            alt="Detalhe"
            height="12px"
          />
        </v-btn>
      </v-col>
    </v-row>
    <v-row
      style="
        background-color: #03202e;
        margin: 30px 190px 10px 190px;
        border-radius: 10px;
      "
    >
      <v-col cols="7" style="margin: 40px 0; margin-left: 80px">
        <span class="d-flex d-flex-inline align-center mb-5">
          <img src="@/assets/sep.png" alt="Detalhe" width="10px" height="6px" />
          <h7 class="ml-4">Vitamina cadastrada</h7>
        </span>
        <span class="text-left"
          ><span class="mb-1 d-flex flex-row align-center"
            ><v-icon class="mr-2 gradient-icon" size="18">mdi-needle</v-icon>
            <h5>Suplemento: [Nome da Vitamina/Suplemento]</h5>
          </span>
          <span class="mb-1 d-flex flex-row align-center"
            ><v-icon class="mr-2 gradient-icon" size="18"
              >mdi-calendar-today</v-icon
            >
            <h5>Data: [Data da Administração]</h5>
          </span>
          <span class="mb-1 d-flex flex-row align-center"
            ><v-icon class="mr-2 gradient-icon" size="18"
              >mdi-calendar-today</v-icon
            >
            <h5>Dose: [Dosagem]</h5>
          </span>
        </span>
      </v-col>
      <v-col cols="4">
        <v-btn
          style="
            background: linear-gradient(#12e0ce, #007a6f);
            padding: 10px 32px;
            height: 50px;
            width: 230px;
            margin-top: 140px;
          "
        >
          <h3>Ver vitamina</h3>
          <img
            class="ml-4"
            src="@/assets/seta.svg"
            alt="Detalhe"
            height="12px"
          />
        </v-btn>
      </v-col>
    </v-row>
    <v-row
      style="
        background-color: #03202e;
        margin: 30px 190px 10px 190px;
        border-radius: 10px;
      "
    >
      <v-col cols="7" style="margin: 40px 0; margin-left: 80px">
        <span class="d-flex d-flex-inline align-center mb-5">
          <img src="@/assets/sep.png" alt="Detalhe" width="10px" height="6px" />
          <h7 class="ml-4">Lembrete de Medicação</h7>
        </span>
        <span class="text-left"
          ><span class="mb-1 d-flex flex-row align-center"
            ><v-icon class="mr-2 gradient-icon" size="18">mdi-needle</v-icon>
            <h5>Medicação: [Nome da Medicação]</h5>
          </span>
          <span class="mb-1 d-flex flex-row align-center"
            ><v-icon class="mr-2 gradient-icon" size="18"
              >mdi-calendar-today</v-icon
            >
            <h5>Data/Horário: [Data e Hora do Lembrete]</h5>
          </span>
        </span>
      </v-col>
      <v-col cols="4">
        <v-btn
          style="
            background: linear-gradient(#12e0ce, #007a6f);
            padding: 10px 32px;
            height: 50px;
            width: 230px;
            margin-top: 140px;
          "
        >
          <h3>Ver Lembrete</h3>
          <img
            class="ml-4"
            src="@/assets/seta.svg"
            alt="Detalhe"
            height="12px"
          />
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ButtonComponent from "@/components/ButtonComponent.vue";
export default {
  components: { ButtonComponent },
  name: "PaginaInicial",
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

<style>
.gradient-icon {
  background: linear-gradient(#12e0ce, #007a6f);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
