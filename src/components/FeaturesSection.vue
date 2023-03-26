<template>
  <v-container>
    <v-row align="center" justify="center" class="bg-grey-darken-4 py-9">
      <v-col cols="12" lg="4" sm="6" align="center"> 
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <div class="img_border">
          <v-img 
            src="/src/assets/f-1.jpg" 
            lazy-src="/src/assets/f-1.jpg" 
            width="300" 
            class="ma-5"
          />
        </div>
        </div>
      </v-col>
      <v-col cols="12" lg="5" sm="6">
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <h1 class="text-h4">praesentium sitamet adipisicing elit</h1>
          <p class="my-3">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
            cumque commodi ducimus voluptatibus voluptas assumenda exercitationem,
            maxime aliquam vel quibusdam repudiandae reprehenderit neque
            consequatur sequi obcaecati amet, eius autem consectetur.
          </p>
          <v-btn> Learn more </v-btn>
        </div>
      </v-col>
    </v-row>

    <v-row align="center" justify="center" >
      <v-col cols="12" lg="5" sm="6">
        <div
          
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <h1 class="text-h4 text-brown-darken-4">praesentium sitamet adipisicing elit</h1>
          <p class="my-3">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
            cumque commodi ducimus voluptatibus voluptas assumenda exercitationem,
            maxime aliquam vel quibusdam repudiandae reprehenderit neque
            consequatur sequi obcaecati amet, eius autem consectetur.
          </p>
          <v-btn color="brown-darken-4" to="/boards"> Visite naw  </v-btn>
        </div>
      </v-col>
      <v-col 
        cols="12" 
        lg="3" 
        sm="6" 
        align="center"
        class="pl-7"
      >
        <div 
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <div class="img_border_right">
          <v-img 
            src="/src/assets/f-2.jpg" 
            lazy-src="/src/assets/f-2.jpg" 
            width="300" 
            class="ml-n16 mt-4"
          />
        </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  
};
</script>

<style>

.parent {
  position: relative;
}

.img_border
{
    border: 2px solid #d1c9c2;
  box-shadow: 0 0 3px #58483a;
  width: 275px;
  height: 420px;
  /* position: absolute;
      bottom: 70px;
      right: 100px; */
}
.img_border_right
{
    width: 300px;
    height: 330px;
    border: 2px solid #5f4d3c;
    box-shadow: 0 0 3px #58483a;
    /* position: absolute;
        bottom: 10px;
        left: 100px;     */
}

</style>