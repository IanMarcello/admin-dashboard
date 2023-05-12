import { defineStore } from "pinia";

export const useToggleStore = defineStore("toggle", {
  state: () => ({
    openSidebar: true,
  }),
  actions: {
    toggleShow() {
      this.openSidebar = !this.openSidebar;
    },
  },
});
