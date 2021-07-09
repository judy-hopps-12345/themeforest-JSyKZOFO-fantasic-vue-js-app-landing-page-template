import 'babel-polyfill'
import Vue from 'vue';
import App from './App.vue';
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import VueSilentbox from 'vue-silentbox'

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(VueAwesomeSwiper)
Vue.use(VueSilentbox);

import 'bootstrap/dist/css/bootstrap.css'
import '../src/assets/css/font-awesome.min.css'
import '../src/assets/css/pe-icon-7-stroke.css'
import 'swiper/dist/css/swiper.css'
import 'animate.css/animate.min.css'
import '../src/assets/scss/style.scss'


Vue.config.productionTip = false

import { routes } from './router/index'

const router = new VueRouter({
    routes,
    mode: 'history',
    scrollBehavior() {
        return { x: 0, y: 0 };
    }
})

new Vue({
    render: h => h(App),
    router
}).$mount('#app')
