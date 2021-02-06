<template>
  <b-container>
    <b-row>
      <b-col cols="12" md="8">
        <b-form @submit="onSubmit">
          <b-form-group
            id="input-group-1"
            label="Adres email:"
            label-for="input-1"
            description="Nie udostępniamy nikomu Twojego adresu email."
          >
            <b-form-input
              id="input-1"
              v-model="form.email"
              type="email"
              required
              disabled
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-2"
            label="Twoje imię:"
            label-for="input-2"
          >
            <b-form-input
              id="input-2"
              v-model="form.name"
              required
              disabled
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-3" label="Treść:" label-for="input-3">
            <b-form-textarea
              id="input-3"
              v-model="form.text"
              placeholder="Napisz coś..."
              rows="3"
              max-rows="6"
              disabled
            ></b-form-textarea>
          </b-form-group>

          <b-button type="submit" variant="primary" disabled>Wyślij</b-button>
        </b-form>
      </b-col>
      <b-col cols="12" md="4" style="margin-top: 1%;">
        <p class="h1 mb-2"><b-icon icon="envelope-open"> </b-icon> EMAIL</p>
        <p>dgcar@wp.pl</p>
        <hr />
        <p class="h1 mb-2"><b-icon icon="phone"> </b-icon> TELEFON</p>
        <p>505 582 392</p>
      </b-col>
    </b-row>
    <br />
    <b-alert show variant="warning">Strona w budowie.</b-alert>
    <b-alert :show="error" variant="warning">{{ msg }}</b-alert>
    <b-alert :show="success" variant="info">{{ msg }}</b-alert>
  </b-container>
</template>

<script>
import LawetaService from "../services/LawetaService";

export default {
  data() {
    return {
      form: {
        email: "",
        name: "",
        text: "",
      },
      msg: "",
      error: false,
      success: false,
    };
  },
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
    onSubmit(event) {
      event.preventDefault();
      LawetaService.sendEmail(this.form)
        .then((response) => {
          console.log(response);
          this.msg = "Wiadomość wysłana pomyślnie.";
          this.success = true;
        })
        .catch((e) => {
          console.log(e);
          this.msg = "Problem z wysłaniem wiadomości";
          this.error = true;
        });
    },
  },
  mounted() {
    this.contact();
  },
};
</script>