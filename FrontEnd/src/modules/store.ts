import { createPinia, defineStore } from 'pinia';

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
        increment() {
            this.count++;
        }
    }
});

export default pinia;