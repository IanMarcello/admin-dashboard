import { defineStore } from "pinia";

export const useToggleStore = defineStore("toggle", {
  state: () => ({
    show: false,
  }),
  actions: {
    toggleShow() {
      this.show = !this.show;
    },
  },
});
