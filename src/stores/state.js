import { defineStore } from "pinia";

export const useToggleStore = defineStore("toggle", {
  state: () => ({
    openSidebar: true,
    openList: true,
  }),
  actions: {
    toggleShow() {
      this.openSidebar = !this.openSidebar;
    },
    toggleList() {
      this.openList = !this.openList;
    },
  },
});
