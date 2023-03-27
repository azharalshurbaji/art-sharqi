<template>
  <v-container>
    <v-row>
      <v-col cols="12" lg="12" sm="12" >
        <div v-if="CartStore.itemsCount != 0">
          <h1 class="text-center text-h3">Your Cart</h1>
          <p class="text-center mb-10 text-black text-subtitle-2">
            _____ .｡. o ★ o ★ .｡. _____
          </p>
        </div>
      <div
          v-if="CartStore.itemsCount === 0"
          class="mt-32 grid place-items-center"
        >
          <h2 class="font-bold text-h3 my-16 text-center">Your Cart Is Empty</h2>
          <h2 class="font-bold text-h3 text-center">¯\_(ツ)_/¯</h2>
        
      </div>
        <h1 v-if="CartStore.itemsCount != 0">
          Products Count:
          <span class="text-h4">({{ itemsCount }})</span>
        </h1>

        <!-- <h1>Total Price:</h1>
        <h3>{{ totalPrice }}</h3> -->
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="item in items" :key="item" cols="12" lg="6" sm="12" xs="12">
        <div class="d-lg-flex align-center justify-space-between border">
          <v-col cols="12" lg="4" sm="3" align="center" class="ma-auto">
            <!-- <v-sheet class="text-center my-4">
              <span class="mr-2 text-h6 text-grey-darken-1">One product Price:</span>
              <span class="text-error font-weight-bold text-h5">
                $•{{ item.price }}
              </span>
            </v-sheet> -->

            <!-- :src="'/src/assets/ring/' + item.src + '.png'"  -->
            <v-img 
              :src="item.src" 
              :lazy-src="item.src"
              width="300" 
              class="border" 
            />
          </v-col>
          <v-col cols="12" lg="8" sm="12">
            <v-sheet class="text-center text-grey-darken-1 my-5">
              {{ item.title }}
            </v-sheet>
                          <!--* Buy Naw Form -->
            <div class="d-sm-flex justify-space-between">
              <v-form @submit.prevent="submit">
                <v-row justify="center" align="center">
                  <v-col cols="12" lg="12" sm="12">
                    <v-dialog v-model="dialog" persistent ref="form">
                      <template v-slot:activator="{ props }">
                        <v-btn
                          v-bind="props"
                          title="Buy Naw"
                          color="brown"
                          icon="mdi-shopping"
                          @click="accessoriesDetails"
                        />
                      </template>


                      <v-card>
                        <v-card-title class="text-center my-5">
                          <span class="text-h4 myFont text-orange"
                            >… Your order is at your door …</span
                          >
                          <v-divider />
                        </v-card-title>
                        <v-card-text>
                          <v-row>
                            <v-col cols="auto">
                              <h1 class="text-h6 font-weight-bold">
                                your Full name:
                              </h1>
                            </v-col>
                          </v-row>
                          <v-row>
                            <v-col cols="12" lg="6" sm="12">
                              <v-text-field
                                ref="firstName"
                                prepend-inner-icon="mdi-account"
                                v-model="firstName"
                                :rules="[
                                  () => !!firstName || 'This field is required',
                                ]"
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
                                :rules="[
                                  () => !!lastName || 'This field is required',
                                ]"
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
                              <h1 class="text-h6 font-weight-bold">
                                your Info contact:
                              </h1>
                            </v-col>
                            <v-col cols="12" lg="12" sm="12">
                              <v-text-field
                                ref="email"
                                prepend-inner-icon="mdi-email"
                                v-model="email"
                                :rules="[
                                  () => !!email || 'This field is required',
                                ]"
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
                                :rules="[
                                  () => !!zip || 'This field is required',
                                ]"
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
                            <h1 class="text-h6 font-weight-bold">
                              your Address:
                            </h1>
                          </v-col>
                          <v-row>
                            <v-col cols="12" lg="12" sm="12">
                              <v-text-field
                                ref="city"
                                prepend-inner-icon="mdi-google-maps"
                                v-model="city"
                                :rules="[
                                  () => !!city || 'This field is required',
                                  addressCheck,
                                ]"
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
                                :rules="[
                                  () => !!state || 'This field is required',
                                ]"
                                label="State - Region"
                                required
                                variant="outlined"
                                color="orange"
                                placeholder="TX"
                              ></v-text-field>
                            </v-col>
                            <v-col cols="auto">
                              <h1 class="text-h6 font-weight-bold">
                                your Order:
                              </h1>
                            </v-col>
                            <v-col cols="12" lg="12" sm="12">
                              <v-text-field
                                label="Name Product"
                                focused
                                prepend-inner-icon="mdi-order"
                                color="orange-darken-3"
                                variant="outlined"
                                bg-color="white"
                                required
                              >
                                {{ item.title }}
                              </v-text-field>
                            </v-col>

                            <v-col cols="12" lg="3" sm="4">
                              <v-text-field
                                label="Total Price"
                                focused
                                prepend-inner-icon="mdi-hand-coin"
                                color="orange-darken-3"
                                variant="outlined"
                                bg-color="white"
                                required
                              >
                                <span class="font-weight-bold">
                                  $• {{ CartStore.productCounter * item.price }}
                                </span>
                              </v-text-field>
                              <v-img width="200" :src="item.src" />
                            </v-col>
                            <v-col cols="12" lg="3" sm="4">
                              <v-text-field
                                label="Quantity"
                                focused
                                prepend-inner-icon="mdi-count"
                                color="orange-darken-3"
                                variant="outlined"
                                bg-color="white"
                                required
                              >
                                <span class="font-weight-bold">
                                  {{ CartStore.productCounter }}
                                </span>
                              </v-text-field>
                            </v-col>
                          </v-row>
                        </v-card-text>
                        <v-divider class="mt-12"></v-divider>
                        <v-card-actions>
                          <v-btn variant="text" @click="dialog = false">
                            Cancel
                          </v-btn>
                          <v-spacer></v-spacer>
                          <v-slide-x-reverse-transition>
                            <v-tooltip v-if="formHasErrors" location="left">
                              <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                  icon
                                  class="my-0"
                                  v-bind="attrs"
                                  @click="resetForm"
                                  v-on="on"
                                >
                                  <v-icon>mdi-refresh</v-icon>
                                </v-btn>
                              </template>
                              <span>Refresh form</span>
                            </v-tooltip>
                          </v-slide-x-reverse-transition>
                          <div class="text-center">
                            <v-btn color="primary" variant="text">
                              Send your Order
                              <v-dialog
                                v-if="!formHasErrors"
                                v-model="dialogSubmited"
                                activator="parent"
                              >
                                <v-card align="center">
                                  <span class="text-h4 ma-3 myFont"
                                    >… Your order is at your door …</span>
                                  <v-divider />

                                  <v-card-text class="text-h1 text-orange-darken-2 ma-10">
                                    ✔
                                  </v-card-text>
                                  <h1 class="ma-5 text-orange-darken-3">
                                    Thanks For You..
                                  </h1>
                                  <v-card-actions>
                                    <v-btn
                                      variant="outlined"
                                      color="orange"
                                      block
                                      to="/"
                                      @click="dialogSubmited = false"
                                      >Close</v-btn
                                    >
                                  </v-card-actions>
                                </v-card>
                              </v-dialog>
                            </v-btn>
                          </div>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                  </v-col>
                </v-row>
              </v-form>

              <ProductQuantity />
              <v-btn
                @click="removeFromCart(i)"
                title="Delete"
                color="red-lighten-1"
                variant="outlined"
                icon="mdi-delete"
                class="mx-2"
              />
            </div>
            <v-divider />
            <v-sheet class="text-center my-4">
              <h1 class="mr-2 text-h6 text-grey-darken-1">
                price product Total:
              </h1>
              <h3 class="text-error">
                $•{{ CartStore.productCounter * item.price }}
              </h3>
            </v-sheet>
          </v-col>
        </div>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" lg="12" sm="12">
        <v-sheet align="center">
          <v-btn
            :disabled="CartStore.itemsCount < 2"
            class="mt-10"
            color="red"
            @click="resetCart"
          >
            <v-icon>mdi-opened-cart</v-icon>
            Empty your Cart
          </v-btn>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { useCartStore } from "@/store/cart.js";
