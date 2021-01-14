<template>
  <div id="app">
    <header>
      <div id="stripped-background" />
      <b-nav>
        <b-nav-item>
          <router-link to="/main">OFERTA</router-link>
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
    <footer>
      <b-container class="footer">
        <b-row>
          <b-col cols="3">
            <h2>Partnerzy:</h2>
            <img style="width: 60%;" src="@/assets/dg.jpg" />
          </b-col>
          <b-col cols="6">
            <h2>Pomoc Drogowa Ostróda:</h2>
            <div>
              <ul>
                <li>Partyzantów 10</li>
                <li>14-100 Ostróda</li>
                <li>tel.: 505 582 392</li>
                <li>e-mail: <a href="mailto:dgcar@wp.pl">dgcar@wp.pl</a></li>
              </ul>
            </div>
          </b-col>
          <b-col class="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m11!1m3!1d1180.475235305864!2d19.945867787709943!3d53.719144714774316!2m2!1f0!2f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471d648612c6883d%3A0x44f226d1908efc21!2sPartyzant%C3%B3w+10!5e0!3m2!1spl!2spl!4v1396195367991"
              style="border: 0"
              width="100%"
              height="100%"
            ></iframe>
          </b-col>
        </b-row>
      </b-container>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style scoped src="@/assets/css/app.css">
