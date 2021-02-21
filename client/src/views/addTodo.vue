<template>
<div class="container" id="addTodo">
  <h2>Add Todo List</h2>
  <form @submit.prevent="addingTodo">
    <div class="form-group">
      <label for="title">Title</label>
      <input class="form-control" v-model="thisTitle" type="text" id="title" placeholder="Enter title">
    </div>
    <div class="form-group">
      <label for="email">Description</label>
      <input class="form-control form-control" v-model="thisDescription" type="text" id="description" placeholder="Enter description">
    </div>
    <div class="form-group">
      <label for="status">Status</label>
      <input class="form-control form-control-sm" v-model="thisStatus" type="text" id="status" placeholder="Enter status">
    </div>
    <div class="form-group">
      <label for="due_date">Due Date</label>
      <input class="form-control" type="date" v-model="thisDueDate" name="due_date" id="due_date">
    </div>
    <button class="btn btn-dark mr-2">Add Todo List</button>
    <router-link to="/todo" class="btn btn-danger ml-2">Cancel</router-link>
  </form>
</div>
</template>

<script>
export default {
  data () {
    return {
      thisTitle: '',
      thisDescription: '',
      thisStatus: '',
      thisDueDate: ''
    }
  },
  methods: {
    addingTodo () {
      this.$store.dispatch('addList', {
        title: this.thisTitle,
        description: this.thisDescription,
        status: this.thisStatus,
        dueDate: this.thisDueDate
      })
    }
  }
}
</script>

<style>
  #addTodo {
    padding-top: 100px;
    color: #fff;
    min-height: 88vh;
  }

  #addTodo form {
    width: 400px;
    margin: 0 auto;
  }
</style>
