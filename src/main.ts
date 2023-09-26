import "@/styles/main.scss";

import { createApp } from "vue";
import { createPinia } from "pinia";
import components from "@/components/UI";

import App from "@/App.vue";

const app = createApp(App);

app.use(createPinia());

// Register global components
components.forEach((component) => {
  console.log(component);
  app.component(component.__name as string, component);
});

app.mount("#app");
