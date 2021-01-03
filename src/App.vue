<template>
  <div id="app">
    <b-nav>
      <b-nav-item active>
        <router-link to="/rent">RENT</router-link>
      </b-nav-item>
    </b-nav>

    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}
</style>
