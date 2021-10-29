import Vue from 'vue'
import App from './App.vue'
//全域引用
import {hunhe} from './mixin'

Vue.config.productionTip = false
//全域引用
Vue.mixin(hunhe)

new Vue({
    el:'#app',
    render: h => h(App)
})