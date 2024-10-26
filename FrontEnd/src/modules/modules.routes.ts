import Game from "@/modules/Game.vue";
import Login from "@/modules/Login.vue";


const module = [
  {
    path: "/",
    component: Login,
  },
  {
    path: "/game",
    component: Game,
  },
];

export default module;
