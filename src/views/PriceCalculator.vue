
<template>
  <v-container class="pa-xs-0 pa-lg-12" >
    <v-stepper v-model="e6" vertical mx-auto >
      <h1 class="text-lg-h3 text-xs-h6 font-weight-medium  pa-4 text-xs-center">Transport prijs berekenen</h1>

      <v-stepper-step :complete="e6 > 1" step="1">
        Goederen informatie
        <small>Wat wilt u vervoeren?</small>
      </v-stepper-step>

      <v-stepper-content step="1">      
            <CargoForm  @submitCargoForm="submitCargoForm"/>       
      </v-stepper-content>

      <v-stepper-step :complete="e6 > 2" step="2">Transport gegevens<small>Start en eind bestemming</small></v-stepper-step>

      <v-stepper-content step="2">
          <TransportRouteForm @submitRoute="submitRoute"/>
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
        cargoValid: true,
      }
    },

    methods:{
      submitCargoForm(cargo){
        console.log(cargo);
        this.e6 = 2;
      },
      submitRoute(){
        this.e6 = 3;
      }
    }
};
</script>

<style>
</style>