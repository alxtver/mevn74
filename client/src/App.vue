<template>
  <div id="app">
    <Navbar />

    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {  
  data() {
    return {
      auth: "",
    };
  },
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
