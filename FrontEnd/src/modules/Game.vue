<template>
  <div>
    {{ store.doubleCount }}
    <v-btn @click="store.increment">Increment</v-btn>
</div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import router from "@/router";
import { useGameStore } from "./store";

export default class Game extends Vue {
  private store = useGameStore();
}
</script>