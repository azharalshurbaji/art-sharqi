<template>
  <v-row align="center" justify="center">
    <v-col cols="12" lg="10" sm="4">
        <v-sheet class="border text-center ma-3">
            <v-btn
                icon="mdi-plus"
                @click="CartStore.productCounter ++"
                size="small"
            />

            <span class="text-h6 px-2">
                {{ CartStore.productCounter }}
            </span>
            
            <v-btn
                :disabled = 'CartStore.productCounter < 2'
                icon="mdi-minus-thick"
                @click="CartStore.productCounter --"
                size="small"
            />
        </v-sheet>
    </v-col>
  </v-row>
</template>

<script>
import {useCartStore} from '@/store/cart.js'
// import { useProductQuantityStore } from '@/store/ProductQuantity.js'
import { mapStores ,mapState } from 'pinia'
// import { mapActions } from 'pinia'


export default {

    data: () => ({
        
        // quantity: 1,
        // removeCount: 0,
    }),
    computed: {
        ...mapStores(useCartStore ),
        ...mapState(useCartStore, ["items" , "itemQuantity"]),
    },
        methods: {
            // ...mapActions(cart , ['removeFromCart'])
    },
}
</script>