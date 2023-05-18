import { createApp } from "vue";
import { createPinia } from "pinia";
import { createI18n } from "vue-i18n";
import Notifications from "notiwind";
import messages from "@intlify/unplugin-vue-i18n/messages";
import VueScrollTo from "vue-scrollto";

import App from "@/App.vue";
import router from "@/router";

import "@/assets/main.css";

const i18n = createI18n({
  legacy: false,
  locale: "en",
  fallbackLocale: "sw",
  messages,
});

const app = createApp(App);

app.use(createPinia());
app.use(i18n);
app.use(router);
app.use(Notifications);
app.use(VueScrollTo);

router.isReady().then(() => app.mount("#app"));
