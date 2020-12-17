<template>
  <div>
    <v-img src="@/assets/bergeijk.jpg" aspect-ratio="4.7" style="opacity:0.8">
      <v-container>
        <v-row class="lightbox white--text pa-2 fill-height text-center">
          <v-col>
            <div class="text-sm-h1 text-xs-h2 pl-4 font-weight-bold" light>Transport nodig?</div>
            <div class="text-xs-h5 text-sm-h3 pl-4 font-weight-thin ">Doe het met Bouwmachinetransport.nl</div>
          </v-col>
        </v-row>
      </v-container>
    </v-img>
    <v-container class="text-center my-12">
      <v-row>
        <v-col>
          <a href="https://www.jansenverhuur.nl" style="color:transparent">
            <v-btn class="mx-2 mb-6" fab dark  x-large color="red" elevation="0">
              <v-icon dark>mdi-check</v-icon>
            </v-btn>
          </a>
          <p class="font-weight-bold">Verhuur</p>
          <p class="font-weight-light">Huren bij Jansen Verhuur is snel, simpel en goedkoop!</p>
        </v-col>
        <v-col>
          <router-link to="/priceCalculator" style="color:transparent">
            <v-btn class="mx-2 mb-6" fab dark  x-large color="red" elevation="0">
              <v-icon dark>mdi-truck</v-icon>
            </v-btn>
          </router-link>
          <p class="font-weight-bold">Transport</p>
          <p class="font-weight-light">Voor al uw machines en apparaten!</p>
        </v-col>
        <v-col>
          <router-link to="/priceCalculator" style="color:transparent">
            <v-btn class="mx-2 mb-6" fab dark  x-large color="red" elevation="0">
              <v-icon dark>mdi-currency-eur</v-icon>
            </v-btn>
          </router-link>
          <p class="font-weight-bold">Prijs</p>
          <p class="font-weight-light">Bereken gemakkelijk en snel uw prijs!</p>
        </v-col>
        <v-col>
          <a href="https://www.jansenverhuur.nl" style="color:transparent">
            <v-btn class="mx-2 mb-6" fab dark x-large color="red" elevation="0">
              <v-icon dark>mdi-account-group</v-icon>
            </v-btn>
          </a>
          <p class="font-weight-bold">Over ons</p>
          <p class="font-weight-light">Al 30 jaar specialist in verhuren!</p>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="py-12">
      <v-row>
        <v-col cols="12" lg="6" class="hidden-md-and-down">
          <v-img
            src="@/assets/HoogwerkerVracht.webp"
            max-height="400"
            max-width="500"
            aspect-ratio="1"
          ></v-img>
        </v-col>
        <v-col cols="12" lg="6" class="pa-4">
          <h2 class="pb-2">Top transport en dat niet te duur!</h2>
          <p>Welkom bij Bouwmachinetransport.nl, de specialist voor transport van hoogwerkers, bouwgereedschappen, tuinmachines, steigermaterialen en nog véél meer! Bouwmachinetransport.nl is onderdeel van Jansen Verhuur dat al meer dan 30 jaar gespecialiseerd in de verhuur en verkoop van hoogwerkers bouwgereedschappen, tuinmachines en steigermaterialen!</p>
          <p>Sinds kort kunnen we u ook op weg helpen met het transport van uw machines en aparaten naar uw gewenste bestemming. Wij kunnen u voorzien van transport in Nederland, België en Duitsland.</p>
          <p>Wij staan garant voor een goede service en advies voor particulieren en bedrijven!</p>
          <router-link to="/priceCalculator" style="color:transparent" >
            <v-btn class="pa-0" dark color="red" text >Bereken snel uw prijs</v-btn>
          </router-link>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style>
</style>