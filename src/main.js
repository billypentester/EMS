import { createApp } from 'vue'
import App from './App.vue'
import router from './router/routes'
import vuetify from './styles/vuetify'

createApp(App)
  .use(vuetify)
  .use(router)
  .mount('#app')