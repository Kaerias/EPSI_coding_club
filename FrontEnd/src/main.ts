import App from "./App.vue";
import { createApp } from "vue";
import { registerPlugins } from "@/plugins";
import { registerComponents } from "@/plugins/components";
import "ant-design-vue/dist/reset.css";

import fr from "dayjs/locale/fr";
import dayjs from "dayjs";
dayjs.locale(fr);

const app = createApp(App);

registerPlugins(app);
registerComponents(app);
app.mount("#app");
