import Vue from 'vue'
import { firestorePlugin } from 'vuefire'
import axios from 'axios'

import router from './router'
import store from './store'

import App from './App.vue'

Vue.config.productionTip = false

Vue.use(firestorePlugin)

axios.defaults.baseURL = 'https://aiplanet.firebaseio.com'
axios.defaults.headers.common['Authorization'] = 'aibase'
axios.defaults.headers.get['Accepts'] = 'application/json'

axios.interceptors.request.use(config => {
  console.log('Request interceptor', config)
  // config.headers. ... = '...'
  return config
})
axios.interceptors.response.use(res => {
  console.log('Response interceptor', res)
  return res
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
