<template>
  <div>
    <v-card color="grey lighten-3" class="mb-12" >
      <v-container>
        <v-form ref="form">
          <v-slider
            v-model="loadingTime"
            label="Laad tijd"
            step="1"
            thumb-label="always"
            persistent-hint
            hint="In minuten"
            min="20"
            class="pt-10"
          ></v-slider>
          <v-slider
            v-model="unloadingTime"
            label="Los tijd"
            step="1"
            thumb-label="always"
            persistent-hint
            hint="In minuten"
            min="20"
            class="pt-10"
          ></v-slider>
          <p class="grey--text">Wij tellen een minimum laad en los tijd van 20 minuten.</p>
        </v-form>
      </v-container>
    </v-card>
    <v-btn color="red" dark @click="submit">Volgende</v-btn>
  </div>
</template>

<script>
export default {
  name: "TimeForm",
  data() {
    return {
      loadingTime: 20,
      unloadingTime: 20,
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        var loadingTimes = {
          loadingTime: this.loadingTime,
          unloadingTime: this.unloadingTime
        };
        this.$emit("submitTimeForm",loadingTimes);
      }
    },
  },
};
</script>

<style>
</style>