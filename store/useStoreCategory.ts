import { defineStore } from 'pinia';
import { ref,watch } from 'vue'

export interface IProduct {
    nameProduct: string
    price: number
    quality: number
    sn: number
}
const cartLocalStorage = ref(JSON.parse(localStorage.getItem('cart')))

export const useStoreCategory = defineStore('storeProduct', () =>
{
    const cart = cartLocalStorage
    function increaseProduct(item : IProduct)
    {
        if (!item)
        {
            return
        };
        cart.value.map(product =>
        {
            if (product.sn === item.sn)
            {
                product.quality++
            }
        })
        localStorage.setItem('cart', JSON.stringify(cart.value))
        return cart.value
    };
    function reductionProduct(item : IProduct)
    {   
        if (!item)
        {
            return
        }
        cart.value.map(product =>
        {
            if (product.sn === item.sn)
            {
                product.quality--
            }
        });
        cart.value = cart.value.filter((item) => item.quality > 0)
        localStorage.setItem('cart', JSON.stringify(cart.value))
        return cart.value
    }
    
    return { cart, increaseProduct,reductionProduct }
})
