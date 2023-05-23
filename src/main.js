import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import vue3GoogleLogin from 'vue3-google-login'

// import './assets/main.css'

const app = createApp(App)

app.use(vue3GoogleLogin, {
    clientId: '754395696951-kro6a9pn7b3r9vj1mvb2aoifhdo3m79g.apps.googleusercontent.com'
})

const pinia = createPinia()
pinia.use(({ store }) => {
    store.router = markRaw(router)
})

app.use(pinia)
app.use(router)

app.mount('#app')
