import { defineStore } from "pinia";
import http from "@/services/http";

export const useAuthStore = defineStore("auth", {
  state: () => {
    return {
      name: null,
      email: null,
      password: null,
      confirm_password: null,
      token: null,
      loading: false,
    };
  },

  actions: {
    async login() {
      this.loading = true;

      // const response = await http.post(
      //   "http://localhost:8080/login",
      //   {
      //     email: this.email,
      //     password: this.password,
      //   },
      //   { headers: { "Content-Type": "application/x-www-form-urlencoded", "Access-Control-Allow-Origin": '*' } }
      // );

      // console.log(response)

      const response = {
        data: {
          code: 200,
          user: {
            name: "Ian Marcello",
          },
        },
      };

      if (response.data.code == 200) {
        sessionStorage.setItem(
          "user",
          JSON.stringify({
            name: response.data.user.name,
          })
        );

        this.loading = false;

        return response;
      }

      this.loading = false;

      return response;
    },

    async register() {
      if (this.password !== this.confirm_password) return false;

      const response = await http.post(
        "/api/signup/create",
        {
          name: this.name,
          email: this.email,
          password: this.password,
          confirm_password: this.confirm_password,
        },
        { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
      );

      this.$reset();

      return response;
    },

    async logout() {
      sessionStorage.removeItem("user");
      sessionStorage.setItem("session", false);
    },
  },
});
