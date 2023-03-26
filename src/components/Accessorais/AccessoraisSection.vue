<template>
  <v-container>
     <v-row
      align="center"
      justify="center"
    >
    <v-col cols="12" lg="6" sm="12">
      <h1 class="text-center text-black text-h4 my-4">.｡.Trending Products .｡.</h1>
      <p class="text-center text-black">_____ .｡. o ★ o ★ .｡. _____</p>
      </v-col>
    </v-row>
  </v-container>

  <EarringSection />
  <NecklaceSection />
  <RingSection />
  
</template>

<script setup>
import EarringSection from './EarringSection.vue'
import NecklaceSection from './NecklaceSection.vue'
import RingSection from './RingSection.vue'

</script>

<style>

</style>
