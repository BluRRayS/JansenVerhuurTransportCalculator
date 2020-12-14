<template>
  <div>
    <v-card color="grey lighten-3" class="mb-12">
      <v-container>
        <v-form ref="form" enctype="multipart/form-data">
          <v-text-field
            v-model="type"
            :rules="[rules.required]"
            label="Type"
            hint="Bijvoorbeeld: hoogwerker, minigraver, etc."
            required
            counter
            maxlength="50"
            type="text"
            class="px-md-2"
          ></v-text-field>
          <v-text-field
            v-model="name"
            :rules="[rules.required]"
            label="Te vervoeren artikel"
            required
            counter
            maxlength="50"
            type="text"
            class="px-md-2"
          ></v-text-field>
          <v-text-field
            v-model="brand"
            label="Merk"
            counter
            maxlength="50"
            type="text"
            class="px-md-2"
          ></v-text-field>
          <v-text-field
            v-model="model"
            label="Model"
            counter
            maxlength="50"
            type="text"
            class="px-md-2"
          ></v-text-field>
          <v-text-field
            v-model="weight"
            :rules="[rules.required,rules.maxWeight]"
            label="Gewicht"
            required
            type="number"
            suffix="KG"         
            class="px-md-2"
          ></v-text-field>
          <v-checkbox
            v-model="difficultTransport"
            class="mx-2"
            label="Artikel is lastig transporteerbaar"
            hint="Werkt de motor niet meer goed, wielen zijn niet in goede staat, etc."
            persistent-hint
          ></v-checkbox>
          <v-divider></v-divider>

          <v-text-field
            v-model="height"
            :rules="[rules.required]"
            label="Hoogte"
            required
            type="number"
            suffix="meter"
            class="px-md-2 pt-10"
          ></v-text-field>

          <v-text-field
            v-model="width"
            :rules="[rules.required]"
            label="Breedte"
            required
            type="number"
            suffix="meter"
            class="px-md-2"
          ></v-text-field>

          <v-text-field
            v-model="length"
            :rules="[rules.required]"
            label="Lengte"
            required
            type="number"
            suffix="meter"
            class="px-md-2"
          ></v-text-field>

          <v-file-input
            v-model="files"
            accept="image/*"
            show-size
            chips
            multiple
            counter
            prepend-icon="mdi-camera"
            label="Afbeeldingen toevoegen"
            class="px-md-2"
          ></v-file-input>
        </v-form>
      </v-container>
    </v-card>
    <v-btn color="red" dark @click="submit">Volgende</v-btn>
  </div>
</template>

<script>
export default {
  name: "CargoForm",
  data() {
    return {
      name: "",
      type: "",
      model: "",
      brand: "",
      weight: 1,
      height: 1,
      width: 1,
      length: 1,
      difficultTransport: false,
      files: undefined,
      extremeWeight:false,
      extremeSize:false,

      rules: {
        required: (value) => !!value || "Dit veld is verplicht!",
        maxWeight: (value) =>  value <= 20000 || `Mag niet meer zijn dan 20.000kg !`
        //  loanMax: value => value <= 50000 || 'Max should not be above £50,000',
      },
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        if(this.weight > 20000)
        {
          this.extremeWeight = true;
        }
        if(this.length > 12 || this.width > 2.8 || this.height > 3 )
        {
          this.extremeSize = true;
        }

        var cargo = {
          type: this.type,
          name: this.name,
          model: this.model,
          brand: this.brand,
          weight: this.weight,
          difficultTransport: this.difficultTransport,
          size: {
            height: this.height,
            width: this.width,
            length: this.length,
          },
          files: this.files,
          extremeWeight: this.extremeWeight,
          extremeSize: this.extremeSize
        };
        this.$emit("submitCargoForm", cargo);
      }
    },
  },
};
</script>

<style>
</style>