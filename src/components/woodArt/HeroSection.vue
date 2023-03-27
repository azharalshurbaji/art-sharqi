<template>
  <v-container>
    <!-- <v-row align="center" justify="center">
      <v-col cols="12" lg="4" sm="6" class="my-10">
        <div class="parent">
          <div class="img_background_one" />
          <v-img
            cover
            src="img/art-board/b-1.jpg"
            width="350"
            class="ma-10 board_border_one"
          />
        </div>
      </v-col>
      <v-col cols="12" lg="4" sm="6" class="mx-5">
        
        <p></p>
      </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-col cols="12" lg="4" sm="6" class="my-10">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut
          voluptatum odit maxime aperiam iusto beatae perspiciatis quos veniam
          temporibus recusandae nam consequuntur accusantium sed, error ab
          voluptates aspernatur. Numquam, necessitatibus.
        </p>
      </v-col>
      <v-col cols="12" lg="4" sm="6" class="mx-5">
        <div class="parent">
          <div class="img_background_two" />
          <v-img
            cover
            src="img/art-board/b-2.jpg"
            width="300"
            class="ma-10 board_border"
          />
        </div>
      </v-col>
    </v-row> -->
    
    <v-row align="start" justify="center">
      <v-col
        v-for="artBoard in artBoards"
        :key="artBoard.id"
        cols="12"
        lg="4"
        sm="12"
        class="my-6"
      >
        <v-sheet border>
          <v-sheet class="pa-5" align="center" height="750">
            <!-- :src="'/src/assets/art-board/'+ artBoard.thumbnail + '.jpg'" -->
            <v-img
              cover
              :src="artBoard.thumbnail"
              width="400"
            />

          <v-sheet class="mt-1">
            <h1 class="text-center my-4">{{ artBoard.title }}</h1>
            <p class="ma-5">{{ artBoard.description }}</p>
          </v-sheet>
        
          </v-sheet>
            <v-col cols="12" lg="12" sm="12" align="center" class="py-3">
              <v-btn    
                color="brown"
                class=""
              >
                <v-icon class="mr-3">mdi-shopping</v-icon>
                Buy Naw
              </v-btn>
              <v-btn
                class="my-2 offset-1"
                color="brown"
                variant="outlined"
                :to="{ name: 'art-board-details', params: { id: artBoard.id } }"
                @click="ShowArtBoardDetails(artBoard)"
              >
                Show Details
              </v-btn>
            </v-col>
          </v-sheet>  
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import artBoards from '@/store/artBoards';
import { mapActions } from 'pinia';
// import artBoards from '@/store/artBoards.js'
// import axios from 'axios';

