<template>
  <b-container>
    <b-alert show variant="info">Strona w budowie.</b-alert>
  </b-container>
</template>

<script>
import LawetaService from "../services/LawetaService";

export default {
  methods: {
    contact() {
      LawetaService.contact()
        .then((response) => {
          console.log(response);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.contact();
  },
};
</script>