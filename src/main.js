import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";

import { registerGlobalComponents } from "./plugins/global-components";
import "./assets/styles/global.css";

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: "light",
    themes: {
      light: {
        colors: {
          primary: "#04131A",
          secondary: "#03202E",
          accent: "#00BFAE",
          error: "#FF5252",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FB8C00",
        },
        fonts: {
          body: "Poppins, sans-serif",
          headline: "Poppins, sans-serif",
        },
      },
    },
  },
});

const app = createApp(App);
registerGlobalComponents(app);
app.use(vuetify);
app.use(router);
app.mount("#app");
