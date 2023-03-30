import { defineStore } from "pinia";

export const useToggleStore = defineStore("toggle", {
  state: () => ({
    show: true,
    openSidebar: true,
  }),
  actions: {
    toggleShow() {
      this.show = !this.show;
      this.openSidebar = !this.openSidebar;
    },
  },
});
