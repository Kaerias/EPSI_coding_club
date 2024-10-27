import { createPinia, defineStore } from 'pinia';
import * as client from "./service";
import { Iingredient, IsignIn, IsignUp, IingredientRecepie, IGame } from './type';
import { useRouter } from 'vue-router';
const router = useRouter();

// Create a new Pinia instance
const pinia = createPinia();

const state: IGame = {
    ingredients: {
        batWing: 0,
        pumpkinJuice: 0,
        snakeVenom: 0,
        spiderLeg: 0,
        toadSlime: 0
    },
    username: "",
    isPotionFinished: false,
    secretIngredient: "",
};



// Example store definition
export const useGameStore = defineStore('game', {
    state: () => state,
    getters: {
    },
    actions: {
        signup(param: IsignUp) {
            const jsonSignUp = JSON.stringify(param);
            client.signup(jsonSignUp).then((resp) => {
                console.log(resp);
            });
        },
        signin(param: IsignIn) {
            const jsonSignIn = JSON.stringify(param);
            client.signin(jsonSignIn).then((resp) => {
                console.log(resp);
                state.ingredients = {
                    batWing: resp.data.batWing,
                    pumpkinJuice: resp.data.pumpkinJuice,
                    snakeVenom: resp.data.snakeVenom,
                    spiderLeg: resp.data.spiderLeg,
                    toadSlime: resp.data.toadSlime
                }
                state.secretIngredient = resp.data.secretIngredient;
                state.isPotionFinished = resp.data.isPotionFinished;
                state.username = param.username;
                router.push("/game");
            });
        },
        batOne(param: Iingredient) {
            const jsonBatOne = JSON.stringify(param);
            client.batOne(jsonBatOne).then((resp) => {
                console.log(resp);
                state.ingredients.batWing = resp.data.batWing;
            });
        },
        batFive(param: Iingredient) {
            const jsonBatFive = JSON.stringify(param);
            client.batFive(jsonBatFive).then((resp) => {
                console.log(resp);
                state.ingredients.batWing = resp.data.batWing;
            });
        },
        pumpkinOne(param: Iingredient) {
            const jsonPumpkinOne = JSON.stringify(param);
            client.pumpkinOne(jsonPumpkinOne).then((resp) => {
                console.log(resp);
                state.ingredients.pumpkinJuice = resp.data.pumpkinJuice;
            });
        },
        pumpkinFive(param: Iingredient) {
            const jsonPumpkinFive = JSON.stringify(param);
            client.pumpkinFive(jsonPumpkinFive).then((resp) => {
                console.log(resp);
                state.ingredients.pumpkinJuice = resp.data.pumpkinJuice;
            });
        },
        snakeOne(param: Iingredient) {
            const jsonSnakeOne = JSON.stringify(param);
            client.snakeOne(jsonSnakeOne).then((resp) => {
                console.log(resp);
                state.ingredients.snakeVenom = resp.data.snakeVenom;
            });
        },
        snakeFive(param: Iingredient) {
            const jsonSnakeFive = JSON.stringify(param);
            client.snakeFive(jsonSnakeFive).then((resp) => {
                console.log(resp);
                state.ingredients.snakeVenom = resp.data.snakeVenom;
            });
        },
        spiderOne(param: Iingredient) {
            const jsonSpiderOne = JSON.stringify(param);
            client.spiderOne(jsonSpiderOne).then((resp) => {
                console.log(resp);
                state.ingredients.spiderLeg = resp.data.spiderLeg;
            });
        },
        spiderFive(param: Iingredient) {
            const jsonSpiderFive = JSON.stringify(param);
            client.spiderFive(jsonSpiderFive).then((resp) => {
                console.log(resp);
                state.ingredients.spiderLeg = resp.data.spiderLeg;
            });
        },
        toadOne(param: Iingredient) {
            const jsonToadOne = JSON.stringify(param);
            client.toadOne(jsonToadOne).then((resp) => {
                console.log(resp);
                state.ingredients.toadSlime = resp.data.toadSlime;
            });
        },
        toadFive(param: Iingredient) {
            const jsonToadFive = JSON.stringify(param);
            client.toadFive(jsonToadFive).then((resp) => {
                console.log(resp);
                state.ingredients.toadSlime = resp.data.toadSlime;
            });
        },
        reset(param: Iingredient) {
            const jsonReset = JSON.stringify(param);
            client.reset(jsonReset).then((resp) => {
                console.log(resp);
                state.ingredients = {
                    batWing: resp.data.batWing,
                    pumpkinJuice: resp.data.pumpkinJuice,
                    snakeVenom: resp.data.snakeVenom,
                    spiderLeg: resp.data.spiderLeg,
                    toadSlime: resp.data.toadSlime
                }
                state.secretIngredient = resp.data.secretIngredient;
                state.isPotionFinished = resp.data.isPotionFinished;
            });
        }
    }
});

export default pinia;