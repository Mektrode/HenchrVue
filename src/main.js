// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMaterial from 'vue-material'
import axios from 'axios'

import 'vue-material/dist/vue-material.css'
import App from './App'
import {routes} from './routes'
import store from './store'

Vue.use(VueRouter)
Vue.use(VueMaterial)

Vue.material.registerTheme({
    'default': {
        primary: 'red',
        accent: 'purple',
        warn: 'purple',
        background: 'white'
    },
    footer: {
        primary: 'purple',
        accent: 'purple'
    }
})

const router = new VueRouter({
    mode: 'history',
    routes
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})
