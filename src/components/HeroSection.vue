<template>
  <v-container fluid class="pb-6">
    <v-row
      align="center"
      justify="center"
      class="background-hero"
    >
      
      <v-col cols="12" lg="4" sm="6" offset="1">
        <div
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <h1 class="text-uppercase txt_hero">It's Gift For Someone Special ...</h1>
          <p class="text-subtitle-2 font-weight-light text-black my-3">
            Looked up one of the more obscure latin words, consectetur, from a Lorem ipsum passage, and going through the cites of the word.
          </p>
        </div>
        <div
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <v-btn
            color="brown-darken-4"
            class="mx-2"
          >
            Shop naw
          </v-btn>
          <v-btn
            variant="outlined"
            color="brown-darken-4"
          >
            View more
          </v-btn>
          </div>
      </v-col>
      <v-col cols="12" lg="6" sm="5" xs="3">
        <div 
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          <v-img
              contain
              height="500"
              src="/src/assets/main/c-1.png"
              class="mt-n4"
            />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import aos from 'aos'

export default {
  mounted() {
      aos.init()
      
    },
}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Marcellus+SC&display=swap');

.txt_hero
{
  font-family: 'Marcellus SC', serif;
  font-size: 44px;
}

.background-hero
{
  background-image: url('/src/assets/main/klipartz.com (30).png'); background-position: right;
  background-size: cover;
}

</style>