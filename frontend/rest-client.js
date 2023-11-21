import { createApp } from 'vue'
import {createRouter, createWebHashHistory} from 'vue-router'
import App from './App.js'

import CarsView from './views/CarsView.js'
//import CarsView from './views/CarsView.js'

const routes = [
    {path: "/cars", component: CarsView},
    //{path: "/sellers", component: SellersView}
]

const router = createRouter({
    history:createWebHashHistory(),
    routes,
})

const app = createApp(App)

app.use(router)

app.config.globalProperties.API_URL = 'http://localhost:8080'
app.mount('#app')