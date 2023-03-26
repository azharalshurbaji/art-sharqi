import { defineStore } from 'pinia'

export default defineStore ('artBoards' ,{

    persist: true,

    state: () => ({
        ArtBoardDetails: []
    
    }),
    getters: {
        
    },
    actions: {
        ShowArtBoardDetails(artBoard) 
        {
            this.ArtBoardDetails = artBoard;
        },
    }
})