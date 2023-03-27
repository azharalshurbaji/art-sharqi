<template>
  <v-container>
    <v-row>
      <v-col cols="12" lg="6" sm="12">
        <div
          data-aos="fade-right"
          data-aos-duration="3000"
        >
          <h1 class="text-grey-darken-1 txt_subtitle my-4">
            <v-icon>mdi-cards-diamond</v-icon>
            Rings
            </h1>
        </div>
        </v-col>
    </v-row>
        <v-row
        align="center"
        justify="center"
        >
        <v-col 
        v-for="ring in rings"
        :key="ring"
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
                <!-- '/src/assets/ring/'+ ring.src + '.png' -->
                <v-img 
                  :src="ring.src"
                  :lazy-src="ring.src"
                  width="300"
                />
              <div
                  class="my-3 text-center"
                  cols="12"
                  lg="4"
                  xs="5"
                  sm="5"
              >
                <v-sheet class="text-red-darken-1 text-h6">
                  <span class="mr-2 text-h6 text-grey-darken-1">Price:</span>
                    $•{{ ring.price }}
                </v-sheet>
                    <v-divider class="mx-2 my-2" />
                <v-sheet class="text-grey-darken-1">
                    {{ ring.title }}
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
                  @click="addToCartRing(ring)"
                  />
                  <v-btn
                  v-if="isLoggedIn"
                  icon="mdi-shopping"
                  title="Buy Naw"
                  class="my-2 offset-3"
                  color="brown-darken-3"
                  size="50"
                  :to="{ name: 'buy-naw-details', params: { id: ring.id } }"
                  @click="accessoriesDetailsRing(ring)"
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
        rings: [
          {
            id: "1r",
            src: "https://azharalshurbaji.github.io/diamond-image/art-sharqi/ring/r-1.png",
            title: "sit amet consectetur adipisicing elit.",
            price: "900"
          },
          {
            id: "2r",
            src: "https://azharalshurbaji.github.io/diamond-image/art-sharqi/ring/r-2.png",
            title: "sit amet consectetur adipisicing elit.",
            price: "800"
          },
          {
            id: "3r",
            src: "https://azharalshurbaji.github.io/diamond-image/art-sharqi/ring/r-3.png",
            title: "sit amet consectetur adipisicing elit.",
            price: "700"
          },
          {
            id: "4r",
            src: "https://azharalshurbaji.github.io/diamond-image/art-sharqi/ring/r-4.png",
            title: "sit amet consectetur adipisicing elit.",
            price: "600"
          },
          {
            id: "5r",
            src: "https://azharalshurbaji.github.io/diamond-image/art-sharqi/ring/r-5.png",
            title: "sit amet consectetur adipisicing elit.",
            price: "500"
          },
          {
            id: "6r",
            src: "https://azharalshurbaji.github.io/diamond-image/art-sharqi/ring/r-6.png",
            title: "sit amet consectetur adipisicing elit.",
            price: "500"
          }
        ],
        
    }),
    created() {
        this.loadRings();
    },
  computed: {
    ...mapState(user, ["isLoggedIn" , "user"]),
  },
  methods: {
    loadRings() {
      this.axios.get("/AccessoraisJSON/rings.json")
        .then((response) => {
          this.rings = response.data.rings;
          // console.log(response);
        })
        .catch((error) => {
          if (error) {
            // alert("Loading failed Rings API");
            console.log("Loading failed Earrings API");
          }
        });
    },

    ...mapActions(Accessorais , ["accessoriesDetailsRing"]),
    ...mapActions(useCartStore, ["addToCartRing"]),
    },

}
</script>

<style>

</style>