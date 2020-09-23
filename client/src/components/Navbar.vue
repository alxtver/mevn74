<template>
  <v-app>
    <v-app-bar app color="grey darken-3" dark>
      <div class="d-flex align-center"></div>
      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab>ПКИ</v-tab>
          <v-tab>АПКЗИ</v-tab>
          <v-tab>Производство</v-tab>
        </v-tabs>
      </template>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
  </v-app>
</template>

<script>
export default {};
</script>

<style>
</style>