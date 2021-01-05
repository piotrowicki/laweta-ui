<template>
  <div id="app">
    <div id="stripped-background" />
    <b-nav>
      <b-nav-item>
        <router-link to="/offer">OFERTA</router-link>
      </b-nav-item>
      <b-nav-item>
        <router-link to="/contact">KONTAKT</router-link>
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

<style scoped src="@/assets/css/app.css">
