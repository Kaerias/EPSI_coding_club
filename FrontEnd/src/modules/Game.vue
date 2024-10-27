<template>
  <v-container fluid class="full-page-container">
    <winModal-view></winModal-view>
    <v-row>
      <v-col cols="12" class="justify-center align-center d-flex">
        <v-flex xs12>
          <!-- Title Card -->
          <v-container width="100vw">
            <v-card
              width="60vw"
              height="10vh"
              class="titleImage transparent-card elevation-0"
            >
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
              <v-flex xs4 class="pr-16 mr-10">
                <v-card
                  style="
                    border-top-left-radius: 15px !important;
                    border-top-right-radius: 15px !important;
                    background-color: rgb(255, 255, 255, 0.6);
                  "
                >
                  <v-card-title>Ingrédients</v-card-title>
                  <v-card
                    class="mx-auto ingredients"
                    width="15vw"
                    height="100vh"
                  >
                    <v-row class="pt-2 pl-2 pr-3">
                      <v-col cols="6">
                        <v-img
                          src="@/assets/cauldron 2.png"
                          alt="Logo"
                          class="ingredientBackground"
                        ></v-img>
                        <h3 class="text-center ingredientBackground">
                          Patte araignée
                        </h3>
                        <v-row>
                          <v-col
                            cols="6"
                            class="text-center d-flex align-center justify-center"
                          >
                            <v-btn
                              size="small"
                              class="btnIngredientBackground"
                              @click="addSpiderOne"
                              ><h2 class="pt-1">+1</h2></v-btn
                            >
                          </v-col>
                          <v-col
                            cols="6"
                            class="text-center d-flex align-center justify-center"
                          >
                            <v-btn
                              size="small"
                              class="btnIngredientBackground"
                              @click="addSpiderFive"
                              ><h2 class="pt-1">+5</h2></v-btn
                            >
                          </v-col>
                        </v-row>
                      </v-col>
                      <v-col cols="6">
                        <v-img
                          src="@/assets/cauldron 2.png"
                          alt="Logo"
                          class="ingredientBackground"
                        ></v-img>
                        <h3 class="text-center ingredientBackground">
                          chauve-souris
                        </h3>
                        <v-row>
                          <v-col
                            cols="6"
                            class="text-center d-flex align-center justify-center"
                          >
                            <v-btn
                              size="small"
                              class="btnIngredientBackground"
                              @click="addBatOne"
                              ><h2 class="pt-1">+1</h2></v-btn
                            >
                          </v-col>
                          <v-col
                            cols="6"
                            class="text-center d-flex align-center justify-center"
                          >
                            <v-btn
                              size="small"
                              class="btnIngredientBackground"
                              @click="addBatFive"
                              ><h2 class="pt-1">+5</h2></v-btn
                            >
                          </v-col>
                        </v-row>
                      </v-col>
                      <v-col cols="6">
                        <v-img
                          src="@/assets/cauldron 2.png"
                          alt="Logo"
                          class="ingredientBackground"
                        ></v-img>
                        <h3 class="text-center ingredientBackground">
                          Citrouille
                        </h3>
                        <v-row>
                          <v-col
                            cols="6"
                            class="text-center d-flex align-center justify-center"
                          >
                            <v-btn
                              size="small"
                              class="btnIngredientBackground"
                              @click="addPumpkinOne"
                              ><h2 class="pt-1">+1</h2></v-btn
                            >
                          </v-col>
                          <v-col
                            cols="6"
                            class="text-center d-flex align-center justify-center"
                          >
                            <v-btn
                              size="small"
                              class="btnIngredientBackground"
                              @click="addPumpkinFive"
                              ><h2 class="pt-1">+5</h2></v-btn
                            >
                          </v-col>
                        </v-row>
                      </v-col>
                      <v-col cols="6">
                        <v-img
                          src="@/assets/cauldron 2.png"
                          alt="Logo"
                          class="ingredientBackground"
                        ></v-img>
                        <h3 class="text-center ingredientBackground">Venin</h3>
                        <v-row>
                          <v-col
                            cols="6"
                            class="text-center d-flex align-center justify-center"
                          >
                            <v-btn
                              size="small"
                              class="btnIngredientBackground"
                              @click="addSnakeOne"
                              ><h2 class="pt-1">+1</h2></v-btn
                            >
                          </v-col>
                          <v-col
                            cols="6"
                            class="text-center d-flex align-center justify-center"
                          >
                            <v-btn
                              size="small"
                              class="btnIngredientBackground"
                              @click="addSnakeFive"
                              ><h2 class="pt-1">+5</h2></v-btn
                            >
                          </v-col>
                        </v-row>
                      </v-col>
                      <v-col cols="6">
                        <v-img
                          src="@/assets/cauldron 2.png"
                          alt="Logo"
                          class="ingredientBackground"
                        ></v-img>
                        <h3 class="text-center ingredientBackground">
                          Crapaud
                        </h3>
                        <v-row>
                          <v-col
                            cols="6"
                            class="text-center d-flex align-center justify-center"
                          >
                            <v-btn
                              size="small"
                              class="btnIngredientBackground"
                              @click="addToadOne"
                              ><h2 class="pt-1">+1</h2></v-btn
                            >
                          </v-col>
                          <v-col
                            cols="6"
                            class="text-center d-flex align-center justify-center"
                          >
                            <v-btn
                              size="small"
                              class="btnIngredientBackground"
                              @click="addToadFive"
                              ><h2 class="pt-1">+5</h2></v-btn
                            >
                          </v-col>
                        </v-row>
                      </v-col>
                    </v-row>
                  </v-card>
                </v-card>
              </v-flex>
              <VSpacer/>
              <v-flex xs4 class="d-flex flex-column align-start justify-start">
                <v-card
                  class="mx-auto d-flex align-start elevation-0 transparent-card"
                  width="30vw"
                  height="50vh"
                >
                  <v-row cols="12">
                    <v-col
                      cols="12"
                      class="text-center"
                      style="background-color: white"
                    >
                      <h3>Les ingrédients dans votre chaudron:</h3>
                    </v-col>
                    <v-col
                      class="d-flex align-center text-center justify-center"
                      style="background-color: blanchedalmond"
                    >
                      <p>
                        Patte d'araignée<br />{{
                          store.ingredients.spiderLeg.toString()
                        }}
                      </p>
                    </v-col>
                    <v-col
                      class="d-flex align-center text-center justify-center"
                      style="background-color: blanchedalmond"
                    >
                      <p>
                        aile de chauve souris<br />{{
                          store.ingredients.batWing.toString()
                        }}
                      </p>
                    </v-col>
                    <v-col
                      class="d-flex align-center text-center justify-center"
                      style="background-color: blanchedalmond"
                    >
                      <p>
                        Citrouille<br />{{
                          store.ingredients.pumpkinJuice.toString()
                        }}
                      </p>
                    </v-col>
                    <v-col
                      class="d-flex align-center text-center justify-center"
                      style="background-color: blanchedalmond"
                    >
                      <p>
                        Venin de serpent<br />{{
                          store.ingredients.snakeVenom.toString()
                        }}
                      </p>
                    </v-col>
                    <v-col
                      class="d-flex align-center text-center justify-center"
                      style="background-color: blanchedalmond"
                    >
                      <p>
                        Bave de crapaud<br />{{
                          store.ingredients.toadSlime.toString()
                        }}
                      </p>
                    </v-col>
                    <v-col
                      class="d-flex align-center text-center justify-end"
                      style="background-color: blanchedalmond"
                    >
                      <v-btn
                        style="background-color: brown"
                        class="text-white"
                        text="Réinitialiser"
                        variant="text"
                        @click="reset()"
                      ></v-btn>
                    </v-col>
                  </v-row>
                </v-card>
                <v-card
                  class="mx-auto d-flex align-end elevation-0 transparent-card"
                  width="30vw"
                  height="50vh"
                >
                  <v-img src="@/assets/cauldron 2.png" alt="Logo" m />
                </v-card>
              </v-flex>
              <VSpacer/>
              <v-flex xs4 class="mr-4 d-flex align-center justify-start">
                <v-card
                  class="mx-auto transparent-card elevation-0"
                  width="20vw"
                  height="60vh"
                >
                  <v-card
                    class="mx-auto parchment transparent-card elevation-0"
                    width="20vw"
                    height="100vh"
                  >
                    <v-card-title
                      class="d-flex align-center justify-center text-center"
                      >Recette</v-card-title
                    >
                    <div class="text-start">
                      <v-card-text
                        class="d-flex align-center justify-center ml-2"
                      >
                      1 - Placez 3 pattes d'araignée dans le chaudron.<br/>
                      2 - Ajoutez 1 aile de chauve-souris et faites grésiller.<br/>
                      3 - Incorporez 4 citrouilles en morceaux.<br/>
                      4 - Versez 12 doses de venin de serpent et mélangez.<br/>
                      5 - Ajoutez 26 gouttes de bave de crapaud pour épaissir.<br/>
                      6 - Chuchotez l’incantation et attendez les vapeurs violettes.<br/>
                      </v-card-text>
                    </div>
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
import { useGameStore } from "./store";
import { Ref, ref } from "vue";
import { Iingredient } from "./type";
import { onMounted } from "vue";
import router from "../router";

