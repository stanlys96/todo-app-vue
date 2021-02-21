<template>
<div class="container" id="addTodo">
  <h2>Add Todo List</h2>
  <form>
    <div class="form-group">
      <label for="title">Title</label>
      <input class="form-control" type="text" id="title" placeholder="Enter title">
    </div>
    <div class="form-group">
      <label for="email">Description</label>
      <input class="form-control form-control" type="text" id="description" placeholder="Enter description">
    </div>
    <div class="form-group">
      <label for="status">Status</label>
      <input class="form-control form-control-sm" type="text" id="status" placeholder="Enter status">
    </div>
    <div class="form-group">
      <label for="due_date">Due Date</label>
      <input class="form-control" type="date" name="due_date" id="due_date">
    </div>
    <button class="btn btn-dark mr-2">Add Todo List</button>
    <router-link to="/todo" class="btn btn-danger ml-2">Cancel</router-link>
  </form>
</div>
</template>

<script>
export default {
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
