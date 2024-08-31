<template>
  <v-card class="pa-4" max-width="400" outlined>
    <v-card-title>
      <span class="headline">{{ props.title }}</span>
    </v-card-title>
    <v-card-subtitle>{{ props.subtitle }}</v-card-subtitle>
    <v-card-text>
      <p>{{ props.content }}</p>
    </v-card-text>
    <v-card-actions>
      <v-btn @click="onClick" color="primary">Ação</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

// Definindo as props
const props = defineProps({
  title: String,
  subtitle: String,
  content: String,
});

// Definindo os eventos emitidos
const emit = defineEmits(["click"]);

// Função para emitir o evento de clique
function onClick() {
  emit("click");
}
</script>

<style scoped>
/* Estilos personalizados para o card */
.v-card-title {
  color: #1976d2; /* Exemplo de cor azul */
  font-weight: bold;
}
</style>
