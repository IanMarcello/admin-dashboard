import { defineStore } from "pinia";

export const useThemeStore = defineStore("theme", {
  state: () => ({
    theme_key: null,
  }),
  //   actions: {
  //     toggleShow() {
  //       this.show = !this.show;
  //     },
  //   },
});
