import Page from "@/components/PageComponent.vue";
import Button from "@/components/ButtonComponent.vue";
import ButtonClicked from "@/components/ButtonComponentClicked.vue";
import Field from "@/components/FieldComponent.vue";
import FieldInserir from "@/components/FieldComponentInserir.vue";
import CardPeso from "@/components/CardExibirComponent/CardPeso.vue";
import CardVacinas from "@/components/CardExibirComponent/CardVacinas.vue";
import CardVitaminaMinerais from "@/components/CardExibirComponent/CardVitaminaMinerais.vue";
import CardBanhoTosa from "@/components/CardExibirComponent/CardBanhoTosa.vue";
import CardLembretes from "@/components/CardExibirComponent/CardLembretes.vue";
import ModalBanhoTosa from "@/components/ModalInserir.vue";

// Função para registrar componentes globalmente
export function registerGlobalComponents(app) {
  app.component("PageComponent", Page);
  app.component("ButtonComponent", Button);
  app.component("ButtonComponentClicked", ButtonClicked);
  app.component("FieldComponent", Field);
  app.component("FieldInserirComponent", FieldInserir);
  app.component("CardPesoComponent", CardPeso);
  app.component("CardVacinasComponent", CardVacinas);
  app.component("CardVitaminaMineraisComponent", CardVitaminaMinerais);
  app.component("CardBanhoTosaComponent", CardBanhoTosa);
  app.component("CardLembretesComponent", CardLembretes);
  app.component("ModalBanhoTosaComponent", ModalBanhoTosa);
}
