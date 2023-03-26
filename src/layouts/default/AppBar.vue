<template>
  <v-app-bar app class="bg-grey-lighten-4">
    <v-app-bar-nav-icon
      class="hidden-md-and-up"
      @click="drawer = true"
    />

    <v-app-bar-title class="text-uppercase text-h5 mt-1 hidden-sm-and-down">
      <v-icon icon="mdi-drawing" />
      <strong>Art</strong>Sharqi
      <p class="text-overline text-lowercase ml-7 mt-n4"
        style="letter-spacing: -.1px !important;"
      >Oriental paintings with golden hands</p>
    </v-app-bar-title>
    <v-btn 
      exact 
      to="/" 
      stacked 
      class="hidden-sm-and-down"
      > 
        Home 
    </v-btn>
    <v-btn
      exact
      to="/boards"
      stacked
      class="hidden-sm-and-down"
    >
      Art Boards
    </v-btn>
    <v-btn 
      to="/blogs"
      exact
      stacked 
      class="hidden-sm-and-down"
    > 
      Blog 
    </v-btn>
    <v-btn 
      exact
      stacked 
      class="hidden-sm-and-down"
    > 
      About
     </v-btn>

    <v-btn 
      v-if="isLoggedIn"
      to="/cart" 
      stacked 
      class="hidden-sm-and-down"
    >
      <v-badge :content="itemsCount" color="red" floating />
      <v-icon> mdi-cart </v-icon>
    </v-btn>

    <v-btn
      v-if="isLoggedIn"
      variant="text"
      to="/profile"
      stacked
      class="hidden-sm-and-down"
    >
      <v-img 
        :src="user.image"
        width="40"
        cover
      />
      {{ user.firstName }}
    </v-btn>
    <v-btn 
      v-else
      to="/login" 
      class="bg-brown-lighten-1 hidden-sm-and-down"
    >
    login
    </v-btn>

  </v-app-bar>

  <v-spacer />

  <!-- & temporary: For hide Navigation Drawer on Display md and Up -->
  <v-navigation-drawer v-model="drawer" temporary>
    <v-list nav >
      <v-list align="center">
        <v-app-bar-title class="text-uppercase text-h6 mt-1 mt-3">
          <v-icon icon="mdi-drawing" />
            <strong>Art</strong>Sharqi
            <p class="text-overline text-lowercase ml-7 mt-n4"
              style="letter-spacing: -.1px !important;"
            >
            Oriental paintings with golden hands
          </p>
        </v-app-bar-title>
        <v-divider class="my-2" />
        <v-btn
          class="rounded"
          title="Your Profile"
          v-if="isLoggedIn"
          variant="text"
          to="/profile"
          stacked
          block
        >
        <v-img
          :src="user.image"
          width="40"
          cover
        />
        {{ user.firstName }}
            </v-btn>
            <v-btn
        v-else
        variant="text"
        to="/login"
        stacked
            >
            login
            </v-btn>
      </v-list>

      <v-divider class="my-3" />
      
      <v-list-item>
        <v-list-item-title>
          <v-list-item-icon>
            <v-icon class="text-brown-lighten-1">mdi-home</v-icon>
          </v-list-item-icon>
          <v-btn 
            exact 
            stacked
            to="/" 
            variant="text"
            class="mx-3 text-brown-darken-1"
            size="small"
          > 
            Home 
          </v-btn>
        </v-list-item-title>
      </v-list-item>

      <v-list-item>
          <v-list-item-title>
            <v-list-item-icon>
              <v-icon class="text-brown-lighten-1"> mdi-cart </v-icon>
            </v-list-item-icon>
            <v-btn 
              to="/cart"
              stacked
              variant="text"
              size="small"
              class="mx-3 text-brown-darken-1 mr-10"
            >
              Your Cart
            </v-btn>
              <v-badge
                :content="itemsCount"
                color="red"
              />
          </v-list-item-title>
      </v-list-item>

      <v-list-item>
        <v-list-item-title>
          <v-list-item-icon>
            <v-icon class="text-brown-lighten-1"> mdi-drawing </v-icon>
          </v-list-item-icon>
          <v-btn
            exact
            stacked
            to="/boards"
            variant="text"
            class="mx-3 text-brown-darken-1"
            size="small"
          >
            Art Boards
          </v-btn>
        </v-list-item-title>
      </v-list-item>
      
        <v-list-item>
          <v-list-item-title>
            <v-list-item-icon>
              <v-icon class="text-brown-lighten-1"> mdi-file-document-edit-outline </v-icon>
            </v-list-item-icon>
            <v-btn
              to="/blogs"
              exact
              stacked
              variant="text"
              class="mx-3 text-brown-darken-1"
              size="small"
            >
              Blog
            </v-btn>
          </v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-title>
            <v-list-item-icon>
              <v-icon class="text-brown-lighten-1"> mdi-account-group </v-icon>
            </v-list-item-icon>
            <v-btn
              exact
              stacked
              variant="text"
              class="mx-3 text-brown-darken-1"
              size="small"
            >
              About
            </v-btn>
          </v-list-item-title>
        </v-list-item>
        
        <v-list-item>
          <v-list-item-title>
            <v-list-item-icon>
            </v-list-item-icon>
            <v-btn
              v-if="isLoggedIn"
              to="/login"
              variant="text"
              block
              @click="logout"
              >
              <v-icon class="text-brown-lighten-1"> mdi-logout </v-icon>
                Logout
              </v-btn>
              <v-btn
                v-else
                to="/login"
                variant="text"
                block
              >
                Login 
              </v-btn>
          </v-list-item-title>
        </v-list-item>

    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { useCartStore } from "@/store/cart.js";
import { mapActions, mapState } from "pinia";
import user from '@/store/user';

export default {
  data: () => ({
    drawer: false,
  }),

  computed: {
    ...mapState(useCartStore, ["itemsCount"]),
    ...mapState(user, ["isLoggedIn" , "user"]),
  },
  methods: {
    ...mapActions(user , ['logout']),
  },
};
</script>


<style>
</style>