<template>
  <div class="card">
    <div class="card-body">
      <h4 class="card-title">{{ list.title }}</h4>
      <h6 class="card-subtitle text-muted my-3">{{ list.status }}</h6>
      <p class="card-text">{{ list.description }}</p>
      <p class="card-text">Due date: {{ list.due_date }}</p>
      <router-link :to="{ name: 'EditTodoPage', params: { id: list.id, title: list.title, status: list.status, description: list.description, dueDate: list.due_date } }" class="btn btn-outline-secondary mr-2" href="#">Update</router-link>
      <a @click.prevent="deletingList" class="btn btn-outline-danger ml-2" href="#">Delete</a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['list'],
  methods: {
    deletingList () {
      this.$store.dispatch('deleteList', {
        id: this.list.id
      })
    }
  }
}
</script>

<style>
  .card {
    border: 2px solid #000;
  }
</style>
