<template>
  <v-container>
    <v-row>
      <v-col cols="12" lg="6" sm="12">
        <div
          data-aos="fade-right"
          data-aos-duration="2000"  
        >
          <h1 class="text-grey-darken-1 txt_subtitle my-4">
            <v-icon>mdi-cards-diamond</v-icon>
            Earring
            </h1>
        </div>
        </v-col>
    </v-row>
        <v-row
        align="center"
        justify="center"
        >
        <v-col 
          v-for="earring in earrings"
          :key="earring.id"
          cols="12"
          lg="4"
          sm="5"
          xs="3"
        >
            <v-card 
            flat
            height="auto"
            >
              <v-sheet class="mx-auto" align="center" border>
                <v-img 
                  :src="'/src/assets/earring/'+ earring.src + '.png'"
                  :lazy-src="'/src/assets/earring/'+ earring.src + '.png'"
                  width="300"
                />
                <!-- {{getPic(index)}} </v-img> -->
                <div
                    class="my-3 text-center"
                    cols="12"
                    lg="4"
                    xs="5"
                    sm="5"
                >
                    <v-sheet class="text-red-darken-1 text-h6">
                        <span class="mr-2 text-h6 text-grey-darken-1">Price:</span>
                        $•{{ earring.price }}
                    </v-sheet>
                        <v-divider class="mx-2 my-2" />
                    <v-sheet class="text-grey-darken-1">
                        {{ earring.title }}
                    </v-sheet>
                    <v-sheet align="center">
                      <v-btn
                        v-if="isLoggedIn"
                        icon="mdi-cart"
                        title="Add to Cart"
                        variant="outlined"
                        class="my-2"
                        color="brown-darken-3"
                        size="50"
                        @click="addToCartEarring(earring)"
                        />
                      <v-btn
                        v-if="isLoggedIn"
                        icon="mdi-shopping"
                        title="Buy Naw"
                        class="my-2 offset-3"
                        color="brown-darken-3"
                        size="50"
                        :to="{ name: 'buy-naw-details', params: { id: earring.id } }"
                        @click="accessoriesDetailsEarring(earring)"
                        />
                    </v-sheet>
                    </div>
                </v-sheet>
            </v-card>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Accessorais from '@/store/Accessorais.js';
import { mapActions, mapState } from 'pinia';
import { useCartStore } from '@/store/cart';
import user from '@/store/user';


export default {

    data:() => ({
      //^ /assets/earring/e-1.png
        earrings: [
        {
          id: "1e",
          src: "e-1",
          title: "sit amet consectetur adipisicing elit.",
          price: "900"
        },
        {
          id: "2e",
          src: "e-2",
          title: "Hello sit amet consectetur adipisicing elit.",
          price: "800"
        },
        {
          id: "3e",
          src: "e-3",
          title: "sit amet consectetur adipisicing elit.",
          price: "700"
        },
        {
          id: "4e",
          src: "e-4",
          title: "sit amet consectetur adipisicing elit.",
          price: "600"
        },
        {
          id: "5e",
          src: "e-5",
          title: "sit amet consectetur adipisicing elit.",
          price: "500"
        },
        {
          id: "6e",
          src: "e-6",
          title: "sit amet consectetur adipisicing elit.",
          price: "400"
        }
        ],
        
    }),
    created() {
        this.loadEarrings();
    },
  computed: {
    ...mapState(user, ["isLoggedIn" , "user"]),
  },

  methods: {

    // getPic(index)
    // {
    //   // return '/src/assets/earring/' + this.earrings[index]  + 'e-6.png';
    //   return '/src/assets/earring/e-' + [index+1] + '.png';
    //   // return require(`/src/assets/earring/${}.png`)
    // },

    loadEarrings() {
      // AccessoraisJSON/earrings.json
      this.axios.get("/AccessoraisJSON/earrings.json")
        .then((response) => {
          this.earrings = response.data.earrings;
          // console.log(response);
        })
        .catch((error) => {
          if (error) {
            // alert("Loading failed Earrings API");
            console.log("Loading failed Earrings API");
          }
        });
    },

    

    ...mapActions(Accessorais , ["accessoriesDetailsEarring"]),
    ...mapActions(useCartStore, ["addToCartEarring"]),
    },

}
</script>

<style>

</style>