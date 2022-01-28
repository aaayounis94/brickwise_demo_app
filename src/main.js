import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "nprogress/nprogress.css";
createApp(App).use(router).mount("#app");
// this gives the Global storage and provide it to the app before mounting the app to index.html
