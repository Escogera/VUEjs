import Vuex from 'vuex'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'
import 'bootstrap/dist/css/bootstrap.css'

import 'bootstrap/dist/js/bootstrap.js'

Vue.use(Vuex)

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App),
  store: new Vuex.Store(store)
}).$mount('#app')
