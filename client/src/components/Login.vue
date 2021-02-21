<template>
<div id="login">
  <form>
    <div class="form-group">
      <label for="email">Email address</label>
      <input class="form-control form-control" type="email" name="email" id="email" placeholder="Enter email">
      <small class="form-text text-dark">Your email will not ever be shared</small>
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input class="form-control form-control" type="password" name="password" id="password" placeholder="Enter password">
    </div>
    <button class="btn btn-primary" type="submit">Login</button>
  </form>
</div>
</template>

<script>
export default {
}
</script>

<style>
#login {
  padding: 10px 50px;
  color: #000;
}
</style>
