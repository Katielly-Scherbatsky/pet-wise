<template>
  <h5
    class="mb-1"
    style="font-size: 14px; font-weight: 400; font-family: 'Poppins'"
  >
    {{ label }}
  </h5>
  <v-text-field
    :width="width"
    variant="solo-filled"
    dense
    class="mb-0 pb-0"
    density="compact"
    hide-details="auto"
  >
  </v-text-field>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  label: {
    type: String,
    default: "",
  },
  icone: {
    type: String,
    default: "",
  },
  width: {
    type: String,
    default: "",
  },
});
</script>

<style scoped></style>
