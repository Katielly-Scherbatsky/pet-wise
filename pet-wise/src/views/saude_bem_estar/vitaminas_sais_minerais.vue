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
        <button-component-clicked
          v-bind="props"
          label="Saúde e Bem-Estar"
          width="270px"
        >
        </button-component-clicked>
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
          Vitamina e sais minerais<span style="color: #00bfae">.</span>
          <v-btn
            style="background-color: #cdccd2; margin-left: 108px; height: 45px"
            @click="openModal()"
          >
            <h3 style="font-size: 13px; color: #595959">
              Inserir novo Registro
            </h3>
            <v-icon class="ml-2 grey-icon" size="18">mdi-plus</v-icon>
          </v-btn>
        </h1>
      </v-col>
    </v-row>
    <div class="d-flex flex-wrap" style="margin-left: 150px">
      <card-vitamina-minerais :tipo="'vitamina'"></card-vitamina-minerais>
    </div>
  </div>
  <div>
    <modal-vitamina-minerais
      :isOpen="modalOpen"
      title="Cadastar Vitamina e Sais Minerais"
      @save="handleSave"
      @update:isOpen="modalOpen = $event"
    >
      <template #form-fields>
        <div class="d-flex flex-wrap">
          <v-col cols="6">
            <field-component-inserir
              v-model="formulario.nome"
              width="350px"
              label="Nome:"
              icone="mdi-account"
            ></field-component-inserir>
          </v-col>
          <v-col cols="6">
            <field-component-inserir
              v-model="formulario.dose"
              width="350px"
              label="Dose:"
              icone="mdi-account"
            ></field-component-inserir>
          </v-col>
          <v-col cols="6">
            <field-component-inserir
              v-model="formulario.dataAdministracao"
              width="350px"
              label="Data da Administração:"
              icone="mdi-account"
            ></field-component-inserir>
          </v-col>
          <v-col cols="6">
            <field-component-inserir
              v-model="formulario.proximaDose"
              width="350px"
              label="Próxima Dose:"
              icone="mdi-account"
            ></field-component-inserir>
          </v-col>
          <v-col cols="12">
            <field-component-inserir
              v-model="formulario.observacao"
              width="740px"
              label="Observação:"
              icone="mdi-account"
            ></field-component-inserir>
          </v-col>
        </div>
      </template>
    </modal-vitamina-minerais>
  </div>
</template>

<script>
import CardVitaminaMinerais from "@/components/CardExibirComponent/CardVitaminaMinerais.vue";
import FieldComponentInserir from "@/components/FieldComponentInserir.vue";
import ModalVitaminaMinerais from "@/components/ModalInserir.vue";
export default {
  components: {
    CardVitaminaMinerais,
    ModalVitaminaMinerais,
    FieldComponentInserir,
  },
  name: "PaginaInicial",
  data() {
    return {
      modalOpen: false,
      formulario: {
        nome: null,
        dose: null,
        dataAdministracao: null,
        proximaDose: null,
        observacao: null,
      },
    };
  },
  methods: {
    openModal() {
      this.modalOpen = true;
    },
    handleSave(data) {
      console.log("Dados salvos:", data);
      this.modalOpen = false;
    },
    handleCancel() {
      this.modalOpen = false;
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
