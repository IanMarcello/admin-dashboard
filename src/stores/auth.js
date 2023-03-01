import { defineStore } from "pinia";
import http from "@/services/http";

export const useAuthStore = defineStore("auth", {
  state: () => {
    return {
      id: null,
      name: "",
      email: "",
      token: null,
    };
  },

  actions: {
    async login() {
      const response = await http.post(
        "/auth/login/create",
        {
          email: this.email,
          password: this.password,
        },
        { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
      );

      // sessionStorage.setItem(
      //   "user",
      //   JSON.stringify({
      //     id: response.data.data.Id,
      //     name: response.data.data.Name,
      //     email: this.email,
      //     token: response.data.data.Token,
      //   })
      // );

      console.log(response);

      this.email = "";
      this.password = "";

      return response;
    },

    async register() {
      if (this.password !== this.confirm_password) return false;

      const response = await http.post("/api/AuthAccount/Register", {
        name: this.name,
        email: this.email,
        password: this.password,
      });

      this.name = "";
      this.email = "";
      this.password = "";
      this.confirm_password = "";

      return response;
    },

    async logout() {
      sessionStorage.clear();
    },
  },
});
