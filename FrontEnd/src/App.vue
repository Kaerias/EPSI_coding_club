<template>
  <v-app id="game-view">
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup lang="ts"></script>

<style lang="css">
#game-view {
  background-image: url('@/assets/halloween-5596921_1920.jpg');
  background-size: fill;
  background-position: center;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

</style>