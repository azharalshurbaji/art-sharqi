import { defineStore } from 'pinia'

export default defineStore ('blogs' ,{

    persist: true,

    state: () => ({
        blogDetails: []
    
    }),
    getters: {
        
    },
    actions: {
        ShowBlogDetails(blog) 
        {
            this.blogDetails = blog;
        },
    }
})