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
      <div class="laweta">
        <img src="~@/assets/laweta2.gif" alt="laweta" />
        <div class="laweta-description">
          <p id="log24" class="blink-me">24h</p>
          <p class="osobowe-busy-tir">OSOBOWE BUSY TIR</p>
          <p class="pomoc-drogowa-ostroda">POMOC DROGOWA OSTRÓDA</p>
          <p id="phone" class="blink-me">505 582 392</p>
        </div>
      </div>
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
