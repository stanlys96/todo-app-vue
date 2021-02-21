<template>
  <div id="todo">
    <h2>To Do Lists</h2>
    <router-link :to="{ name: 'AddTodoPage' }" class="btn btn-primary mt-2"><i class="fas fa-plus-square mr-2"></i> Add Todo List</router-link>
    <div class="container" id="lists">
      <div class="row">
        <div class="card-col">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from '../components/Card'
export default {
  components: {
    Card
  },
  created: function () {
  },
  computed: {
  }
}
</script>

<style>
  #todo {
    position: relative;
    min-height: 88vh;
    background: url('../../public/img/todo-background.jpeg') no-repeat center center/cover;
    z-index: 2;
  }

  #todo::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background-color:rgba(0, 0, 0, 0.6);
    width: 100%;
    z-index: -1;
  }

  #todo h2 {
    color: #fff;
    padding-top: 40px;
  }

  #lists .card-col {
    padding-top: 30px;
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-gap: 20px;
  }

  #lists .card {
    width: 17rem;
  }
</style>
