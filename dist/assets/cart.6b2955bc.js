import{X as e}from"./index.062f8331.js";const r=e("Cart",{persist:!0,state:()=>({productCounter:1,items:[]}),getters:{itemsCount(t){return t.items.length}},actions:{addToCartEarring(t){this.items.push(t)},addToCartNecklace(t){this.items.push(t)},addToCartRing(t){this.items.push(t)},removeFromCart(t){this.items.splice(t,1)},resetCart(){this.items=[]}}});export{r as u};
