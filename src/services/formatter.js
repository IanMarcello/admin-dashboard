// import Vue from "vue";
// import VueI18n from "vue-i18n";
// import { useI18n } from "vue-i18n";

// const i18nLocale = useI18n();

const dateFormatter = new Intl.DateTimeFormat(undefined, {
  dateStyle: "long",
});

const numberFormatter = new Intl.NumberFormat(undefined, {
  currency: "TZS",
  style: "currency",
});

export { dateFormatter, numberFormatter };