export default {
  data: () => ({
    artBoards: [
    {
      id: "1",
      title: "3D carved from pine wood",
      thumbnail: "https://azharalshurbaji.github.io/diamond-image/art-sharqi/art-board/bw-1.jpg",
      images: [
        "https://azharalshurbaji.github.io/diamond-image/art-sharqi/art-board/bw-2.jpg",
        "https://azharalshurbaji.github.io/diamond-image/art-sharqi/art-board/bw-3.jpg",
        "https://azharalshurbaji.github.io/diamond-image/art-sharqi/art-board/bw-4.jpg",
        "https://azharalshurbaji.github.io/diamond-image/art-sharqi/art-board/bw-5.jpg"
    ],
    measuring: {
      size1: "65 cm",
      size2: "75 cm",
      size3: "90 cm"
      },
      description: "Lorem ipsum dolor sit amet Quisquam est voluptatibus Lorem ipsum dolor sit amet Quisquam est voluptatibus vero cumque facere quo totam."
    },
    {
      id: "2",
      title: "Yellow roses palette with Oil colors",
      thumbnail: "https://azharalshurbaji.github.io/diamond-image/art-sharqi/art-board/by-2.jpg",
      images: [
        "https://azharalshurbaji.github.io/diamond-image/art-sharqi/art-board/by-1.jpg",
        "https://azharalshurbaji.github.io/diamond-image/art-sharqi/art-board/by-2.jpg",
        "https://azharalshurbaji.github.io/diamond-image/art-sharqi/art-board/by-3.jpg"
      ],
      measuring: {
        size1: "4 * 7 cm"
        },
      description: "Lorem ipsum dolor sit amet Quisquam est voluptatibus Lorem ipsum dolor sit amet Quisquam est voluptatibus vero cumque facere quo totam."
    },
    {
      id: "3",
      title: "Necklace in the name of (Zana)",
      thumbnail: "https://azharalshurbaji.github.io/diamond-image/art-sharqi/art-board/b-3.jpg",
      images: [
        "https://azharalshurbaji.github.io/diamond-image/art-sharqi/art-board/b-3.jpg",
        "https://azharalshurbaji.github.io/diamond-image/art-sharqi/art-board/b-3.jpg",
        "https://azharalshurbaji.github.io/diamond-image/art-sharqi/art-board/b-3.jpg",
        "https://azharalshurbaji.github.io/diamond-image/art-sharqi/art-board/b-3.jpg"
      ],
      measuring: {
        size1: "50 * 70 cm"
        },
      description: "((Zana)) This is one unique piece in the world made with love just for you , 925 sterling silver on American walnut wood."
    },
    {
      id: "4",
      title: "New neighborhood  palette with oil colors",
      thumbnail: "https://azharalshurbaji.github.io/diamond-image/art-sharqi/art-board/b-4.jpg",
      images: [
          "https://azharalshurbaji.github.io/diamond-image/art-sharqi/art-board/b-4.jpg",
          "https://azharalshurbaji.github.io/diamond-image/art-sharqi/art-board/b-4.jpg",
          "https://azharalshurbaji.github.io/diamond-image/art-sharqi/art-board/b-4.jpg",
          "https://azharalshurbaji.github.io/diamond-image/art-sharqi/art-board/b-4.jpg"
      ],
      measuring: {
        size1: "50 * 70 cm"
        },
      description: "This painting is inspired by the old neighborhoods of Aleppo ,From a neighborhood called the new neighborhood."
    },
    {
      id: "5",
      title: "Galaxy palette..",
      thumbnail: "https://azharalshurbaji.github.io/diamond-image/art-sharqi/art-board/bg-5.jpg",
      images: [
        "https://azharalshurbaji.github.io/diamond-image/art-sharqi/art-board/bg-1.jpg",
        "https://azharalshurbaji.github.io/diamond-image/art-sharqi/art-board/bg-2.jpg",
        "https://azharalshurbaji.github.io/diamond-image/art-sharqi/art-board/bg-1.jpg",
        "https://azharalshurbaji.github.io/diamond-image/art-sharqi/art-board/bg-2.jpg"
      ],

      measuring: {
        size1: "50 * 40 cm"
        },
      description: "Lorem ipsum dolor sit amet Quisquam est voluptatibus Lorem ipsum dolor sit amet Quisquam est voluptatibus vero cumque facere quo totam."
    },
    {
      id: "6",
      title: "A village painting in oil colors",
      thumbnail: "https://azharalshurbaji.github.io/diamond-image/art-sharqi/art-board/bv-1.jpg",
      images: [
        "https://azharalshurbaji.github.io/diamond-image/art-sharqi/art-board/bv-1.jpg",
        "https://azharalshurbaji.github.io/diamond-image/art-sharqi/art-board/bv-1.jpg",
        "https://azharalshurbaji.github.io/diamond-image/art-sharqi/art-board/bv-1.jpg",
        "https://azharalshurbaji.github.io/diamond-image/art-sharqi/art-board/bv-1.jpg"
      ],
      measuring: {
        size1: "50 * 40 cm"
        },
      description: "Lorem ipsum dolor sit amet Quisquam est voluptatibus Lorem ipsum dolor sit amet Quisquam est voluptatibus vero cumque facere quo totam."
    }
    ],
  }),
  created() {
    this.loadArtBoards();
  },
  methods: {
    loadArtBoards() {
      this.axios.get("/AccessoraisJSON/db.json")
        .then((response) => {
          this.artBoards = response.data.artBoards;
          // console.log(response);
        })
        .catch((error) => {
          if (error) {
            // alert("Boards Loading failed ");
            console.log("Loading failed Earrings API");
          }
        });
    },

    ...mapActions(artBoards , ["ShowArtBoardDetails"])
  },
};
</script>

<style>
.parent {
  position: relative;
}
.img_background_one {
  position: absolute;
  top: -50px;
  width: 230px;
  height: 450px;
  background-color: #9e5c3d;
}
.img_background_two {
  position: absolute;
  top: -30px;
  width: 230px;
  height: 450px;
  background-color: #274470;
}
.board_border_one {
  border: 7px double #fffbfb;
  /* border-block: 50px; */
}
.board_border {
  border: 4px dotted #915050;
  margin: 0 auto !important;
}
</style>