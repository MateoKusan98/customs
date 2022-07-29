import { createApp } from 'vue';
import App from './App.vue';
import CustomSelect from './components/CustomSelect';
const app = createApp(App);

app.component('custom-select', CustomSelect);
app.mount('#app');
