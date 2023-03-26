<template>
  <v-container>

    <v-row justify="center" align="center">
      <v-col cols="12" lg="6" sm="12">
      <h1 class="text-center text-h3">OverView</h1>
          <p class="text-center text-black text-subtitle-2">
            _____ .｡. o ★ o ★ .｡. _____
          </p>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="12" lg="6" sm="12">
        <v-sheet border class="px-3">
          <swiper
          :effect="'coverflow'"
          :grab-cursor="true"
          :centered-slides="true"
          :slides-per-view="'auto'"
          :coverflow-effect="{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }"
          :loop="true"
          :pagination="true"
          :modules="modules"
          class="mySwiper"
          >
          <swiper-slide>
            <v-img
            :src="'/src/assets/art-board/'+ ArtBoardDetails.thumbnail + '.jpg'"
            :lazy-src="'/src/assets/art-board/'+ ArtBoardDetails.thumbnail + '.jpg'"
          />
          </swiper-slide>
          <swiper-slide>
            <v-img
              :src="'/src/assets/art-board/'+ ArtBoardDetails.images[0] + '.jpg'"
              :lazy-src="'/src/assets/art-board/'+ ArtBoardDetails.images[0] + '.jpg'"
            />
          </swiper-slide>
            <swiper-slide>
              <v-img
                :src="'/src/assets/art-board/'+ ArtBoardDetails.images[1] + '.jpg'"
                :lazy-src="'/src/assets/art-board/'+ ArtBoardDetails.images[1] + '.jpg'"
              />
            </swiper-slide>
          <swiper-slide>
            <v-img
              :src="'/src/assets/art-board/'+ ArtBoardDetails.images[2] + '.jpg'"
              :lazy-src="'/src/assets/art-board/'+ ArtBoardDetails.images[2] + '.jpg'"
            />
          </swiper-slide>
          
          </swiper>
        </v-sheet>
        <!-- <v-img 
          cover
          :src="ArtBoardDetails.thumbnail"
          width="300"
          class="ma-10 board_border"
        /> -->
        <!-- <div>Hello Art Board</div> -->
        <h1 class="text-center text-black">{{ ArtBoardDetails.title }} </h1>
          <p class="text-center text-black text-subtitle-2">
              _____ .｡.  .｡. _____
          </p>
      </v-col>
    </v-row>

          <!-- * Avilibale Measuring Section -->
    <v-row justify="center" align="center">
      <v-col cols="12" lg="6" sm="12">
        <h1 class="text-h5 font-weight-bold mt-5">⨳ Avilibale Measuring:</h1>
      </v-col>
    </v-row>
      
    <v-row justify="center" align="center">
      <v-col cols="12" lg="4" sm="12">
        <v-card flat>
          <v-chip-group
            v-model="tab"
            selected-class=" "
            mandatory
          >
          <v-chip value="one" variant="outlined" color="orange">
            <span class="text-center ">
            {{ ArtBoardDetails.measuring.size1 }} 
          </span>
          </v-chip>
          
          <v-chip value="two" variant="outlined" color="orange">
            <span class="text-center">
            {{ ArtBoardDetails.measuring.size2 }} 
          </span>
          </v-chip>
          
          <v-chip value="three" variant="outlined" color="orange">
            <span class="text-center ">
            {{ ArtBoardDetails.measuring.size3 }} 
          </span>
          </v-chip>
          
            <!-- <v-card-text class="bg-red">
              <v-window v-model="tab">
                <v-window-item color="orange" value="one">
                  consectetur ipsum dolor sit amet consectetur adipisicing elit.
                  Vitae, commodi.
                </v-window-item>

                <v-window-item value="two">
                  exercitationem ipsum dolor sit amet consectetur adipisicing
                  elit. Voluptatibus sed ipsam ad autem aliquid facere
                  exercitationem unde illo cumque atque!
                </v-window-item>

                <v-window-item value="three">
                  Reiciendis dolor, sit amet consectetur adipisicing elit.
                  Assumenda ad vitae delectus, fuga maiores maxime vel tempora.
                  Recusandae aspernatur in, odit pariatur vitae nisi molestias
                  repellendus impedit rem. Reiciendis, dolores?
                </v-window-item>
              </v-window>
            </v-card-text> -->
          </v-chip-group>
        </v-card>
      </v-col>
    </v-row>

          <!-- * Description Section -->
     <v-row justify="center" align="center">
      <v-col cols="12" lg="6" sm="12">
        <h1 class="text-h5 font-weight-bold mt-5">⨳ Description Board:</h1>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="12" lg="6" sm="12">
        <p class="text-center ">{{ ArtBoardDetails.description }} </p>
      </v-col>
    </v-row>
  
          <!-- * Row Button -->
    <v-row justify="center" align="center">
      <v-col cols="12" lg="8" sm="12">
        <div class="d-sm-flex justify-space-between my-5" >
          <v-btn
            block
            rounded
            append-icon="mdi-arrow-right"
            color="brown"
          >
            Buy Naw
          </v-btn>
        </div>
      </v-col>
    </v-row>
    
  </v-container>
  <FooterSection />
</template>

<script>
import artBoards from '@/store/artBoards.js';
// import Accessorais from '@/store/Accessorais.js';
import { mapState } from 'pinia'
import FooterSection from '@/components/FooterSection.vue'

import { Swiper, SwiperSlide } from "swiper/vue";
  
  // Import Swiper styles
  import "swiper/css";
  
  import "swiper/css/effect-coverflow";
  import "swiper/css/pagination";
  
//   import "./style.css";
  
  // import required modules
  import { EffectCoverflow, Pagination } from "swiper";

  
  export default {
    components: {
      Swiper,
      SwiperSlide,
      FooterSection,
    },
    setup() {
      return {
        modules: [EffectCoverflow, Pagination],
      };
    },
    
  computed: {
    /** resolve problem Cannot Read property '0' of Undefined */
    thumbnail(){
      return this.ArtBoardDetails.thumbnail
    },
    images(){
      return this.ArtBoardDetails.images[0],
        this.ArtBoardDetails.images[1],
        this.ArtBoardDetails.images[2]
    },
    measuring(){
      return this.ArtBoardDetails.size1,
        this.ArtBoardDetails.size2,
        this.ArtBoardDetails.size3
    },

    ...mapState(artBoards, ['ArtBoardDetails']),
  },
  
  data:() => ({
    selection: '',
    tab: '',
  }),

  methods: {
    // ...mapActions(artBoards, ['ArtBoardDetails']),
    // ...mapActions(Accessorais , ["ArtBoardDetails"]),

  },

}
</script>

<style>

#app { height: 100% }
html,
body {
  position: relative;
  height: 100%;
}

/* body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
} */

.swiper {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 300px;
  height: 300px;
}

.swiper-slide img {
  display: block;
  width: 100%;
}


</style>