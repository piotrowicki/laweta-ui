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
      <b-container fluid="md" class="laweta">
        <b-row>
          <b-col cols="2"></b-col>
          <b-col cols="8" class="laweta-description">
            <img src="@/assets/laweta2.gif" />
            <div class="align">
              <span id="log24" class="blink-me">24h</span>
              <span class="osobowe-busy-tir">OSOBOWE BUSY TIR</span>
              <span class="pomoc-drogowa-ostroda">POMOC DROGOWA OSTRÓDA</span>
              <span id="phone" class="blink-me">505 582 392</span>
            </div>
          </b-col>
          <b-col cols="2"></b-col>
        </b-row>
      </b-container>
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
