import { createApp } from 'vue'
import App from './App.vue'
import { firebase } from './plugins/firebase'
import './index.css'
import { createPinia } from 'pinia';
import { router } from './router';
import { i18n } from './plugins/i18n';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const pinia = createPinia();
createApp(App)
    .use(i18n)
    .use(ElementPlus)
    .use(firebase)
    .use(pinia)
    .use(router)
    .mount('#app')
