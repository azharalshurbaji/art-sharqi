// Utilities
import { axios } from '@/plugins/axios'
import { defineStore } from 'pinia'

export default defineStore('user', {
  persist: true,

  state: () => ({
    user: {},
    // token: null,
}),

  getters: {
    isLoggedIn(state) {
        return !!state.user.token
    }
  },
  actions: {
     login(username , password ,email) {
        axios.post('https://dummyjson.com/auth/login', {
          username: username,
          password: password,
          email: email,
            // expiresInMins: 60, // optional
        })
          .then(res => {
            this.user = res.data
          axios.defaults.headers.common.Authorization = 'Bearer ' + this.user.token
          });
        
    },
    logout() {
      this.user = {}
      delete axios.defaults.headers.common.Authorization
    }

  }
})
