<template>
  <v-container>
    <v-form ref="form">
      <v-text-field
        label="Te vervoeren artikel"
        required
        clearable
      ></v-text-field>
      <v-text-field    
        label="Gewicht"
        hint="In kg"
        persistent-hint
        required
        clearable
      ></v-text-field>
      <v-file-input accept="image/*" show-size chips multiple counter label="Afbeeldingen toevoegen"></v-file-input>
    </v-form>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
</style>