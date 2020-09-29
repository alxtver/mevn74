<template>
  <div v-if="auth == 'loggedin'">
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#">PartName</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <router-link tag="b-nav-item" to="/">ПКИ</router-link>
          <router-link tag="b-nav-item" to="/login">АПКЗИ</router-link>
          <b-nav-item-dropdown text="БД" right>
            <router-link tag="b-dropdown-item" to="/about"
              >БД Штрихкоды</router-link
            >
            <router-link tag="b-dropdown-item" to="/about"
              >БД Страны</router-link
            >
          </b-nav-item-dropdown>
          <router-link tag="b-nav-item" to="/logout">Проекты</router-link>
          <router-link tag="b-nav-item" to="/register">Поиск</router-link>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <select
            class="selectpicker custom-select mr-2"
            id="serials"
            data-live-search="true"
          ></select>
          <select id="part_select_navbar" class="custom-select"></select>

          <b-nav-item v-if="auth == 'loggedin'" v-on:click="logout"
            >Выход</b-nav-item
          >
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import router from "../router";

export default {
  data() {
    return {
      auth: "",
      user: "",
    };
  },
  methods: {
    logout() {
      localStorage.removeItem("usertoken");
      this.auth = "";
      router.push({ name: "Login" });
    },
  },
  mounted() {
    if (localStorage.usertoken) {
      this.auth = "loggedin";
    }
  },
};
</script>

<style>
</style>