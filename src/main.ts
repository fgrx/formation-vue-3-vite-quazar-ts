import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import App from "./App.vue";

import router from "./router";

import { createPinia } from "pinia";

const app = createApp(App);

app.directive("presentation", {
  created: (el, binding) => {
    switch (binding.value) {
      case "bold":
        el.style.fontWeight = "bold";
        break;
      case "italic":
        el.style.fontStyle = "italic";
        break;
      case "highlight":
        el.style.backgroundColor = "#ccc";
        break;
      case "big":
        el.style.fontSize = "24px";
        break;
      default:
        break;
    }
  },
});

app.use(ElementPlus);
app.use(router);
app.use(createPinia());
app.mount("#app");
