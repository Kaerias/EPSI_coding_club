import { generateFakeData, Item } from "./types";
import { defineStore } from "pinia";

export type RootState = {
};

export const useMainStore = defineStore({
  id: "mainStore",
  state: () =>
    ({
    } as RootState),
  getters: {
  },
  actions: {
  },
});