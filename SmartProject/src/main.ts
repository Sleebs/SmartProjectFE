import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router/router";
import { createPinia } from 'pinia'
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {faUser, faCalendarDays, faBuildingColumns, faScroll, faBook, faPeopleGroup, faInfoCircle, faPlusCircle} from "@fortawesome/free-solid-svg-icons";

library.add(faUser, faCalendarDays, faBuildingColumns, faBook, faScroll, faPeopleGroup, faInfoCircle,faPlusCircle);



const app = createApp(App);
const pinia = createPinia()


app.component('VueDatePicker', VueDatePicker);
app.component('font-awesome-icon', FontAwesomeIcon)


app.use(pinia);
app.use(router).mount("#app");
