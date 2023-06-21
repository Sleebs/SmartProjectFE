import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router/router";
import { createPinia } from 'pinia'
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

const app = createApp(App);
const pinia = createPinia()


app.component('VueDatePicker', VueDatePicker);
app.use(pinia);
app.use(router).mount("#app");
