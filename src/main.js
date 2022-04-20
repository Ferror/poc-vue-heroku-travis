import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router';
import * as Sentry from '@sentry/vue';

const app = createApp(App).use(router);

Sentry.init({
    Vue: app,
    dsn: process.env.VUE_APP_SENTRY_DSN,
    logErrors: true
});

app.mount('#app')
