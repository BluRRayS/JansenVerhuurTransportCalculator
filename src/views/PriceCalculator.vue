
<template>
  <v-container >
    <v-stepper v-model="e6" vertical mx-auto>
      <h1 class="text-h3 pa-4">Transport prijs berekenen</h1>

      <v-stepper-step :complete="e6 > 1" step="1">
        Goederen informatie
        <small>Wat wilt u vervoeren?</small>
      </v-stepper-step>

      <v-stepper-content step="1">
        <v-card color="grey lighten-3" class="mb-12">
            <CargoForm/>
        </v-card>
        <v-btn color="primary" @click="e6 = 2">Volgende</v-btn>
      </v-stepper-content>

      <v-stepper-step :complete="e6 > 2" step="2">Transport gegevens<small>Start en eind bestemming</small></v-stepper-step>

      <v-stepper-content step="2">
        <v-card color="grey lighten-3" class="mb-12">
          <TransportRouteForm/>
        </v-card>
        <v-btn color="primary" @click="e6 = 3">Volgende</v-btn>
      </v-stepper-content>

      <v-stepper-step :complete="e6 > 3" step="3">Laad en los tijden</v-stepper-step>

      <v-stepper-content step="3">
        <v-card color="grey lighten-3" class="mb-12">
          <TimeForm/>
        </v-card>
        <v-btn color="primary" @click="e6 = 4">Volgende</v-btn>
      </v-stepper-content>

      <v-stepper-step step="4">Reserveren<small>Zie de prijs van uw transport en boek gelijk</small></v-stepper-step>
      <v-stepper-content step="4">
        <v-card color="grey lighten-3" class="mb-12">
          <ReservationForm/>
        </v-card>
        <v-btn color="primary" @click="e6 = 1">Reserveren</v-btn>
      </v-stepper-content>
    </v-stepper>
  </v-container>
</template>

<script>
import CargoForm from '../components/CargoForm'
import TransportRouteForm from '../components/TransportRouteForm'
import TimeForm from '../components/TimeForm'
import ReservationForm from '../components/ReservationForm'

export default {
    components:{
        CargoForm,
        TransportRouteForm,
        TimeForm,
        ReservationForm
    },

    data () {
      return {
        e6: 1,
      }
    }
};
</script>

<style>
</style>