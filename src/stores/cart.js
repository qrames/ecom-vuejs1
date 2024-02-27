import { defineStore } from 'pinia'
import { ref } from 'vue'


export const useCartStore = defineStore('cart', () => {
  const Authenticated = ref(true)
  const cart = ref([])
  const isLoading = ref(false)

  function $reset() {
    cart.value = ref([])
  }


  function initCart(){
    const local = localStorage.getItem('cart')
    if(local) {
      if (JSON.parse(local)._value.length > 0) {
        console.log(JSON.parse(local)._value)
        cart.value.push(JSON.parse(local)._value[0])
      } else setLocalStorageCart()
    } else setLocalStorageCart()
  }

  function setLocalStorageCart(){
    localStorage.setItem('cart', JSON.stringify(cart))
  }


  function addItem(item) {

    // itemInCart is a array
    // the first element itemInCart[0] is a proxy
    cleanCart()
  
    const myProduct = cart.value.filter((i) => i.id === item.id)[0]
    if (myProduct) {
      myProduct.quantity ++
    } else {
      item.quantity = 1
      cart.value.push(item)
    }
    setLocalStorageCart()
  }


  function cleanCart(){
  
    // Remouv [null, undefined] value :
    cart.value = cart.value.filter((i) => i !== null && i !== undefined )
    
    // Pass a function to map
    let tableauUnique = [];

    // the doublon case
    let isDoublonId =  cart.value.map((x) => {
      if ( tableauUnique.includes(x.id) ) {
        return true;
      } else {
        tableauUnique.push(x.id);
        return false;
      }
    });

    for ( const i in cart.value ){

      if (isDoublonId[i]){
        // The id of first value:
        // id = cart.value.findIndex(e => e.id === cart.value[i].id)
        cart.value[cart.value.findIndex(e => e.id === cart.value[i].id)].quantity += cart.value[i].quantity 
        cart.value[i] = false // case of doublon is false
        // I can use 'null' value in cart.value but 'findIndex' don't love this
      }
    }

    cart.value = cart.value.filter((i) => i !== false)

  }

  function subtractItem(item) {

    cleanCart()

    const itemInCart = cart.value.filter(i => i.id === item.id)[0]

    if( itemInCart ) {
      itemInCart.quantity --
      if (itemInCart.quantity === 0){
        cart.value = cart.value.filter((i) => i.quantity !== 0)
      }
    } 
  }
  

  return {Authenticated, cart, isLoading, addItem, subtractItem, initCart}
})