<template>
  <div>
    <v-card color="grey lighten-3" class="mb-12" >
      <v-container>
        <v-row class="pl-4">
          <div>Uw verwachte kosten voor het transport:</div>
        </v-row>
        <v-row class="pl-4">
          <v-icon x-large>mdi-currency-eur</v-icon>
          <h1 class="font-weight-light">{{price}}</h1>
          <div
            class="grey--text font-weight-light"
            style="align-self: flex-end;font-size: small;margin-bottom: 7px;"
          > excl. BTW</div>
        </v-row>
        <v-row v-if="extremeWeight">
          <v-banner
            icon="mdi-alert"
          >Het gewicht van het artikel dat u wilt vervoeren is groter daan 3000kg! Hiervoor moeten wij een offerte aanvragen en is de schatting van de prijs onjuist.</v-banner>
        </v-row>
        <v-row v-if="extremeSize">
          <v-banner
            icon="mdi-alert"
          >Het artikel dat u wilt vervoeren is zeer groot! Hiervoor moeten wij een offerte aanvragen en is de schatting van de prijs onjuist.</v-banner>
        </v-row>
        <v-row v-if="difficultTransport">
          <v-banner
            icon="mdi-alert"
          >U heeft aangegeven dat uw artikel lastiger transporteerbaar is dan normaal door bijvoorbeeld mankementen. Hierdoor is de schatting van de prijs onjuist en kunnen de los en laad tijden oplopen.</v-banner>
        </v-row>
        <v-form ref="reservationForm" v-model="reservationFormValid">
          <v-text-field
            v-model="name"
            :rules="[rules.required]"
            label="Uw naam"
            prepend-icon="mdi-account"
            required
            clearable
          ></v-text-field>
          <v-text-field
            v-model="companyName"
            label="Bedrijfsnaam*"
            hint="Niet verplicht"
            prepend-icon="mdi-domain"
            required
            clearable
          ></v-text-field>
          <v-autocomplete
            v-model="adress"
            :rules="[rules.required]"
            :items="adresses"
            :loading="adressLoading"
            :search-input.sync="searchAdress"
            no-filter
            item-text="name"
            item-value="location"
            label="Adres"
            prepend-icon="mdi-map-marker"
            hide-no-data
            required
            clearable
            return-object
            hint="Bijvoorbeeld: Hoek 54 Bergeijk"
          ></v-autocomplete>
          <v-text-field
            v-model="postalCode"
            :rules="[rules.required]"
            label="Postcode"
            prepend-icon="mdi-home"
            required
            clearable
          ></v-text-field>
          <v-text-field
            v-model="email"
            :rules="[rules.required]"
            label="Email"
            hint="Jansen21@gmail.com"
            required
            type="email"
            clearable
            prepend-icon="mdi-email"
          ></v-text-field>
          <v-text-field
            v-model="phone"
            :rules="[rules.required]"
            label="Telefoon"
            hint="0612345678"
            required
            type="phone"
            clearable
            prepend-icon="mdi-phone"
          ></v-text-field>

          <v-menu
            v-model="fromDateMenu"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            full-width
            max-width="290px"
            min-width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="dateFormatted"
                label="Gewenste datum"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              locale="nl-nl"
              :first-day-of-week="1"
              v-model="date"
              no-title
              @input="fromDateMenu = false"
            ></v-date-picker>
          </v-menu>

          <v-checkbox
            v-model="terms"
            :rules="[v => !!v || 'Je moet akkoord gaan met onze privacy voorwaarden!']"
            class="mx-2"
            required
          >
            <template v-slot:label>
              <div @click.stop>
                Ik ga akkoord met de
                <a
                  href="/privacy_statement.pdf"
                  target="_blank"
                  @click.stop="terms = true"
                >privacy voorwaarden</a>
              </div>
            </template>
          </v-checkbox>
          <v-checkbox
            v-model="AgeCheck"
            :rules="[v => !!v || 'Je moet minimaal 16 jaar oud zijn!']"
            required
            class="mx-2"
            label="Ik bevestig dat ik ouder ben dan 16 jaar"
          ></v-checkbox>
        </v-form>
      </v-container>
    </v-card>
    <v-btn color="red" dark @click="submit">Reserveren</v-btn>
  </div>
</template>

<script>
import axios from "axios";
import debounce from "debounce";


export default {
  name: "ReservationForm",
  data() {
    return {
      name: "",
      companyName: "",
      email: "",
      adress: "",
      phone: "",
      adressLoading: false,
      adresses: [],
      postalCode: "",
      date: new Date().toISOString().substr(0, 10),
      dateFormatted: "",
      terms: false,
      AgeCheck: false,
      reservationFormValid: false,
      rules: {
        required: (value) => !!value || "Dit veld is verplicht!",
        max(value, max, unit) {
          return (value) =>
            value <= max || `Mag niet meer zijn dan  ${max} ${unit} !`;
        },
      },
      fromDateMenu: false,
      searchAdress: "",
    };
  },
  props: {
    price: Number,
    extremeWeight: Boolean,
    extremeSize: Boolean,
    difficultTransport: Boolean,
  },
  methods: {
    makeSearchAdress: (value, self) => {
      // Handle empty value
      if (!value) {
        self.adress = "";
      }
      // Items have already been requested
      if (self.adressloading) {
        return;
      }
      self.adresses = [];
      self.adressLoading = true;
      axios
        .get(
          "https://eu1.locationiq.com/v1/search.php?key=d48cdffaffc4f0&q=" +
            value +
            "&format=json"
        )
        .then((result) => {
          result.data.forEach((element) => {
            self.adresses.push({
              name: element.display_name,
              location: {
                lat: element.lat,
                lon: element.lon,
              },
              id: element.place_id,
            });
          });
        })
        .finally(() => (self.adressLoading = false));
    },
    submit() {
      if (this.$refs.reservationForm.validate()) {
        var reservation = {
          name: this.name,
          email: this.email,
          phone: this.phone,
          companyName: this.companyName,
          adress: this.adress,
          postalCode: this.postalCode,
          preferedDate: this.date,
          price: this.price,
        };
        //console.log(reservation);
        this.$emit("submitReservation", reservation);
      }
    },
    formatDate(date) {
      if (!date) return null;

      const [year, month, day] = date.split("-");
      return `${day}-${month}-${year}`;
    },
  },
  watch: {
    searchAdress(value) {
      if (!value) {
        return;
      }
      // Debounce the input and wait for a pause of at
      // least 200 milliseconds. This can be changed to
      // suit your needs.
      debounce(this.makeSearchAdress, 50)(value, this);
    },

    date() {
      this.dateFormatted = this.formatDate(this.date);
    },
  },
};
</script>

<style>
</style>