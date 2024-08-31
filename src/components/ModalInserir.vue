<template>
  <v-dialog
    :model-value="localIsOpen"
    @update:model-value="updateDialog"
    max-width="900px"
  >
    <v-card
      style="background-color: #04131a; padding: 40px; border-radius: 10px"
    >
      <v-card-title>
        <span class="d-flex d-flex-inline align-center ml-5">
          <img src="@/assets/sep.png" alt="Detalhe" width="10px" height="6px" />
          <h7 class="ml-4">{{ title }}</h7>
        </span>
      </v-card-title>

      <v-card-text>
        <slot name="form-fields" class="d-flex flex-wrap"> </slot>
      </v-card-text>

      <v-card-actions class="mr-9">
        <v-spacer></v-spacer>
        <v-btn
          style="
            background: linear-gradient(#12e0ce, #007a6f);
            padding: 5px 32px;
            height: 40px;
            width: 130px;
          "
          class="mr-6"
          @click="save"
        >
          <v-icon class="mr-2" size="18">mdi-check</v-icon>
          <h3 style="font-size: 15px">Salvar</h3>
        </v-btn>
        <v-btn
          style="
            background: linear-gradient(#12e0ce, #007a6f);
            padding: 5px 32px;
            height: 40px;
            width: 140px;
          "
          @click="cancel"
        >
          <v-icon class="mr-2" size="18">mdi-window-close</v-icon>
          <h3 style="font-size: 15px">Cancelar</h3>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "ModalInserir",
  props: {
    title: {
      type: String,
      default: "Título do Formulário",
    },
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      localIsOpen: this.isOpen,
    };
  },
  watch: {
    isOpen(val) {
      this.localIsOpen = val;
    },
  },
  methods: {
    updateDialog(val) {
      this.localIsOpen = val;
      this.$emit("update:isOpen", val);
    },
    save() {
      this.$emit("save", this.formData);
      this.updateDialog(false); // Fechar o modal após salvar
    },
    cancel() {
      this.updateDialog(false); // Fechar o modal ao cancelar
    },
  },
};
</script>
