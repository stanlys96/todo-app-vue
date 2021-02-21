import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '../components/Register.vue'
import Login from '../components/Login.vue'
import Todo from '../views/Todo.vue'
import Home from '../views/Home.vue'
import AddTodo from '../views/addTodo.vue'
import EditTodo from '../views/editTodo.vue'

Vue.use(VueRouter)

const routes = [
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
