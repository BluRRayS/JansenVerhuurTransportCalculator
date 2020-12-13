
<template>
  <v-container class="pa-0 pa-md-12">
    <v-row no-gutters >
      <v-spacer class="d-none d-sm-flex"></v-spacer>
      <v-col xs="12" sm="12" md="12" lg="8"  mx-auto>
       <v-stepper v-model="e6" vertical >
      <h1
        class="text-lg-h3 text-xs-h6 font-weight-medium pa-4 text-xs-center"
      >Transport prijs berekenen</h1>

      <v-stepper-step :complete="e6 > 1" step="1" color="red">
        Goederen informatie
        <small>Wat wilt u vervoeren?</small>
      </v-stepper-step>

      <v-stepper-content step="1" color="red">
        <CargoForm @submitCargoForm="submitCargoForm" />
      </v-stepper-content>

      <v-stepper-step :complete="e6 > 2" step="2" color="red">
        Transport gegevens
        <small>Start en eind bestemming</small>
      </v-stepper-step>

      <v-stepper-content step="2">
        <TransportRouteForm @submitRoute="submitRoute" />
      </v-stepper-content>

      <v-stepper-step :complete="e6 > 3" step="3" color="red">Laad en los tijden</v-stepper-step>

      <v-stepper-content step="3">
        <TimeForm @submitTimeForm="submitTimeForm" />
      </v-stepper-content>

      <v-stepper-step step="4" color="red">
        Reserveren
        <small>Zie de prijs van uw transport en boek gelijk</small>
      </v-stepper-step>
      <v-stepper-content step="4" >
        <ReservationForm
          @submitReservation="submitReservation"
          :price="price"
          :extremeWeight="reservation.cargo.extremeWeight"
          :extremeSize="reservation.cargo.extremeSize"
          :difficultTransport="reservation.cargo.difficultTransport"
        />
      </v-stepper-content>
    </v-stepper>
    
    </v-col>
      <v-spacer class="d-none d-sm-flex"></v-spacer>
    </v-row>
   
  </v-container>
</template>

<script>
import CargoForm from "../components/CargoForm";
import TransportRouteForm from "../components/TransportRouteForm";
import TimeForm from "../components/TimeForm";
import ReservationForm from "../components/ReservationForm";
import db from "../firebase";
import emailjs from "emailjs-com";

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
      reservation: {
        cargo: {
          extremeWeight: false,
          extremeSize: false,
          difficultTransport: false,
        },
      },
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
    submitReservation(reservation) {
      this.reservation.clientInfo = reservation;
      delete this.reservation.cargo.files;
      console.log(this.reservation);
      db.collection("reservations")
        .add(this.reservation)
        .then(() => {
          console.log("Document successfully written!");
          this.$router.push({ path: "reservationSuccess" });
        })
        .catch((error) => {
          console.error("Error writing document: ", error);
        });

      var params = {
        type: this.reservation.cargo.type,
        cargoName: this.reservation.cargo.name,
        brand: this.reservation.cargo.brand,
        model: this.reservation.cargo.model,
        weight: this.reservation.cargo.weight,
        height: this.reservation.cargo.size.height,
        length: this.reservation.cargo.size.length,
        width: this.reservation.cargo.size.width,
        startLocation: this.reservation.route.startLocation.name,
        endLocation: this.reservation.route.endLocation.name,
        loadingTime: this.reservation.loadingTimes.loadingTime,
        unloadingTime: this.reservation.loadingTimes.unloadingTime,
        name: this.reservation.clientInfo.name,
        companyName: this.reservation.clientInfo.companyName,
        email: this.reservation.clientInfo.email,
        phone: this.reservation.clientInfo.phone,
        adress: this.reservation.clientInfo.adress.name,
        postalCode: this.reservation.clientInfo.postalCode,
        date: this.reservation.clientInfo.preferedDate,
        price: this.reservation.clientInfo.price,
      };
      this.sendEmail(params);
    },
    calculatePrice() {
      console.log(this.reservation);
      this.price = this.round(
        this.reservation.route.distance * 1.5 +
          this.reservation.loadingTimes.loadingTime +
          this.reservation.loadingTimes.unloadingTime,
        2
      );
      //console.log(this.price);
    },
    round(value, decimals) {
      return Number(Math.round(value + "e" + decimals) + "e-" + decimals);
    },
    sendEmail(params) {
      emailjs
        .send(
          "smtp_server",
          "template_zfEuhJ9R",
          params,
          "user_kCtUU0JDDvkPwwLSa9mhC"
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.status, result.text);
          },
          (error) => {
            console.log("FAILED...", error);
          }
        );
    },
  },
};
</script>

<style>
</style>