<template>
  <div class="container formContent">
    <div class="row">
      <div class="col-md6 mt-2 mx-auto">
        <b-form v-on:submit.prevent="login">
          <div class="mt-2 mb-4">
            <img src="https://image.flaticon.com/icons/svg/1828/1828503.svg" id="icon" alt="User Icon" />
          </div>
          <p v-if="danger == 'error'" class="danger">Не правильный логин или пароль</p>
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
              placeholder="Пароль"
              name="password"
            ></b-form-input>
          </b-form-group>
          <b-button class="mb-3" type="submit" variant="success">Войти</b-button>
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
      danger: '',
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
          localStorage.setItem("usertoken", res.data);
          router.push({ name: "Home" });
          // location.reload(); // c этим надо что-то делать
        })
        .catch((error) => {
          this.danger = 'error'
          console.log(error);
        });
    },
  },
};
</script>

<style>

</style>
