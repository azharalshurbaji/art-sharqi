import { defineStore } from 'pinia'

export default defineStore ('Accessorais' ,{

    persist: true,

    state: () => ({
        accessoriesDetails: []
    
    }),
    getters: {
        
    },
    actions: {
        accessoriesDetailsEarring(earring) 
        {
            this.accessoriesDetails = earring;
        },
        accessoriesDetailsNecklace(necklace)
        {
            this.accessoriesDetails = necklace;
        },
        accessoriesDetailsRing(ring)
        {
            this.accessoriesDetails = ring;
        },
        ShowArtBoardDetails(artBoard) 
        {
            this.accessoriesDetails = artBoard;
        },
        accessoriesDetails(earring ,necklace ,ring){
            this.accessoriesDetails = earring,
            this.accessoriesDetails =necklace,
            this.accessoriesDetails = ring
        }
        
    }
})