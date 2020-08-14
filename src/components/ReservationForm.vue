<template>
  <v-container>
    <v-form ref="form">
      <v-text-field label="Uw naam" required clearable></v-text-field>

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
        v-model="AgreeToStatement"
        class="mx-2"
        label="Ik ga akkoord met de privacy voorwaarden"
      ></v-checkbox>
      <v-checkbox v-model="AgeCheck" class="mx-2" label="Ik bevestig dat ik ouder ben dan 16 jaar"></v-checkbox>
    </v-form>
  </v-container>
</template>

<script>
export default {
  name: "ReservationForm",
  data() {
    return {
      AgreeToStatement: false,
      AgeCheck: false,
    };
  },
};
</script>

<style>
</style>