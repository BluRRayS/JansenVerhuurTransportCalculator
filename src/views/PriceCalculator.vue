
<template>
  <v-container class="pa-0 pa-md-12">
    <v-stepper v-model="e6" vertical mx-auto>
      <h1
        class="text-lg-h3 text-xs-h6 font-weight-medium pa-4 text-xs-center"
      >Transport prijs berekenen</h1>

      <v-stepper-step :complete="e6 > 1" step="1">
        Goederen informatie
        <small>Wat wilt u vervoeren?</small>
      </v-stepper-step>

      <v-stepper-content step="1">
        <CargoForm @submitCargoForm="submitCargoForm" />
      </v-stepper-content>

      <v-stepper-step :complete="e6 > 2" step="2">
        Transport gegevens
        <small>Start en eind bestemming</small>
      </v-stepper-step>

      <v-stepper-content step="2">
        <TransportRouteForm @submitRoute="submitRoute" />
      </v-stepper-content>

      <v-stepper-step :complete="e6 > 3" step="3">Laad en los tijden</v-stepper-step>

      <v-stepper-content step="3">
        <TimeForm @submitTimeForm="submitTimeForm" />
      </v-stepper-content>

      <v-stepper-step step="4">
        Reserveren
        <small>Zie de prijs van uw transport en boek gelijk</small>
      </v-stepper-step>
      <v-stepper-content step="4">
        <v-card color="grey lighten-3" class="mb-12">
          <ReservationForm :price="price" />
        </v-card>
        <v-btn color="primary" @click="e6 = 1">Reserveren</v-btn>
      </v-stepper-content>
    </v-stepper>
  </v-container>
</template>

<script>
import CargoForm from "../components/CargoForm";
import TransportRouteForm from "../components/TransportRouteForm";
import TimeForm from "../components/TimeForm";
import ReservationForm from "../components/ReservationForm";

export default {
  components: {
    CargoForm,
    TransportRouteForm,
    TimeForm,
    ReservationForm,
  },

  data() {
    return {
      e6: 1,
      cargoValid: true,
      reservation: {},
      price: 0,
    };
  },

  methods: {
    submitCargoForm(cargo) {
      console.log(cargo);
      this.reservation.cargo = cargo;
      this.e6 = 2;
    },
    submitRoute(route) {
      console.log(route);
      this.reservation.route = route;
      this.e6 = 3;
    },
    submitTimeForm(loadingTimes) {
      console.log(loadingTimes);
      this.reservation.loadingTimes = loadingTimes;
      this.calculatePrice();
      this.e6 = 4;
    },
    calculatePrice() {
      console.log(this.reservation);
      this.price = this.round(
        this.reservation.route.distance * 1.5 +
          this.reservation.loadingTimes.loadingTime +
          this.reservation.loadingTimes.unloadingTime,
        2
      );
      console.log(this.price);
    },
    round(value, decimals) {
      return Number(Math.round(value + "e" + decimals) + "e-" + decimals);
    },
  },
};
</script>

<style>
</style>