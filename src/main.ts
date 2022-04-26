import { createApp } from 'vue'
import App from './App.vue'
import { firebase } from './plugins/firebase'
import './index.css'
import { router } from './router';
import { i18n } from './plugins/i18n';


createApp(App)
    .use(i18n)
    .use(firebase)
    .use(router)
    .mount('#app')
