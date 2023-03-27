<template>
  <v-container>
    <v-row justify="center" align="center">
        <v-col cols="12" lg="12" sm="12">
            <h1 class="text-center">.｡.Articles Page .｡.</h1>
            <p class="text-center text-black text-subtitle-2">
              _____ .｡.  .｡. _____
          </p>
        </v-col>
    </v-row>
    <v-row jsutify="center" align="center" class="mb-5">
        <v-col 
            v-for="blog in blogs"
            :key="blog.id"
            cols="12" 
            lg="4" 
            sm="6"
        >
        <v-card
          class="mx-auto"
          max-width="400"
          :to="{ name: 'blogs-details' , params: { id: blog.id } }"
          @click="ShowBlogDetails(blog)"
        >
        <!-- :src="'/src/assets/blog-img/'+ blog.src + '.jpg'" -->
        <v-img
          class="align-end text-white"
          height="200"
          :src="blog.src"
          cover
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        >
          <v-card-title class="text-white"> 
            {{ blog.mainTitle }} 
          </v-card-title>
      </v-img>

            <v-card-subtitle class="pt-4"> Article {{ blog.id }} </v-card-subtitle>
            
            <v-card-title class="text-grey-darken-3 text-body-1"> {{ blog.mainTitle }} </v-card-title>
            <v-card-subtitle class="text-subtitle-2">{{ blog.articleTitle }}</v-card-subtitle>

            <v-card-actions>
                <v-btn 
                    class="my-3"
                    color="brown"
                    variant="outlined"
                    block
                    size="small"
                    :to="{ name: 'blogs-details' , params: { id: blog.id } }"
                    @click="ShowBlogDetails(blog)"
                    >
                    Read More
                </v-btn>
            </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
  </v-container> 
  <FooterSection />
</template>

<script>
import { mapActions } from 'pinia';
import blogs from '@/store/blogs.js'
import FooterSection from './FooterSection.vue'

export default {

    components: {
        FooterSection,
    },

    data: () => ({
        blogs: [
        {
          id: "1b",
          src: "https://azharalshurbaji.github.io/diamond-image/art-sharqi/blog-img/ba-1.jpg",
          mainTitle: "How to learn to draw ?",
          articleTitle: "There are many ways in which drawing can be learned, namely:",
          "listItem": 
          {
              item1: "[1] Self-evaluation, as the painter must stop drawing for a while, reflect on the painting, criticize it, and think about what you need before completing it.",
              item2: "[2] Practice and not give up, as continuity improves skills over time.",
              item3: "[3] Paying attention to the necessary exercises that help learn drawing, especially for beginners, as it is necessary to learn the method of holding a pen, drawing shadows, perspective drawing, and others.",
              item4: "[4] Preparing the basic materials needed for drawing, such as: pencils, erasers, a drawing board, and a sharpener.",
              item5: "[5] Communicating with other painters, and consulting them on many matters related to the skill of drawing."
          }
        },
        {
          id: "2b",
          src: "https://azharalshurbaji.github.io/diamond-image/art-sharqi/blog-img/ba-2.jpg",
          mainTitle: "Tips for beginners in fine art:",
          articleTitle: "Abdul-Azim Al-Damen's painting...",
          "articleBody": "Arming yourself with artistic knowledge and culture to enter the world of fine art is one of the advices given by the Head of the Fine Arts Department in Dammam Arts, Abdul-Azim Al-Damen, while Etidal stressed the importance of learning about the different experiences in this art. Here are some tips for beginners in fine art.",
          "listItem": 
        {
          item1: "1- Developing visual culture by visiting exhibitions and museums locally and globally",
          item2: "1- Developing visual culture by visiting exhibitions nd mueums locally and globally",
          item3: "3- Examine the sciences related to art",
          item4: "4- Stay away from false fame and avoid seeking it",
          item5: "5- Examine the history of art",
          item6: "6- Follow-up of international and local activities in art, whether in attendance or participation, to find out about the annual art events",
          item7: "7- Visiting international museums when traveling",
          item8: "8- Continuous practice and training"
        }
      }
    ],
        show: false,
    }),

    computed: {
        mainTitle() {
            return this.blogs.mainTitle
        },
    },

created() {
        this.loadBlogs();
    },
  methods: {
    loadBlogs() {
      this.axios.get("/AccessoraisJSON/blogs.json")
        .then((response) => {
          this.blogs = response.data.blogs;
          // console.log(response);
        })
        .catch((error) => {
          if (error) {
            // alert("Blogs Loading failed ");
            console.log("Loading failed Blog API");
          }
        });
    },

    ...mapActions(blogs , ["ShowBlogDetails"]),

    },

}
</script>

<style>

</style>