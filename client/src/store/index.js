import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    page: '',
    baseURL: 'http://localhost:3000',
    lists: []
  },
  mutations: {
    changePage (state, payload) {
      state.page = payload
    },
    changeLists (state, payload) {
      state.lists = payload
    }
  },
  actions: {
    changePage (context, payload) {
      context.commit('changePage', payload.page)
      router.push('/' + payload.page)
    },
    register (context, payload) {
      const { fullName, email, password } = payload
      axios({
        url: this.state.baseURL + '/user/register',
        method: 'POST',
        data: {
          full_name: fullName,
          email,
          password
        }
      })
        .then(response => {
          context.commit('changePage', 'login')
          router.push('/login')
        })
        .catch(err => {
          err.from = 'index.js register()'
          console.log({ err })
        })
    },
    login (context, payload) {
      const { email, password } = payload
      axios({
        url: this.state.baseURL + '/user/login',
        method: 'POST',
        data: {
          email,
          password
        }
      })
        .then(response => {
          localStorage.setItem('access_token', response.data.access_token)
        })
        .catch(err => {
          err.from = 'index.js login()'
          console.log({ err })
        })
    },
    getLists (context, payload) {
      axios({
        url: this.state.baseURL + '/todos',
        method: 'GET',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(response => {
          context.commit('changeLists', response.data)
        })
        .catch(err => {
          err.from = 'index.js getLists()'
          console.log({ err })
        })
    },
    addList (context, payload) {
      const { title, status, description, dueDate } = payload
      axios({
        url: this.state.baseURL + '/todos',
        method: 'POST',
        data: {
          title,
          status,
          description,
          due_date: dueDate
        },
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(response => {
          router.push('/todo')
        })
        .catch(err => {
          err.from = 'index.js addList()'
          console.log({ err })
        })
    },
    editList (context, payload) {
      const { id, title, status, description, dueDate } = payload
      axios({
        url: this.state.baseURL + `/todos/${id}`,
        method: 'PUT',
        data: {
          title,
          status,
          description,
          due_date: dueDate
        },
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(response => {
          router.push('/todo')
        })
        .catch(err => {
          err.from = 'index.js editList()'
          console.log({ err })
        })
    },
    deleteList (context, payload) {
      const { id } = payload
      axios({
        url: this.state.baseURL + `/todos/${id}`,
        method: 'DELETE',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(response => {
          context.dispatch('getLists')
        })
        .catch(err => {
          err.from = 'index.js deleteList()'
          console.log({ err })
        })
    }
  },
  modules: {
  }
})
