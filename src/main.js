import Vue from 'vue'
import { firestorePlugin } from 'vuefire'
import axios from 'axios'

import router from './router'
import store from './store'

import App from './App.vue'

Vue.config.productionTip = false

Vue.use(firestorePlugin)

axios.defaults.baseURL = 'https://aiplanet.firebaseio.com'

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
