import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/styles/main.scss'

import '@fancyapps/fancybox'
import '@fancyapps/fancybox/dist/jquery.fancybox.min.css'
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
