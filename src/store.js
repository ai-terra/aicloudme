import Vue from 'vue'
import Vuex from 'vuex'
import axios from './axios-auth'  // for REST into Firebase auth
import globalAxios from 'axios'   // for REST into Firebase RTDB

import router from './router'

import firebaseConfig from './gcp.js';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    idToken: null,
    userId: null,
    user: null
  },
  mutations: {
    authUser (state, userData) {
      state.idToken = userData.token
      state.userId = userData.userId
    },
    storeUser (state, user) {
      state.user = user
    },
    clearAuthData (state) {
      state.idToken = null
      state.userId = null
    }
  },
  actions: {
    signup ({commit, dispatch}, authData) {
      // build signUp string for GCP/Firebase REST API
      const signUpString = '/accounts:signUp?key=' 
      + firebaseConfig.options_.apiKey;
      axios.post(signUpString, {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      })
        .then(res => {
          console.log(res)
          // commit to Vuex store
          commit('authUser', {
            token: res.data.idToken,
            userId: res.data.localId
          })
          // store User in Firebase RTDB
          dispatch('storeUser', authData)
          router.replace('/dashboard')
        })
        .catch(error => console.log(error));
    },
    login ({commit}, authData) {
      // build signIn string for GCP/Firebase REST API
      const signInString = '/accounts:signInWithPassword?key=' 
      + firebaseConfig.options_.apiKey;
      axios.post(signInString, {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      })
      .then(res => {
        console.log(res)
        commit('authUser', {
          token: res.data.idToken,
          userId: res.data.localId
        })
        router.replace('/dashboard')
      })
      .catch(error => console.log(error));
    },
    logout ({commit}) {
      commit('clearAuthData')
      router.replace('/signin')
    },
    // store user in Firebase RTDB
    storeUser ({commit, state}, userData) {
      if (!state.idToken) {
        return
      }
      globalAxios.post('/users.json' + '?auth=' + state.idToken, userData)
        .then(res => console.log(res))
        .catch(error => console.log(error))
    },
    // fetch user data from Firebase RTDB
    fetchUser ({commit, state}) {
      if (!state.idToken) {
        return
      }
      globalAxios.get('/users.json' + '?auth=' + state.idToken)
      .then(res => {
        // console.log(res);
        const data = res.data
        const users = []
        for (let key in data) {
          const user = data[key]
          user.id = key
          users.push(user)
        }
        // console.log(users)
        // this.email = users[0].email
        commit('storeUser', users[0])
      })
      .catch(error => console.log(error))
    }
  },
  getters: {
    user (state) {
      return state.user
    },
    isAuthenticated (state) {
      return state.idToken !== null
    }
  }
})