// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMaterial from 'vue-material'

import 'vue-material/dist/vue-material.css'
import App from './App'
import {routes} from './routes'

Vue.use(VueRouter)
Vue.use(VueMaterial)

const router = new VueRouter({
    mode: 'history',
    routes
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
