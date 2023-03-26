<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12" lg="10" sm="12">
        <!-- <h1 class="text-center text-black">{{ accessoriesDetails.title }}</h1> -->

        <v-form @submit.prevent="submit">
          <v-row justify="center" align="center">
            <v-col cols="12" lg="12" sm="12">
              <v-card ref="form">
                <v-card-title class="text-center my-5">
                  <span class="text-h4 myFont text-orange"
                    >… Your order is at your door …</span
                  >
                  <v-divider />
                </v-card-title>
                <v-card-text>
                <v-row>
                  <v-col cols="auto">
                    <h1 class="text-h6 font-weight-bold">your Full name:</h1>
                  </v-col>
                </v-row>
                  <v-row>
                    <v-col cols="12" lg="6" sm="12">
                      <v-text-field
                        ref="firstName"
                        prepend-inner-icon="mdi-account"
                        v-model="firstName"
                        :rules="[() => !!firstName || 'This field is required']"
                        :error-messages="errorMessages"
                        label="First Name"
                        variant="outlined"
                        color="orange"
                        placeholder="John Doe"
                        required
                        persistent-hint
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" lg="6" sm="12">
                      <v-text-field
                        ref="lastName"
                        prepend-inner-icon="mdi-account"
                        v-model="lastName"
                        :rules="[() => !!lastName || 'This field is required']"
                        :error-messages="errorMessages"
                        label="Last Name"
                        variant="outlined"
                        color="orange"
                        placeholder="John Doe"
                        required
                        persistent-hint
                      ></v-text-field>
                    </v-col>
                    
                    <v-col cols="auto">
                      <h1 class="text-h6 font-weight-bold">your Info contact:</h1>
                    </v-col>
                    <v-col cols="12" lg="12" sm="12">
                      <v-text-field
                        ref="email"
                        prepend-inner-icon="mdi-email"
                        v-model="email"
                        :rules="[() => !!email || 'This field is required']"
                        :error-messages="errorMessages"
                        label="Email"
                        variant="outlined"
                        color="orange"
                        placeholder="ex@gmail.com"
                        required
                        persistent-hint
                      ></v-text-field>

                      <v-text-field
                        ref="zip"
                        prepend-inner-icon="mdi-phone"
                        v-model="zip"
                        :rules="[() => !!zip || 'This field is required']"
                        label="Telephone"
                        type="tel"
                        required
                        variant="outlined"
                        color="orange"
                        placeholder=" +1 (79938) 333 - 444"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-col cols="auto">
                    <h1 class="text-h6 font-weight-bold">your Address:</h1>
                  </v-col>
                  <v-row>
                    <v-col cols="12" lg="12" sm="12">
                      <v-text-field
                        ref="city"
                        prepend-inner-icon="mdi-google-maps"
                        v-model="city"
                        :rules="[
                          () => !!city || 'This field is required']"
                        label="City"
                        variant="outlined"
                        color="orange"
                        placeholder="El Paso"
                        required
                      ></v-text-field>
                      <v-text-field
                        ref="state"
                        prepend-inner-icon="mdi-city"
                        v-model="state"
                        :rules="[() => !!state || 'This field is required']"
                        label="State - Region"
                        required
                        variant="outlined"
                        color="orange"
                        placeholder="TX"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-col cols="auto">
                    <h1 class="text-h6 font-weight-bold">your Order:</h1>
                  </v-col>
                  <v-row>
                    <v-col cols="12" lg="6" sm="12">
                      <v-text-field
                        label="Name Product"
                        focused
                        prepend-inner-icon="mdi-product"
                        color="orange-darken-3"
                        variant="outlined"
                        bg-color="white"
                        required
                      >
                        {{ accessoriesDetails.title }}
                      </v-text-field>
                    </v-col>

                    <v-col cols="12" lg="6" sm="12">
                      <v-text-field
                        label="Meal Price"
                        focused
                        prepend-inner-icon="mdi-hand-coin"
                        color="orange-darken-3"
                        variant="outlined"
                        bg-color="white"
                        required
                      >
                        $ • {{ accessoriesDetails.price }}
                      </v-text-field>
                    </v-col>
                  </v-row>
                  <v-row justify="center" align="center">
                    <v-col cols="12" lg="4" sm="4">
                      <v-sheet class="pa-3 ma-1">
                        <v-img 
                          :src="accessoriesDetails.src" 
                          class="border"
                        />
                      </v-sheet>
                    </v-col>
                  </v-row>
                </v-card-text>

                <v-divider class="mt-12"></v-divider>

                <v-col cols="auto"> 
                  <v-dialog 
                    transition="dialog-top-transition"
                    v-model="dialog"
                  >
                  <template v-slot:activator="{ props }">
                    <v-btn 
                        type="submit" 
                        v-bind="props" 
                        block 
                        class="my-5" 
                        color="brown"
                    >
                      Buy naw
                    </v-btn>
                  </template>
                  <template v-slot:default="{ isActive }">
                    <v-card width="600" class="pa-2" style="margin: 0 auto;">
                      <div class="box-border">
                        <v-card-text>
                          <div class="text-h2 text-center pa-12">
                              <v-icon
                                class="my-3 txt-outlined"
                                color="brown-lighten-5"
                              >
                                mdi-check-circle
                              </v-icon>
                              <div class="font-weight-bold txt-outlined">
                                Thanks For You..
                              </div>
                          </div>
                        </v-card-text>
                        <v-card-actions class="justify-center">
                          <v-btn
                            variant="text"
                            class="my-3"
                            to="/"
                            @click="isActive.value = false"
                          >
                            Close
                          </v-btn>
                      </v-card-actions>
                      </div>
                    </v-card>
                  </template>
                  </v-dialog>
                  </v-col>
              </v-card>
            </v-col>
          </v-row>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "pinia";
import Accessorais from "@/store/Accessorais.js";

export default {

  data: () => ({
    tab: null,
    dialog: false,

    errorMessages: "",
    firstName: null,
    lastName: null,
    email: null,
    address: null,
    city: null,
    state: null,
    zip: null,
    country: null,
    formHasErrors: false,
  }),

  computed: {
    ...mapState(Accessorais, ["accessoriesDetails"]),

    form() {
      return {
        name: this.name,
        email: this.email,
        city: this.city,
        state: this.state,
        zip: this.zip,
      };
    },
    src() {
      return this.accessoriesDetails.src;
    },
    title() {
      return this.accessoriesDetails.title;
    },
  },

  watch: {
    name() {
      this.errorMessages = "";
    },
  },

  methods: {
    submit() {
      this.formHasErrors = false;

      Object.keys(this.form).forEach((f) => {
        if (!this.form[f]) {
          this.formHasErrors = true;
          this.dialog = false;
        // this.$refs[f].validate(true);
        } else {
          
          this.dialog = true; 

          this.firstName = [];    /*  Empty Enter Fields */
          this.lastName = [];    /*  Empty Enter Fields */
          this.email = [];     /*  Empty Enter Fields */
          this.address = [];    /*  Empty Enter Fields */
          this.city = [];    /*  Empty Enter Fields */
          this.state = [];    /*  Empty Enter Fields */
          this.zip = [];    /*  Empty Enter Fields */
          this.country = [];    /*  Empty Enter Fields */
          
        }
      });

    },
  },
}
</script>

<style>
</style>