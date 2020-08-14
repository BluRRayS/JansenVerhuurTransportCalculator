<template>
  <div>
    <v-card color="grey lighten-3" class="mb-12">
      <v-container>
        <v-form ref="form" enctype="multipart/form-data">
          <v-text-field
            v-model="name"
            :rules="[rules.required]"
            label="Te vervoeren artikel"
            required
            clearable
            counter
            maxlength="50"
            type="text"
          ></v-text-field>
          <v-text-field
            v-model="weight"
            :rules="[rules.required, rules.max(weight,30000,`kg`)]"
            label="Gewicht"
            required
            clearable
            type="number"
            suffix="KG"
          ></v-text-field>

          <v-divider></v-divider>
          <v-subheader>Afmetingen</v-subheader>

          <v-text-field
            v-model="height"
            :rules="[rules.required,rules.max(height,3,`meter`)]"
            label="Hoogte"
            required
            clearable
            type="number"
            suffix="meter"
          ></v-text-field>

          <v-text-field
            v-model="width"
            :rules="[rules.required, rules.max(width,2.8,`meter`)]"
            label="Breedte"
            required
            clearable
            type="number"
            suffix="meter"
          ></v-text-field>

          <v-text-field
            v-model="length"
            :rules="[rules.required, rules.max(length,12,`meter`)]"
            label="Lengte"
            required
            clearable
            type="number"
            suffix="meter"
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
      name:"",
      weight:0,
      height:0,
      width:0,
      length:0,
      files: undefined,

      rules: {
       required: value => !!value || 'Dit veld is verplicht!',
       max(value,max, unit){ return value => value <= max || `Mag niet meer zijn dan  ${max} ${unit} !`},
      //  loanMax: value => value <= 50000 || 'Max should not be above £50,000',
     }
     
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        var cargo = {
          name: this.name,
          weight: this.weight,
          size: {
            height: this.height,
            width: this.width,
            length: this.length
          },
          files: this.files
        }
        this.$emit("submitCargoForm",cargo);
      }
    },
  },
};
</script>

<style>
</style>