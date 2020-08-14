<template>
  <v-container>
    <v-form>
       <v-slider
        label="Laad tijd"
        step="1"
        thumb-label="always"
        persistent-hint
        hint="In minuten"
        min="20"
         class="pt-10"
      ></v-slider>
       <v-slider
        label="Los tijd"
        step="1"
        thumb-label="always"
        persistent-hint
        hint="In minuten"
        min="20"
         class="pt-10"
      ></v-slider>
      <!-- <v-text-field label="Laad tijd" value="20" hint="Minimaal 20" suffix="Minuten" type="number" required  clearable prepend-icon="mdi-clock-time-four-outline"></v-text-field>
      <v-text-field label="Los tijd" value="20" hint="Minimaal 20" suffix="Minuten" type="number"  required clearable  prepend-icon="mdi-clock-time-four-outline"></v-text-field> -->
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