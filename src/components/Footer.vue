<template>
  <v-footer
    color="primary lighten-1"
    
    padless
  >
    <v-row
      justify="center"
      no-gutters
    >
      <v-col
        class="grey darken-3 py-4 text-center white--text"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>&copy;  Bouwmachinetransport.nl</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {

}
</script>

<style>

</style>