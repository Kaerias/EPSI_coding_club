<template>
  <v-dialog v-model="store.isPotionFinished" max-width="480">
    <v-card title="">
      <template v-slot:text>
        <h1>Bravo tu as gagné !</h1>
      </template>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn text="Close" variant="text" @click="reset()"></v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts" setup>
import { useGameStore } from "@/modules/store";
import { Ref, ref } from "vue";


const store = useGameStore();

function reset()
{
  store.reset();
}


</script>
