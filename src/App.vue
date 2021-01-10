<template>
  <div id="app">
    <header>
      <div id="stripped-background" />
      <b-nav>
        <b-nav-item>
          <router-link to="/offer">OFERTA</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link to="/contact">KONTAKT</router-link>
        </b-nav-item>
      </b-nav>
    </header>

    <b-container fluid="md" class="laweta">
      <img class="laweta-img" src="@/assets/laweta2.gif" />
      <div class="align">
        <span id="log24" class="blink-me">24h</span>
        <span class="osobowe-busy-tir">OSOBOWE BUSY TIR</span>
        <span class="pomoc-drogowa-ostroda">POMOC DROGOWA OSTRÓDA</span>
        <span id="phone" class="blink-me">505 582 392</span>
      </div>
    </b-container>
    <main>
      <b-container>
        <router-view />
      </b-container>
    </main>
    <footer></footer>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style scoped src="@/assets/css/app.css">
