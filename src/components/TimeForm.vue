<template>
  <v-container>
    <v-form>
      <v-text-field label="Laad tijd" hint="In minuten" required clearable prepend-icon="clock-time-four-outline"></v-text-field>
      <v-text-field label="Los tijd" hint="In minuten" required clearable  prepend-icon="clock-time-four-outline"></v-text-field>
    </v-form>
  </v-container>
</template>

<script>
export default {
  name: "TimeForm",
};
</script>

<style>
</style>