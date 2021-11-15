import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// const Demo = Vue.extend({})
// const d = new Demo()

new Vue({
    el:'#app',
    render: h => h(App),
    beforeCreate(){
        Vue.prototype.$bus = this       
    }
})