let nbrImages: Ref<number> = ref(0);

const store = useGameStore();

onMounted(() => {
  console.log("mounted");
  if (store.username === "") {
    router.push("/");
  }
});

function addBatOne() {
  let ingredient: Iingredient = {
    username: store.username,
  };
  store.batOne(ingredient);
}

function addBatFive() {
  let ingredient: Iingredient = {
    username: store.username,
  };
  store.batFive(ingredient);
}

function addPumpkinOne() {
  let ingredient: Iingredient = {
    username: store.username,
  };
  store.pumpkinOne(ingredient);
}

function addPumpkinFive() {
  let ingredient: Iingredient = {
    username: store.username,
  };
  store.pumpkinFive(ingredient);
}

function addSnakeOne() {
  let ingredient: Iingredient = {
    username: store.username,
  };
  store.snakeOne(ingredient);
}

function addSnakeFive() {
  let ingredient: Iingredient = {
    username: store.username,
  };
  store.snakeFive(ingredient);
}

function addSpiderOne() {
  let ingredient: Iingredient = {
    username: store.username,
  };
  store.spiderOne(ingredient);
}

function addSpiderFive() {
  let ingredient: Iingredient = {
    username: store.username,
  };
  store.spiderFive(ingredient);
}

function addToadOne() {
  let ingredient: Iingredient = {
    username: store.username,
  };
  store.toadOne(ingredient);
}

function addToadFive() {
  let ingredient: Iingredient = {
    username: store.username,
  };
  store.toadFive(ingredient);
}

function reset() {
  store.reset();
}
</script>

<style lang="css" scoped>
.full-page-container {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
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

.ingredientBackground {
  background-color: rgba(255, 235, 205, 0.5);
}

.btnIngredientBackground {
  background-color: rgba(255, 235, 205, 0.8);
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
