import Vue from 'vue'
import Vuex from 'vuex'
import axios from './axios-auth';

import firebaseConfig from './gcp.js';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    idToken: null,
    userId: null
  },
  mutations: {

  },
  actions: {
    signup ({commit}, authData) {
      // build signUp string for GCP/Firebase REST API
      const signUpString = '/accounts:signUp?key=' 
      + firebaseConfig.options_.apiKey;
      axios.post(signUpString, {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      })
        .then(res => console.log(res))
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
        .then(res => console.log(res))
        .catch(error => console.log(error));
    }
  },
  getters: {

  }
})