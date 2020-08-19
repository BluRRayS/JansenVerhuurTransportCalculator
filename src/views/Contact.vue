<template>
  <div>
    <v-img src="@/assets/pellet.jpg" aspect-ratio="6" style="opacity:0.9">
      <v-container>
        <v-row class="lightbox white--text pa-2 fill-height">
          <v-col>
            <div class="text-h3 pl-4 font-weight-bold" light>Contact</div>
          </v-col>
        </v-row>
      </v-container>
    </v-img>
    <v-container>
      <v-row>
        <v-col cols="12" lg="6" class="pa-4">
          <v-card class="px-4 py-6">
            <h2 class="pb-2 text-h4 mb-2">Neem gerust contact met ons op</h2>
            <p>
              <strong>
                Adres
                <br />
              </strong>Jansen Verhuur Bergeijk B.V.
              <br />Hoek 54
              <br />5571 GK Bergeijk
            </p>

            <p>
              <strong>Telefoonnummer:</strong>
              <br />0031497574870
            </p>
            <p>
              <strong>
                Whatsapp:
                <br />
              </strong>
              <a href="https://wa.me/31682882567">0031682882567</a>
            </p>
            <p>
              <strong>Email:</strong>
              <br />
              <a href="mailto:info@jansenverhuur.nl">info@jansenverhuur.nl</a>
            </p>
            <p>
              <strong>
                Bedrijfsgegevens:
                <br />
              </strong>KvK: 66359716
              <br />BTW: NL8565.12.047.B01
            </p>
          </v-card>
        </v-col>
        <v-col cols="12" lg="6">
          <div  id="mapContainer" class="basemap pa-4 mx-auto"></div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import mapboxgl from "mapbox-gl";

export default {
  data() {
    return {
      accessToken:
        "pk.eyJ1Ijoiam9lcHZlcmhvZXZlbiIsImEiOiJja2UxaGpxeDg0NHV0MndtcTRjcDhqcjZiIn0.9mnih2kMWGcp_WhtJa4avw",
      // mapStyle: "mapbox://streets", // your map style
    };
  },
  mounted() {
    mapboxgl.accessToken = this.accessToken;

    var map = new mapboxgl.Map({
      container: "mapContainer",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [5.36744, 51.31809],
      zoom: 16,
    });

    new mapboxgl.Marker().setLngLat([5.36744, 51.31809]).addTo(map);
  },
};
</script>

<style scoped>
.basemap {
  height: 400px;
}
</style>
