<template>
  <div>
    <v-container>
      <v-row>
        <v-col class="mx-auto" style="max-width:500px">
          <v-card class="pa-6">
            <v-row>
              <v-btn fab elevation="0" color="green" class="accent-4 mx-auto mb-8" text-light>
                <v-icon x-large>mdi-check</v-icon>
              </v-btn>
            </v-row>
            <h1 class="text-center font-weight-light text-h5 pb-2">Transport is aangevraagd!</h1>
            <v-divider></v-divider>
            <v-card-text>Wij verwerken uw verzoek en zullen zo spoedig mogelijk contact opnemen met u.</v-card-text>
            <v-card-actions style="justify-content:center">
              <router-link to="/contact" style="color:transparent">
                <v-btn text>contact</v-btn>
              </router-link>
              <router-link to="/" style="color:transparent">
                <v-btn color="primary" text>terug</v-btn>
              </router-link>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>