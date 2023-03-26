<template>
  <v-row >
    <v-col cols="12" lg="12" sm="122">

        <swiper
            :style="{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
            }"
            :speed="600"
            :parallax="true"
            :loop="true"
            :autoplay="{
              delay: 2500,
              disableOnInteraction: false,
            }"
            :pagination="{
            clickable: true,
            }"
            :navigation="true"
            :modules="modules"
            class="mySwiper"
        >
            <!-- slot="container-start" -->
            <!-- :style="{
                'background-image':
                'url(/img/ps-1.jpg)',
            }" -->
            <div
            class="parallax-bg offset-1 background-parallax"
            
            data-swiper-parallax="-15%" 
            ></div>
            <swiper-slide>
            <v-col lg="6" class="title text-h4 font-weight-bold" data-swiper-parallax="-300">
              Art Sharqi offers custom paintings for you or your loved ones:
            </v-col>
            <!-- <div class="subtitle" data-swiper-parallax="-200">Subtitle</div> -->
            <div class="text " data-swiper-parallax="-100">
                <p class="text-h5 offset-1">
                  1- Paint Art
                </p>
                <p class="text-h5 offset-1">
                  2- line panels
                </p>
            </div> </swiper-slide
            ><swiper-slide>
              <v-col lg="6" class="title text-h4 font-weight-bold" data-swiper-parallax="-300">
              Art Sharqi offers custom paintings for you or your loved ones:
            </v-col>
            <!-- <div class="title" data-swiper-parallax="-300">Slide 2</div> -->
            <!-- <div class="subtitle" data-swiper-parallax="-200">Subtitle</div> -->
            <div class="text" data-swiper-parallax="-100">
                <p class="text-h5 offset-1">
                  3- Drawing characters
                </p>
                <p class="text-h5 offset-1">
                  4- Quranic verses
                </p>
            </div> </swiper-slide
            ><swiper-slide>
              <v-col lg="6" class="title text-h4 font-weight-bold" data-swiper-parallax="-300">
              Art Sharqi offers custom paintings for you or your loved ones:
            </v-col>
            <!-- <div class="title" data-swiper-parallax="-300">Slide 3</div> -->
            <!-- <div class="subtitle" data-swiper-parallax="-200">Subtitle</div> -->
            <div class="text" data-swiper-parallax="-100">
                <p class="text-h5 offset-1">
                  5- phrases of poetry
                </p>
                <p class="text-h5 offset-1">
                  6- Digital, oily or lead
                </p>
            </div>
            </swiper-slide>
        </swiper>

    </v-col>
  </v-row>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Autoplay, Parallax, Pagination, Navigation } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [ Autoplay, Parallax, Pagination, Navigation],
    };
  },
};
</script>


<style scoped>

.background-parallax 
{
  background-image: url(/src/assets/ps-1.jpg);
}

#app { height: 100% }
html,
body {
  position: relative;
  height: 100%;
}

body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  /* margin: 0;
  padding: 0; */
}

.swiper {
  width: 100%;
  height: 100%;
  background: #000;
}

.swiper-slide {
  font-size: 18px;
  color: #fff;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 40px 60px;
}

.parallax-bg {
  position: absolute;
  left: 0;
  top: 0;
  width: 130%;
  height: 100%;
  -webkit-background-size: cover;
  background-size: cover;
  background-position: center;
  opacity: .3;
  /* background-color: linear-gradient(to top, #00000041); */
}

.swiper-slide .title {
  font-size: 41px;
  font-weight: 300;
}

.swiper-slide .subtitle {
  font-size: 21px;
}

.swiper-slide .text {
  font-size: 14px;
  max-width: 400px;
  line-height: 1.3;
}


</style>
