<template>
  <div
    style="
      background-color: #03202e;
      border-radius: 5px;
      height: 230px;
      padding: 35px 40px 35px 60px;
      margin: 33px;
      width: 460px;
    "
  >
    <div style="position: relative">
      <v-icon
        style="position: absolute; transform: translate(-203px, 3px)"
        class="mr-2 gradient-icon"
        size="18"
        >mdi-needle</v-icon
      >
      <span
        class="mb-1 d-flex justify-space-between"
        style="border-bottom: 1px solid #00bfae; width: 100%"
      >
        <h5 class="align-start" style="font-weight: 400; font-size: 14px">
          Vacina:
        </h5>
        <div width="200" class="text-end">
          <h5 style="font-weight: 400; color: white; font-size: 15px">
            [Nome Vacina]
          </h5>
        </div>
      </span>
      <v-icon
        style="position: absolute; transform: translate(-203px, 3px)"
        class="mr-2 gradient-icon"
        size="18"
        >mdi-calendar-today</v-icon
      >
      <span
        class="mb-1 d-flex justify-space-between"
        style="border-bottom: 1px solid #00bfae; width: 100%"
      >
        <h5 class="align-start" style="font-weight: 400; font-size: 14px">
          Data da Aplicação:
        </h5>
        <div width="200" class="text-end">
          <h5 style="font-weight: 400; color: white; font-size: 15px">
            [Data da Aplicação]
          </h5>
        </div>
      </span>
      <v-icon
        style="position: absolute; transform: translate(-203px, 3px)"
        class="mr-2 gradient-icon"
        size="18"
        >mdi-needle</v-icon
      >
      <span
        class="mb-1 d-flex justify-space-between"
        style="border-bottom: 1px solid #00bfae; width: 100%"
      >
        <h5 class="align-start" style="font-weight: 400; font-size: 14px">
          Próxima Dose:
        </h5>
        <div width="200" class="text-end">
          <h5 style="font-weight: 400; color: white; font-size: 15px">
            [Data da Próxima Dose]
          </h5>
        </div>
      </span>
      <v-icon
        style="position: absolute; transform: translate(-203px, 3px)"
        class="mr-2 gradient-icon"
        size="18"
        >mdi-message-reply-text-outline</v-icon
      >
      <span
        class="mb-1 d-flex justify-space-between"
        style="border-bottom: 1px solid #00bfae; width: 100%"
      >
        <h5 class="align-start" style="font-weight: 400; font-size: 14px">
          Observação:
        </h5>
        <div width="200" class="text-end">
          <h5 style="font-weight: 400; color: white; font-size: 15px">
            [Observação]
          </h5>
        </div>
      </span>
    </div>
    <div style="margin-right: 15px">
      <v-btn
        style="
          background: linear-gradient(#12e0ce, #007a6f);
          height: 25px;
          margin-top: 30px;
          width: 100px;
        "
      >
        <v-icon class="mr-2" size="15">mdi-pencil-outline</v-icon>
        <h3 style="font-size: 11px">Editar</h3>
      </v-btn>
      <v-btn
        style="
          background: linear-gradient(#12e0ce, #007a6f);
          height: 25px;
          margin-top: 30px;
          width: 100px;
        "
        class="ml-4"
      >
        <v-icon class="mr-2" size="15">mdi-delete-outline</v-icon>
        <h3 style="font-size: 11px">Excluir</h3>
      </v-btn>
    </div>
  </div>
</template>
