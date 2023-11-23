import './Sass/main.sass';
import { createApp } from 'vue'
import App from './App.vue'
import { store } from './Store';

createApp(App)
    .use(store)
    .mount('#app');
