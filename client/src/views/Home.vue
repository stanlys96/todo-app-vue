<template>
  <div id="login-register">
    <div id="content" class="container">
      <nav>
        <a>Register</a> | <a>Login</a>
        <router-view />
      </nav>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>
#content {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 450px;
  margin: 0 auto;
  background-color: rgba(110, 204, 191, 0.7);
  border-radius: 40px;
}

#login-register {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

#content h2 {
  margin: 0;
}

#content a {
  display: inline-block;
  padding: 10px;
  margin: 10px;
  font-size: 20px;
  color: #000;
  border-radius: 15px;
  text-decoration: none;
}

.active {
  background-color: #42b983;
}
</style>
