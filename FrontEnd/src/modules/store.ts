import { createPinia, defineStore } from 'pinia';
import * as client from "./service";
import { Iingredient, Isignin, Isignup } from './type';

// Create a new Pinia instance
const pinia = createPinia();

// Example store definition
export const useGameStore = defineStore('game', {
    state: () => ({
        count: 1
    }),
    getters: {
        doubleCount(): number {
            return this.count * 2;
        }
    },
    actions: {
        signup(param: Isignin) {
            const jsonSignUn = JSON.stringify(param);
            const returnData = client.signup(jsonSignUn);
        },
        signin(param: Isignup) {
            const jsonSignIn = JSON.stringify(param);
            const returnData = client.signin(jsonSignIn);
        },
        batOne(param: Iingredient) {
            const jsonBatOne = JSON.stringify(param);
            const returnData = client.batOne(jsonBatOne);
        },
        batFive(param: Iingredient) {
            const jsonBatFive = JSON.stringify(param);
            const returnData = client.batFive(jsonBatFive);
        },
        pumpkinOne(param: Iingredient) {
            const jsonPumpkinOne = JSON.stringify(param);
            const returnData = client.pumpkinOne(jsonPumpkinOne);
        },
        pumpkinFive(param: Iingredient) {
            const jsonPumpkinFive = JSON.stringify(param);
            const returnData = client.pumpkinFive(jsonPumpkinFive);
        },
        snakeOne(param: Iingredient) {
            const jsonSnakeOne = JSON.stringify(param);
            const returnData = client.snakeOne(jsonSnakeOne);
        },
        snakeFive(param: Iingredient) {
            const jsonSnakeFive = JSON.stringify(param);
            const returnData = client.snakeFive(jsonSnakeFive);
        },
        spiderOne(param: Iingredient) {
            const jsonSpiderOne = JSON.stringify(param);
            const returnData = client.spiderOne(jsonSpiderOne);
        },
        spiderFive(param: Iingredient) {
            const jsonSpiderFive = JSON.stringify(param);
            const returnData = client.spiderFive(jsonSpiderFive);
        },
        toadOne(param: Iingredient) {
            const jsonToadOne = JSON.stringify(param);
            const returnData = client.toadOne(jsonToadOne);
        },
        toadFive(param: Iingredient) {
            const jsonToadFive = JSON.stringify(param);
            const returnData = client.toadFive(jsonToadFive);
        },
        reset(param: Iingredient) {
            const jsonReset = JSON.stringify(param);
            const returnData = client.reset(jsonReset);
        }
    }
});

export default pinia;