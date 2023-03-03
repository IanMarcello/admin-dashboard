// import { defineStore } from "pinia";
// import http from "@/services/http";

// export const useAuthStore = defineStore("auth", {
//   state: () => {
//     return {
//       id: null,
//       name: "",
//       email: "",
//       token: null,
//     };
//   },

//   actions: {
//     async login() {
//       const response = await http.post(
//         "/auth/login/create",
//         {
//           email: this.email,
//           password: this.password,
//         },
//         { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
//       );

//       sessionStorage.setItem(
//         "user",
//         JSON.stringify({
//           name: response.data.name,
//           email: response.data.email,
//         })
//       );

//       this.email = "";
//       this.password = "";

//       return response;
//     },

//     async register() {
//       if (this.password !== this.confirm_password) return false;

//       const response = await http.post("/auth/signup/create", {
//         first_name: this.first_name,
//         last_name: this.last_name,
//         email: this.email,
//         password: this.password,
//         confirm_password: this.confirm_password,
//       });

//       this.name = "";
//       this.email = "";
//       this.password = "";
//       this.confirm_password = "";

//       return response;
//     },

//     async logout() {
//       sessionStorage.clear();
//     },
//   },
// });

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

      sessionStorage.setItem(
        "user",
        JSON.stringify({
          name: response.data.name,
          email: response.data.email,
        })
      );

      this.email = "";
      this.password = "";

      return response;
    },

    async register() {
      if (this.password !== this.confirm_password) return false;

      const response = await http.post(
        "/auth/signup/create",
        {
          name: this.name,
          email: this.email,
          password: this.password,
          confirm_password: this.confirm_password,
        },
        { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
      );

      console.log(response);

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
