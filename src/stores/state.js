import { defineStore } from "pinia";

export const useToggleStore = defineStore("toggle", {
  state: () => ({
    // showSidebar: false,
    openSidebar: true,
  }),
  actions: {
    toggleShow() {
      // this.showSidebar = !this.showSidebar;
      this.openSidebar = !this.openSidebar;
    },
  },
});
