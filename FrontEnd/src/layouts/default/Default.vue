<template>
  <navBar-view />
  <v-container>
    <v-main class="ma-0 pa-0">
      <router-view />
    </v-main>
  </v-container>
</template>

<script lang="ts" setup>
</script>

<style>
.v-container {
  max-width: 100% !important;
}
</style>
