<template>
  <v-container>
    <v-row class="pl-4">
      <div>Uw kosten voor het transport:</div>
    </v-row>
    <v-row class="pl-4">
      <v-icon x-large>mdi-currency-eur</v-icon>
      <h1 class="font-weight-light">{{price}}</h1>
    </v-row>
    <v-form ref="reservationForm" v-model="reservationFormValid">
      <v-text-field label="Uw naam" prepend-icon="mdi-account" required clearable></v-text-field>

      <v-text-field
        label="Email"
        hint="Jansen21@gmail.com"
        required
        type="email"
        clearable
        prepend-icon="mdi-email"
      ></v-text-field>
      <v-text-field
        label="Telefoon"
        hint="0612345678"
        required
        type="phone"
        clearable
        prepend-icon="mdi-phone"
      ></v-text-field>
      <v-checkbox
        v-model="terms"
        :rules="[v => !!v || 'Je moet akkoord gaan met onze privacy voorwaarden!']"
        class="mx-2"
        required
      >
        <template v-slot:label>
          <div @click.stop>
            Ik ga akkoord met de
            <a
              href="/privacy_statement.pdf"
              target="_blank"
              @click.stop="terms = true"
            >privacy voorwaarden</a>
          </div>
        </template>
      </v-checkbox>
      <v-checkbox
        v-model="AgeCheck"
        :rules="[v => !!v || 'Je moet minimaal 16 jaar oud zijn!']"
        required
        class="mx-2"
        label="Ik bevestig dat ik ouder ben dan 16 jaar"
      ></v-checkbox>
    </v-form>
  </v-container>
</template>

<script>
export default {
  name: "ReservationForm",
  data() {
    return {
      terms: false,
      AgeCheck: false,
      reservationFormValid: false,
    };
  },
  props: {
    price: Number,
  },
};
</script>

<style>
</style>