import Accessorais from "@/store/Accessorais.js";
import { mapState, mapActions, mapStores } from "pinia";
import ProductQuantity from "@/components/ProductQuantity.vue";
// import Accessorais from '@/store/Accessorais';

export default {
  components: {
    ProductQuantity,
  },

  data: () => ({
    dialog: false,
    dialogSubmited: false,

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
    ...mapState(useCartStore, ["items", "itemsCount", "resetCart"]),
    ...mapStores(useCartStore),
    ...mapState(Accessorais, ["accessoriesDetails"]),

    totalPrice() {
      return this.items.price * this.items.price;
    },

    price() {
      return this.items.price;
    },
    form() {
      return {
        name: this.name,
        email: this.email,
        city: this.city,
        state: this.state,
        zip: this.zip,
      };
    },
  },

  watch: {
    name() {
      this.errorMessages = "";
    },
  },

  methods: {
    ...mapActions(useCartStore, ["removeFromCart"]),
    
    submit() {
      this.formHasErrors = false;

      Object.keys(this.form).forEach((f) => {
        if (!this.form[f]) {
          this.formHasErrors = true;
          this.dialogSubmited = false;
        // this.$refs[f].validate(true);
        } else {
          this.dialogSubmited = true; 

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
};
</script>

<style>
</style>