<template>
  <div class="container">
    <div class="row">
      <div class="col-md6 mt-5 mx-auto">
        <b-form v-on:submit.prevent="login">
          <h1 class="h3 mb-3">Вход</h1>
          <b-form-group>
            <b-form-input
              id="input-2"
              v-model="form.username"
              required
              placeholder="Логин"
              name="username"
            ></b-form-input>
          </b-form-group>

          <b-form-group>
            <b-form-input
              id="input-1"
              v-model="form.password"
              type="password"
              required
              placeholder="Введите пароль"
              name="password"
            ></b-form-input>
          </b-form-group>
          <b-button type="submit" variant="success">Войти</b-button>
        </b-form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import router from "../router";
export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      axios
        .post("http://localhost:3001/auth/login", {
          username: this.form.username,
          password: this.form.password,
        })
        .then((res) => {
          console.log(res);
          localStorage.setItem("usertoken", res.data);
          router.push({ name: "Home" });
          location.reload(); // c этим надо что-то делать
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
</style>