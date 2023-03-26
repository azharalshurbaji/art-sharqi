<template>
  <v-footer class="bg-brown-darken-3 py-10">
    <v-container>
      <v-row justify="space-between">
        <v-col cols="12" lg="2" sm="3">
          <p class="text-h5">
          <v-icon icon="mdi-drawing" />
            <strong>Art</strong>Sharqi
          </p>
          <p class="text-body-2 font-weight-light my-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, omnis doloremque beatae nihil id iusto!
          </p>
          <v-btn
            icon="mdi-facebook"
            href="https://www.facebook.com/Artsharqi"
            target="_blank"
            size="small"
            class="my-2"
            color="white"
            variant="outlined"
          />
          <v-btn
            icon="mdi-instagram"
            target="_blank"
            size="small"
            class="offset-1 my-2"
            color="white"
            variant="outlined"
          />
          <v-btn
            icon="mdi-pinterest"
            target="_blank"
            size="small"
            class="offset-1 my-2"
            color="white"
            variant="outlined"
          />
          <!-- <v-btn
            prepend-icon="mdi-phone"
            variant="text"
            size="x-large"
            class="mt-3 ml-n5"
            href="tel:+963 000-0000"
          >
            +963 000-0000
          </v-btn> -->
          <v-btn
            prepend-icon="mdi-phone"
            variant="text"
            size="x-large"
            class=" ml-n5"
            href="tel:+905 000 000 000"
          >
            +905 000-000-000
          </v-btn>
        </v-col>
        
        <v-col cols="12" lg="2" sm="3">
          <h1 class="text-h5 text-uppercase">
            shop
          </h1>
            <v-btn
            variant="text"
            >
            New in
            </v-btn>
              <br>
            <v-btn
            variant="text"
            >
            Blog
            </v-btn>
              <br>
            <v-btn
            variant="text"
            >
            Accessories
            </v-btn>
              <br>
            <v-btn
            variant="text"
            >
            Wood wall Art
            </v-btn>
              <br>
        </v-col>

        

        <v-col cols="12" lg="2" sm="3">
          <h1 class="text-h5 text-uppercase">
            Information
          </h1>
            <v-btn
            variant="text"
            >
            About Us
            </v-btn>
              <br>
            <v-btn
            variant="text"
            >
            Custemers
            </v-btn>
              <br>
            <v-btn
            variant="text"
            >
            Services
            </v-btn>
              <br>
        </v-col>

        <v-divider class="my-1" />
        <v-col class="text-center mt-1" cols="12">
          <p class="text-h5">
          <!-- <v-icon icon="mdi-drawing" /> -->
            Copyright &copy;
            <span class="text-grey-lighten-3"><strong>Art</strong>Sharqi</span> - 2023
          </p>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
    
    }),
  }
</script>
