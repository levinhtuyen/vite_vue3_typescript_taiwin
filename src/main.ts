import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import './modules'
import { router } from '~/router.ts';
import { i18n } from '~/plugins/i18n.ts';
createApp(App)
    .use(i18n)
    .use(router)
    .mount('#app')
