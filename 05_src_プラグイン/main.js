import Vue from 'vue'
import App from './App.vue'

// pluginsを引用
import plugins from './plugins'

Vue.config.productionTip = false

// pluginsを引用
Vue.use(plugins)

new Vue({
    el:'#app',
    render: h => h(App)
})