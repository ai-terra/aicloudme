import Vue from 'vue'
import VueRouter from 'vue-router'

import WelcomePage from './components/welcome.vue'
import DashboardPage from './components/dashboard.vue'
import SignupPage from './auth/signup.vue'
import SigninPage from './auth/signin.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: WelcomePage },
  { path: '/signup', component: SignupPage },
  { path: '/signin', component: SigninPage },
  { path: '/dashboard', component: DashboardPage }
]

export default new VueRouter({mode: 'history', routes})