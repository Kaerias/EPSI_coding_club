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
            v-model="password"
            label="Password"
            prepend-icon="mdi-home"
            required
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" @click="login = false">S'enregistrer ?</v-btn>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="signIn()">Connexion</v-btn>
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
            v-model="password"
            label="Password"
            prepend-icon="mdi-home"
            required
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" @click="login = true">Se connecter ? </v-btn>
          <v-spacer></v-spacer>
          <v-btn color="green" @click="register()">Valider l'inscription</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-container>
</template>

<script lang="ts" setup>
import router from "@/router";
import { useGameStore } from "./store";
import { Ref, ref } from "vue";

  const store = useGameStore();
  let login: Ref<boolean> = ref(true);
  let user: Ref<string> = ref("");
  let password: Ref<string> = ref("");

  function signIn() {
    router.push("/game");
    if (user.value.length > 0 && password.value.length > 0) {
      // this.store.login();
    }
  }

  function register() {
    if (user.value.length > 0 && password.value.length > 0) {
      login.value = true;
      // this.store.register();
    }
  }
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
