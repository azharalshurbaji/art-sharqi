<template>
  <v-container>
    <v-row>
        <v-col 
            cols="12"
            lg="12"
            sm="12"
        >
        <v-img
            class="align-end text-white"
            height="500"
            :src="blogDetails.src"
            cover
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.1)"
            >
                <!-- <v-card-title class="text-white text-center"> {{ blogDetails.mainTitle }} </v-card-title> -->
            </v-img>
            <v-card-title class="text-h4 my-5">
                {{ blogDetails.mainTitle }}
                <v-divider width="700" class=" mt-3" />
            </v-card-title>

            <p class="text-body-1">{{ blogDetails.articleBody }}</p>
            <p class="text-body-1">{{ blogDetails.articleTitle }}</p>

            <v-card-text>
                {{ blogDetails.listItem.item1 }}
            </v-card-text>
            <v-card-text>
                {{ blogDetails.listItem.item2 }}
            </v-card-text>
            <v-card-text>
                {{ blogDetails.listItem.item3 }}
            </v-card-text>
            <v-card-text>
                {{ blogDetails.listItem.item4 }}
            </v-card-text>
            <v-card-text>
                {{ blogDetails.listItem.item5 }}
            </v-card-text>
            <v-card-text>
                {{ blogDetails.listItem.item6 }}
            </v-card-text>
            <v-card-text>
                {{ blogDetails.listItem.item7 }}
            </v-card-text>
            <v-card-text>
                {{ blogDetails.listItem.item8 }}
            </v-card-text>

            <v-divider class="my-1" />
            <v-sheet align="center">
                <v-btn
                    to="/blogs"
                    variant="outlined"
                    color="brown"
                    class="my-2 hover-btn"
                    width="500"
                >
                    Back
                    <v-icon>mdi-arrow-right</v-icon>
                </v-btn>
            </v-sheet>

        </v-col>
    </v-row>
  </v-container>
  <FooterSection />
</template>

<script>
import { mapState } from 'pinia'
import blogs from '@/store/blogs'
import FooterSection from '@/components/FooterSection.vue'

export default {

    components: {
        FooterSection,
    },

    computed: {
        ...mapState(blogs , ["blogDetails"]),

    listItem(){
      return this.blogDetails.item1,
        this.blogDetails.item2,
        this.blogDetails.item3,
        this.blogDetails.item4,
        this.blogDetails.item5,
        this.blogDetails.item6,
        this.blogDetails.item7,
        this.blogDetails.item8
    },
    }

}
</script>

<style>

.hover-btn:hover
{
    background-color: rgb(112, 42, 42);
    color: #fff !important;
    transition: .5s;
}

</style>