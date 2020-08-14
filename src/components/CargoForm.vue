<template>
  <div>
    <v-card color="grey lighten-3" class="mb-12">
      <v-container>
        <v-form ref="form">
          <v-text-field
            :rules="cargoNameRules"
            label="Te vervoeren artikel"
            required
            clearable
            counter
            maxlength="50"
            type="text"
          ></v-text-field>
          <v-text-field
            :rules="cargoWeightRules"
            label="Gewicht"
            persistent-hint
            required
            clearable
            type="number"
            suffix="KG"
          ></v-text-field>
          <v-file-input
            accept="image/*"
            show-size
            chips
            multiple
            counter
            label="Afbeeldingen toevoegen"
          ></v-file-input>
        </v-form>
      </v-container>
    </v-card>
    <v-btn color="primary" @click="submit">Volgende</v-btn>
  </div>
</template>

<script>
export default {
  name: "CargoForm",
  data() {
    return {
      cargoNameRules: [
        (v) => !!v || "Dit veld is verplicht!"
      ],
      cargoWeightRules: [(v) => !!v || "Dit veld is verplicht!"],
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.$emit("submitCargoForm");
      }
    },
  },
};
</script>

<style>
</style>