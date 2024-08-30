<template>
  <v-btn
    style="background: #03202e; height: 50px"
    :width="width"
    @click="clickButton"
  >
    <h6>{{ label }}</h6>
  </v-btn>
</template>

<script>
export default {
  name: "ButtonComponent",
  data() {
    return {
      bgButton: null,
    };
  },
  props: {
    width: {
      type: String,
      default: "200px",
    },
    label: {
      type: String,
      default: "",
    },
    onClick: {
      type: Function,
      default: () => {},
    },
    subMenus: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    clickButton(event) {
      this.onClick(event);
    },
  },
};
</script>
