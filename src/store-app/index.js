import { useCartStore } from '../stores/cart';


export function initStoreApp(){
    const myCartStore = useCartStore()
    myCartStore.initCart()
}
    