<template>
  <div>
    <v-img src="@/assets/pellet.webp" aspect-ratio="4.7" style="opacity:0.8">
      <v-container>
        <v-row class="lightbox white--text pa-2 fill-height text-center">
          <v-col style="background:rgba(128,128,128,0.3)">
            <div class="text-sm-h1 text-xs-h2 pl-4 font-weight-bold" light>Transport nodig?</div>
            <div class="text-h4 pl-4 font-weight-thin">Doe het met Jansen Verhuur</div>
          </v-col>
        </v-row>
      </v-container>
    </v-img>
    <v-container class="text-center mt-6">
      <v-row>
        <v-col>
          <a href="https://www.jansenverhuur.nl" style="color:transparent">
            <v-btn class="mx-2 mb-6" fab dark  x-large color="blue" elevation="0">
              <v-icon dark>mdi-check</v-icon>
            </v-btn>
          </a>
          <p class="font-weight-bold">Verhuur</p>
          <p class="font-weight-light">Huren bij Jansen Verhuur is snel, simpel en goedkoop!</p>
        </v-col>
        <v-col>
          <router-link to="/priceCalculator" style="color:transparent">
            <v-btn class="mx-2 mb-6" fab dark  x-large color="blue" elevation="0">
              <v-icon dark>mdi-truck</v-icon>
            </v-btn>
          </router-link>
          <p class="font-weight-bold">Transport</p>
          <p class="font-weight-light">Voor al uw machines en apparaten!</p>
        </v-col>
        <v-col>
          <router-link to="/priceCalculator" style="color:transparent">
            <v-btn class="mx-2 mb-6" fab dark  x-large color="blue" elevation="0">
              <v-icon dark>mdi-currency-eur</v-icon>
            </v-btn>
          </router-link>
          <p class="font-weight-bold">Prijs</p>
          <p class="font-weight-light">Bereken gemakkelijk en snel uw prijs!</p>
        </v-col>
        <v-col>
          <a href="https://www.jansenverhuur.nl" style="color:transparent">
            <v-btn class="mx-2 mb-6" fab dark x-large color="blue" elevation="0">
              <v-icon dark>mdi-account-group</v-icon>
            </v-btn>
          </a>
          <p class="font-weight-bold">Over ons</p>
          <p class="font-weight-light">Al 28 jaar specialist in verhuren!</p>
        </v-col>
      </v-row>
     <v-divider></v-divider>

    </v-container>
    <v-container>
      <v-row>
        <v-col cols="12" lg="6">
          <v-img
            src="@/assets/jansen-verhuur.webp"
            max-height="400"
            max-width="500"
            aspect-ratio="1"
          ></v-img>
        </v-col>
        <v-col cols="12" lg="6" class="pa-4">
          <h2 class="pb-2">Top transport en dat niet te duur!</h2>
          <p>Welkom bij Jansen Verhuur, de specialist voor verhuur van hoogwerkers, bouwgereedschappen, tuinmachines, steigermaterialen en nog véél meer! Jansen Verhuur is al meer dan 27 jaar gespecialiseerd in de verhuur en verkoop van hoogwerkers bouwgereedschappen, tuinmachines en steigermaterialen!</p>
          <p>Sinds kort kunnen we u ook op weg helpen met het transport van uw machines en aparaten naar uw gewenste bestemming. Wij kunnen u voorzien van transport in Nederland, België en Duitsland.</p>
          <p>Wij staan garant voor een goede service en advies voor particulieren en bedrijven!</p>
          <router-link to="/priceCalculator" style="color:transparent">
            <v-btn color="primary" >Bereken snel uw prijs</v-btn>
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