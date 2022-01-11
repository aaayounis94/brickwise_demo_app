<template>
  <div id="nav">
    <router-link to="/">Marketplace</router-link> |
    <router-link to="/portfolio">Portfolio</router-link>
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.flashMessage {
  padding: 16px;
  background-color: green;
  display: flex;
  align-items: center;
  flex-direction: row;
  width: fit-content;
  justify-content: center;
  color: white;
  margin-right: 40px;
  margin-left: 40px;
  transition: opacity 1s ease-in-out;
  position: absolute;
  bottom: 100px;
}
h4 {
  font-size: 19px;
  margin: 0px;
  margin-bottom: 16px;
}
img {
  width: 100%;
  height: 300px;
}
h3 {
  font-size: 25px;
  margin: 0px;
  margin-bottom: 4px;
}
p {
  font-size: 18px;
  margin: 0px;
}
h1 {
  font-size: 50px;
}
</style>
