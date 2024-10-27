<template>
  <v-container
    fluid
    class="full-page-container d-flex align-center justify-center"
  >
    <v-flex xs12 v-if="login">
      <v-card class="mx-auto" min-width="500px">
        <v-card-title>
          <span class="headline">Se connecter</span>
        </v-card-title>
        <v-card-text>
          <v-text-field
            v-model="user"
            label="Username"
            prepend-icon="mdi-account"
            required
          ></v-text-field>
          <v-text-field
            :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
            prepend-icon="mdi-home"
            :type="show2 ? 'text' : 'password'"
            class="input-group--focused"
            label="Visible"
            name="input-10-2"
            @click:append="show2 = !show2"
            v-model="password"
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn color="green" @click="signIn()">Connexion</v-btn>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="changeToRegister()"
            >S'enregistrer ?</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-flex>
    <v-flex xs12 v-else>
      <v-card class="mx-auto" min-width="500px">
        <v-card-title>
          <span class="headline">S'enregistrer</span>
        </v-card-title>
        <v-card-text>
          <v-text-field
            v-model="user"
            label="Username"
            prepend-icon="mdi-account"
            required
          ></v-text-field>
          <v-text-field
            :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
            prepend-icon="mdi-home"
            :type="show2 ? 'text' : 'password'"
            class="input-group--focused"
            label="Visible"
            name="input-10-2"
            @click:append="show2 = !show2"
            v-model="password"
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn color="green" @click="register()">Valider l'inscription</v-btn>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="changeToLogin()"
            >Se connecter ?
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-container>
</template>

<script lang="ts" setup>
import { useGameStore } from "./store";
import { Ref, ref, computed } from "vue";
import { storeToRefs } from "pinia";
import { IsignIn, IsignUp, IingredientRecepie, IGame } from "./type";
import { watch } from "vue";
import router from "../router";

const store = useGameStore();
const storeRefs = storeToRefs(store);
let login: Ref<boolean> = ref(true);
let user: Ref<string> = ref("");
let password: Ref<string> = ref("");
let show2: Ref<boolean> = ref(false);

const isAuth = computed(() => store.getIsAuth);

watch(isAuth, (newVal) => {
  if (newVal) {
    // Handle the case when isAuth becomes true
    router.push("/game");
  }
});


function signIn() {
  if (user.value.length > 0 && password.value.length > 0) {
    const userLogin: IsignIn = {
      username: user.value,
      password: password.value,
    };
    store.signin(userLogin);
    user.value = "";
    password.value = "";
  }
}

function register() {
  if (user.value.length > 0 && password.value.length > 0) {
    const userRegister: IsignUp = {
      username: user.value,
      password: password.value,
    };
    store.signup(userRegister);
    login.value = true;
    user.value = "";
    password.value = "";
  }
}

function changeToLogin() {
  console.log("changeToLogin");

  login.value = true;
}

function changeToRegister() {
  console.log("changeToRegister");
  login.value = false;
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
    0.5
  ); /* BlanchedAlmond with 50% opacity */
}
</style>
