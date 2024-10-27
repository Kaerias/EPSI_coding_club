<template>
  <v-container fluid class="full-page-container">
    <v-row>
      <v-col cols="12" class="justify-center align-center d-flex">
        <v-flex xs12>
          <!-- Title Card -->
          <v-container width="100vw">
            <v-card width="60vw"  height="10vh" class=" titleImage transparent-card elevation-0">
              <v-card-title class="headline text-center mt-5"
                >Réalise ta potion</v-card-title
              >
            </v-card>
          </v-container>
        </v-flex>
      </v-col>
      <v-col cols="12">
        <v-flex xs12>
          <!-- Three Cards Side by Side -->
          <v-container
            class="mx-auto cards-container d-flex"
            width="100vw"
            height="100vh"
          >
            <v-layout row wrap>
              <v-flex xs4>
                <v-card
                  style="
                    border-top-left-radius: 15px !important;
                    border-top-right-radius: 15px !important;
                    background-color: rgb(255, 255, 255, 0.4);
                  "
                >
                  <v-card-title>Ingrédients</v-card-title>
                  <v-card
                    class="mx-auto ingredients"
                    width="15vw"
                    height="100vh"
                  >
                    <v-card-text class="">Content for card 1</v-card-text>
                  </v-card>
                </v-card>
              </v-flex>
              <v-spacer></v-spacer>
              <v-flex xs4 class="d-flex align-end">
                <v-card
                  class="mx-auto d-flex align-end transparent-card elevation-0"
                  width="30vw"
                  height="50vh"
                >
                  <v-img src="@/assets/cauldron 2.png" alt="Logo" m />
                </v-card>
              </v-flex>
              <v-spacer></v-spacer>
              <v-flex xs4 class="pr-4 d-flex align-center justify-center">
                <v-card
                  class="mx-auto transparent-card elevation-0"
                  width="15vw"
                  height="60vh"
                >
                  <v-card
                    class="mx-auto parchment transparent-card elevation-0"
                    width="15vw"
                    height="100vh"
                  >
                    <v-card-title
                      class="d-flex align-center justify-center text-center"
                      >Recette</v-card-title
                    >
                    <v-card-text class="d-flex align-center justify-center mt-4"
                      >Content for card 1</v-card-text
                    >
                  </v-card>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-col>
    </v-row>
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
    0
  ); /* BlanchedAlmond with 50% opacity */
}

.title-card {
  height: 20vh;
}

.cards-container {
  height: 80vh;
}

.transparent-container {
  background-color: transparent;
}

.transparent-card {
  background-color: transparent;
}

.ingredients {
  position: relative;
  background-color: rgba(255, 235, 205, 0.5);
  height: "100vh";
}

.ingredients::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("@/assets/potionsIngredient.jpg");
  background-size: cover;
  background-position: right;
  opacity: 0.8; /* Adjust the opacity as needed */
  z-index: -1;
}

.parchment {
  position: relative;
  background-image: url("@/assets/parchment.png");
  background-size: 100% 60%;
  background-position: top;
  background-repeat: no-repeat;
  height: "100vh";
}

.titleImage {
  position: relative;
  background-image: url("@/assets/titleImage.png");
  background-position: top;
  background-size: 25% 100%;
  background-repeat: no-repeat;
  height: "100vh";
}
</style>
