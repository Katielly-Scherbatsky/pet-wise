<template>
  <h5>{{ label }}</h5>
  <v-text-field
    v-model="internalValue"
    :width="width"
    variant="solo-filled"
    dense
    class="custom-text-field"
    style="padding: 0; margin-bottom: 6px"
  >
    <template v-slot:prepend-inner>
      <v-icon
        style="
          background-color: #00bfae;
          color: #03202e;
          width: 55px;
          height: 56px;
          opacity: 1;
          padding-inline-start: 0;
          left: -12px;
          border-top-left-radius: 4px;
          border-bottom-left-radius: 4px;
        "
        >{{ icone }}</v-icon
      >
    </template>
  </v-text-field>
</template>

<script setup>
import { defineProps, defineEmits, ref, watch } from "vue";

const props = defineProps({
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
  modelValue: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["update:modelValue"]);

const internalValue = ref(props.modelValue);

watch(internalValue, (newValue) => {
  emit("update:modelValue", newValue);
});
</script>

<style scoped>
.v-input--density-default {
  height: 60px !important;
}
.v-field--prepended {
  padding-inline-start: 0 !important;
}
</style>
