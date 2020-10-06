<template>
  <v-app-bar dark app color="#dd2c00">
    <router-link to="/" class="text-decoration-none white--text">
      <v-toolbar-title>Vevericka</v-toolbar-title>
    </router-link>
    <v-spacer></v-spacer>

    <router-link to="/profile">
      <v-btn icon>
        <v-icon>mdi-account-circle-outline</v-icon>
      </v-btn>
    </router-link>

    <v-menu left bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item v-for="n in 5" :key="n" @click="() => {}">
          <v-list-item-title>Option {{ n }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {};
</script>

<style>
</style>