import { useCartStore } from '../stores/cart';


export function initStoreApp(){
    const cartStore = useCartStore()
    cartStore.initCart()
}
    