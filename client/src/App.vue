<template>
  <div id="app">
    <nav class="navbar navbar-expand-sm navbar-light bg-light">
      <div class="container">
        <span class="navbar-brand">Fancy Todo</span>
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="#">Logout</a>
            </li>
          </ul>
      </div>
    </nav>
    <router-view/>
    <footer>
      <p>Copyright &copy; Fancy Todo 2021</p>
    </footer>
  </div>
</template>

<script>
export default {
  methods: {
    childClick (value) {
      console.log(value)
    },
    grandChildClick (value) {
      console.log(value)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #6E79CC;
  min-height: 86vh;
  background: url('../public/img/background.jpg') no-repeat center center/cover;
}

.navbar {
  padding: 30px;
  height: 7vh;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

footer {
  height: 5vh;
  background-color: #888;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

footer p {
  height: 100%;
  align-items: center;
  padding-top: 10px;
}

</style>
