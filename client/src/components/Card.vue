<template>
  <div class="card">
    <div class="card-body">
      <h4 class="card-title"></h4>
      <h6 class="card-subtitle text-muted my-3"></h6>
      <p class="card-text"></p>
      <p class="card-text">Due date: </p>
      <router-link class="btn btn-outline-secondary mr-2" href="#">Update</router-link>
      <a class="btn btn-outline-danger ml-2" href="#">Delete</a>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>
  .card {
    border: 2px solid #000;
  }
</style>
