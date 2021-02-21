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
  {
    path: '/',
    name: 'HomePage',
    component: Home,
    children: [
      {
        path: '/register',
        name: 'RegisterPage',
        component: Register
      },
      {
        path: '/login',
        name: 'LoginPage',
        component: Login
      }
    ]
  },
  {
    path: '/todo',
    name: 'TodoPage',
    component: Todo
  },
  {
    path: '/addTodo',
    name: 'AddTodoPage',
    component: AddTodo
  },
  {
    path: '/editTodo',
    name: 'EditTodoPage',
    component: EditTodo
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
