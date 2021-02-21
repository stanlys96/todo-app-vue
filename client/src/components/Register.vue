<template>
<div id="register">
  <form @submit.prevent="loggingIn">
    <div class="form-group">
      <label for="full_name">Full Name</label>
      <input class="form-control" v-model="thisFullName" type="text" name="full_name" id="full_name" placeholder="Enter name">
    </div>
    <div class="form-group">
      <label for="email">Email address</label>
      <input class="form-control form-control" v-model="thisEmail" type="email" name="email" id="email" placeholder="Enter email">
      <small class="form-text text-dark">Your email will not ever be shared</small>
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input class="form-control form-control" v-model="thisPassword" type="password" name="password" id="password" placeholder="Enter password">
    </div>
    <button class="btn btn-primary" type="submit">Register</button>
  </form>
</div>
</template>

<script>
export default {
  data () {
    return {
      thisFullName: '',
      thisEmail: '',
      thisPassword: ''
    }
  },
  methods: {
    loggingIn () {
      this.$store.dispatch('register', {
        fullName: this.thisFullName,
        email: this.thisEmail,
        password: this.thisPassword
      })
    }
  }
}
</script>

<style>
#register {
  padding: 10px 50px;
  color: #000;
}
</style>
