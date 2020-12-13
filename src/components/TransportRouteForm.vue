<template>
  <div>
    <v-card color="grey lighten-3" class="mb-12">
      <v-container>
        <v-form ref="form">
          <v-autocomplete
            v-model="startLocation"
            :rules="required"
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
            :rules="required"
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
        </v-form>
        <div class="grey--text px-md-9 pt-4">
          <p class="text-body-2">
            <span class="font-weight-bold">Let op!</span>
            <br />Wij verwachten dat de ingevulde locaties goedbereikbaar zijn met onze vrachtwagens.<br/>
            Is dit niet het geval dan kan het zijn dat er een meer prijs wordt toegevoegd boven op de al berekende prijs.
          </p>
        </div>
      </v-container>
    </v-card>
    <v-btn color="red" dark @click="calculateDistance" :loading="loadingDistance">Volgende</v-btn>
  </div>
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
      loadingDistance: false,
      jansenVerhuurLocatie: { lat: "51.318090", lon: "5.367440" },
      required: [(v) => !!v || "Dit veld is verplicht!"],
      route: {},
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

      axios
        .get(
          "https://eu1.locationiq.com/v1/search.php?key=d48cdffaffc4f0&q=" +
            value +
            "&format=json"
        )
        .then((result) => {
          // console.log(result.data);
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
          // console.log(self.startSuggestions);
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
      // console.log(value);
      axios
        .get(
          "https://eu1.locationiq.com/v1/search.php?key=d48cdffaffc4f0&q=" +
            value +
            "&format=json"
        )
        .then((result) => {
          // console.log(result.data);
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
          // console.log(self.endSuggestions);
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
      this.loadingDistance = true;
      axios
        .get(
          "https://eu1.locationiq.com/v1/directions/driving/" +
            coordinates +
            "?key=d48cdffaffc4f0&steps=true"
        )
        .then((result) => {
          // console.log(result.data);
          this.route.distance =
            parseFloat(result.data.routes[0].distance) / 1000;
          this.route.startLocation = this.startLocation;
          this.route.endLocation = this.endLocation;
          this.loadingDistance = false;
          this.submit();
        })
        .finally(() => (this.loadingDistance = false));
    },
    submit() {
      if (this.$refs.form.validate()) {
        this.$emit("submitRoute", this.route);
      }
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