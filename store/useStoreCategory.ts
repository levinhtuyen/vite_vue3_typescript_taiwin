import { defineStore } from 'pinia';
export const useStoreCategory = defineStore('main', { 
    state: () => ({
        cart: [{
            nameProduct: "Mac Book Pro",
            price: 20,
            quality: 2
        },
        {
            nameProduct: "Mac Book Air",
            price: 18,
            quality: 1
        },
        {
            nameProduct: "Laptop Acer",
            price: 15,
            quality: 3
        }]
    }),
    getters: {
    },
    actions: {
        chooseProduct (product)
        {
            this.cart = this.cart.push(product)
        },
    }
})
