<template>
  <v-container>
    <v-form ref="form">
      <v-autocomplete
        v-model="startLocation"
        :items="startSuggestions"
        :loading="loadingStart"
        :search-input.sync="searchStart"
        no-filter
        item-text="name"
        item-value="location"
        label="Ophaal locatie"
        prepend-icon="mdi-map-marker"
        hide-no-data
        required
        clearable
        return-object
        hint="Bijvoorbeeld: Hoek 54 Bergeijk"
      ></v-autocomplete>

      <v-autocomplete
        v-model="endLocation"
        :items="endSuggestions"
        :loading="loadingEnd"
        :search-input.sync="searchEnd"
        no-filter
        item-text="name"
        item-value="location"
        label="Bestemmings locatie"
        prepend-icon="mdi-map-marker"
        hide-no-data
        required
        clearable
        return-object
        hint="Bijvoorbeeld: Hoek 54 Bergeijk"
      ></v-autocomplete>
      <v-btn @click="calculateDistance" primary>Afstand Berekenen</v-btn>
      <v-banner single-line v-if="distance">{{distance}} KM</v-banner>
    </v-form>
  </v-container>
</template>

<script>
import axios from "axios";
import debounce from "debounce";

// 51.318090,5.367440 Lat long hoek 54 bergeijk
export default {
  name: "TransportRouteForm",
  data() {
    return {
      searchEnd: "",
      loadingEnd: false,
      endSuggestions: [],
      endLocation: "",

      searchStart: "",
      loadingStart: false,
      startSuggestions: [],
      startLocation: "",
      distance: 0,
      jansenVerhuurLocatie: { lat: "51.318090", lon: "5.367440" },
    };
  },
  methods: {
    makeSearchStart: (value, self) => {
      // Handle empty value
      if (!value) {
        self.startLocation = "";
      }
      // Items have already been requested
      if (self.loadingStart) {
        return;
      }
      self.startSuggestions = [];
      self.loadingStart = true;

      console.log(value);
      axios
        .get(
          "https://eu1.locationiq.com/v1/search.php?key=d48cdffaffc4f0&q=" +
            value +
            "&format=json"
        )
        .then((result) => {
          console.log(result.data);
          result.data.forEach((element) => {
            self.startSuggestions.push({
              name: element.display_name,
              location: {
                lat: element.lat,
                lon: element.lon,
              },
              id: element.place_id,
            });
          });
          console.log(self.startSuggestions);
        })
        .finally(() => (self.loadingStart = false));
    },
    makeSearchEnd: (value, self) => {
      // Handle empty value
      if (!value) {
        self.endLocation = "";
      }
      // Items have already been requested
      if (self.loadingEnd) {
        return;
      }
      self.endSuggestions = [];
      self.loadingEnd = true;
      console.log(value);
      axios
        .get(
          "https://eu1.locationiq.com/v1/search.php?key=d48cdffaffc4f0&q=" +
            value +
            "&format=json"
        )
        .then((result) => {
          console.log(result.data);
          result.data.forEach((element) => {
            self.endSuggestions.push({
              name: element.display_name,
              location: {
                lat: element.lat,
                lon: element.lon,
              },
              id: element.place_id,
            });
          });
          console.log(self.endSuggestions);
        })
        .finally(() => (self.loadingEnd = false));
    },
    calculateDistance() {
      var coordinates =
        this.jansenVerhuurLocatie.lon +
        "," +
        this.jansenVerhuurLocatie.lat +
        ";" +
        this.startLocation.location.lon +
        "," +
        this.startLocation.location.lat +
        ";" +
        this.endLocation.location.lon +
        "," +
        this.endLocation.location.lat +
        ";" +
        this.jansenVerhuurLocatie.lon +
        "," +
        this.jansenVerhuurLocatie.lat;

      axios
        .get(
          "https://eu1.locationiq.com/v1/directions/driving/" +
            coordinates +
            "?key=d48cdffaffc4f0&steps=true"
        )
        .then((result) => {
          console.log(result.data);
          console.log(result.data.routes[0].distance);
          this.distance = parseFloat(result.data.routes[0].distance) / 1000;
        });
    },
  },
  watch: {
    searchEnd(value) {
      if (!value) {
        return;
      }
      // Debounce the input and wait for a pause of at
      // least 200 milliseconds. This can be changed to
      // suit your needs.
      debounce(this.makeSearchEnd, 50)(value, this);
    },
    searchStart(value) {
      if (!value) {
        return;
      }
      // Debounce the input and wait for a pause of at
      // least 200 milliseconds. This can be changed to
      // suit your needs.
      debounce(this.makeSearchStart, 50)(value, this);
    },
  },
};
</script>

<style>
</style>