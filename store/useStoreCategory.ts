import { defineStore } from 'pinia';
export const useStoreCategory = defineStore('main', { 
    state: () => ({
        cart: [{
            
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
