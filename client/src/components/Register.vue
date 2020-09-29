<template>
  <div class="container">
    <div class="row">
      <div class="col-md6 mt-5 mx-auto">
        <b-form v-on:submit.prevent="register">
          <h1 class="h3 mb-3">Регистрация</h1>
          <b-form-group
            id="input-group-2"
            label="Your Name:"
            label-for="input-2"
          >
            <b-form-input
              id="input-2"
              v-model="form.username"
              required
              placeholder="Логин"
              name="username"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-3" label="Группа:" label-for="input-3">
            <b-form-input
              id="input-3"
              v-model="form.group"
              required
              placeholder="Группа"
              name="group"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-1"
            label="Password:"
            label-for="input-1"
          >
            <b-form-input
              id="input-1"
              v-model="form.password"
              type="password"
              required
              placeholder="Пароль"
              name="password"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-4"
            label="Password:"
            label-for="input-4"
          >
            <b-form-input
              id="input-4"
              v-model="form.rpassword"
              type="password"
              required
              placeholder="Пароль еще раз"
              name="passagain"
            ></b-form-input>
          </b-form-group>
          <b-button type="submit" variant="success">Регистрация</b-button>
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
      username: "",
      group: "",
      password: "",
    };
  },
  methods: {
    register() {
      axios
        .post("http://localhost:3001/auth/register", {
          username: this.username,
          group: this.group,
          password: this.password,
        })
        .then((res) => {
          router.push({ name: "Login" });
        })
        .catch((err) => {
          console.log(err);
        });
      this.emitMethod();
    },
  },
};
</script>

<style>
</style>