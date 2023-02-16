import { defineStore } from "pinia";
import { ref } from "vue";

export const useToggleStore = defineStore("toggle", {
  state: () => {
    return { show: null };
  },

  actions: {
    async toggleShow() {
      const show = ref(false);
      show.value = !show.value;
      console.log(show.value);
    },
  },
});
