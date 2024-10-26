<template>
  <v-container
    fluid
    class="full-page-container d-flex align-center justify-center"
  >
    <v-flex xs12>
      <v-card class="mx-auto" min-width="500px"> </v-card>
    </v-flex>
  </v-container>
</template>

<script lang="ts" setup>
import router from "@/router";
import { useGameStore } from "./store";
import { Ref, ref } from "vue";

const store = useGameStore();
</script>

<style lang="css" scoped>
.full-page-container {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  background-image: url("@/assets/logo.png");
  background-size: cover;
  background-position: center;
  overflow: hidden;
  background-color: rgba(
    255,
    235,
    205,
    0.5
  ); /* BlanchedAlmond with 50% opacity */
}
</style>
