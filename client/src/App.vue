<template>
  <div id="app">
    <Navbar key="Key" />

    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  name: "app",
  components: {
    Navbar,
  },
};
</script>
<style lang="scss">
@import "node_modules/bootstrap/scss/bootstrap";
@import "node_modules/bootstrap-vue/src/index.scss";
@import "@/assets/custom.scss";
</style>
