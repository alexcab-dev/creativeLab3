import Vue from 'vue'
import App from './App.vue'
import router from './router'
import mock from './mock-data.js'

import 'bootstrap'
import './assets/app.scss'

Vue.config.productionTip = false

let data = {
  reviews: mock,
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
