<template>
<div class="container" id="editTodo">
  <h2>Edit Todo List</h2>
  <form @submit.prevent="editingTodo">
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
    <button class="btn btn-dark mr-2">Edit Todo List</button>
    <router-link to="/todo" class="btn btn-danger ml-2">Cancel</router-link>
  </form>
</div>
</template>

<script>
export default {
  data () {
    return {
      thisId: this.$route.params.id,
      thisTitle: this.$route.params.title,
      thisDescription: this.$route.params.description,
      thisStatus: this.$route.params.status,
      thisDueDate: this.$route.params.dueDate
    }
  },
  methods: {
    editingTodo () {
      this.$store.dispatch('editList', {
        id: this.thisId,
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
  #editTodo {
    padding-top: 100px;
    color: #fff;
    min-height: 88vh;
  }

  #editTodo form {
    width: 400px;
    margin: 0 auto;
  }
</style>
