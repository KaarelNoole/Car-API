import { createApp } from 'vue'
import {createRouter, createWebHashHistory} from 'vue-router'
import App from './App.js'

import CarsView from './views/CarsView.js'
import SellersView from './views/SellersView.js'
import LocationsView from './views/LocationsView.js'

const routes = [
    {path: "/cars", component: CarsView},
    {path: "/sellers", component: SellersView},
    {path: "/locations", component: LocationsView}
]

const router = createRouter({
    history:createWebHashHistory(),
    routes,
})

const app = createApp(App)

app.use(router)

app.config.globalProperties.API_URL = 'http://localhost:8080'
app.mount('#app')