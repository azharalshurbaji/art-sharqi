<template>
  <v-container>
    <v-row>
      <v-col cols="12" lg="6" sm="12">
        <div 
          data-aos="fade-right"
          data-aos-duration="2500"
        >
          <h1 class="text-grey-darken-1 txt_subtitle my-4">
            <v-icon>mdi-cards-diamond</v-icon>
            Necklace
            </h1>
        </div>
        </v-col>
    </v-row>
        <v-row
        align="center"
        justify="center"
        >
        <v-col 
        v-for="necklace in necklaces"
        :key="necklace"
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
                  :src="necklace.src"
                  :lazy-src="necklace.src"
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
                        $•{{ necklace.price }}
                    </v-sheet>
                        <v-divider class="mx-2 my-2" />
                    <v-sheet class="text-grey-darken-1">
                        {{ necklace.title }}
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
                        @click="addToCartNecklace(necklace)"
                        />
                        <v-btn
                        v-if="isLoggedIn"
                        icon="mdi-shopping"
                        title="Buy Naw"
                        class="my-2 offset-3"
                        color="brown-darken-3"
                        size="50"
                        :to="{ name: 'buy-naw-details', params: { id: necklace.id } }"
                        @click="accessoriesDetailsNecklace(necklace)"
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
import aos from 'aos';

export default {

  mounted() {
      aos.init(),
      aos.refresh()
  },

    data:() => ({
        necklaces: [
        {
          id: "1n",
          src: "https://azharalshurbaji.github.io/diamond-image/art-sharqi/necklace/n-3.png",
          title: "sit amet consectetur adipisicing elit.",
          price: "900"
        },
        {
          id: "2n",
          src: "https://azharalshurbaji.github.io/diamond-image/art-sharqi/necklace/n-2.png",
          title: "sit amet consectetur adipisicing elit.",
          price: "800"
        },
        {
          id: "3n",
          src: "https://azharalshurbaji.github.io/diamond-image/art-sharqi/necklace/n-4.png",
          title: "sit amet consectetur adipisicing elit.",
          price: "700"
        },
        {
          id: "4n",
          src: "https://azharalshurbaji.github.io/diamond-image/art-sharqi/necklace/n-4.png",
          title: "sit amet consectetur adipisicing elit.",
          price: "600"
        },
        {
          id: "5n",
          src: "https://azharalshurbaji.github.io/diamond-image/art-sharqi/necklace/n-5.png",
          title: "sit amet consectetur adipisicing elit.",
          price: "500"
        },
        {
          id: "6n",
          src: "https://azharalshurbaji.github.io/diamond-image/art-sharqi/necklace/n-6.png",
          title: "sit amet consectetur adipisicing elit.",
          price: "400"
        }
        ],
        
    }),
    created() {
        this.loadNecklaces();
    },
  computed: {
    ...mapState(user, ["isLoggedIn" , "user"]),
  },
  methods: {
    loadNecklaces() {
      this.axios.get("/AccessoraisJSON/necklaces.json")
        .then((response) => {
          this.necklaces = response.data.necklaces;
          // console.log(response);
        })
        .catch((error) => {
          if (error) {
            // alert("Loading failed Necklace API");
            console.log("Loading failed Earrings API");
          }
        });
    },

    ...mapActions(Accessorais , ["accessoriesDetailsNecklace"]),
    ...mapActions(useCartStore, ["addToCartNecklace" ]),
    },

}
</script>

<style>

</style>