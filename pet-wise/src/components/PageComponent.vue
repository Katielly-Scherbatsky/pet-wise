<template>
  <v-app>
    <v-main>
      <v-container>
        <slot name="content">Testeeeeeeee</slot>
      </v-container>
    </v-main>

    <v-footer app>
      <v-container>
        <v-row>
          <v-col class="text-center">
            Pet Wise © Alguns direitos reservados.
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>
