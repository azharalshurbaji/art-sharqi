// Utilities
import { defineStore } from 'pinia'

export const useCartStore = defineStore('Cart', {
  persist: true,

  state: () => ({
    productCounter: 1,
    items: [],
  }),
  getters: {
    itemsCount(state) {
      return state.items.length
    },
   

  },
  actions: {
    // increment(productCounter){
    //   this.items.push(productCounter ++);
    // },
    

    addToCartEarring(earring)
    {
      this.items.push(earring)
    },

    addToCartNecklace(necklace)
    {
      this.items.push(necklace)
    },
    addToCartRing(ring) 
    {
      this.items.push(ring)
    },

    removeFromCart(index) {
      this.items.splice(index , 1)
      // this.productCounter = 1
    },

    resetCart() {
      this.items = []
    },
  }
})
