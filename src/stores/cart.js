import { defineStore } from 'pinia'
import { ref } from 'vue'


export const useCartStore = defineStore('cart', () => {
  const Authenticated = ref(true)
  const cart = ref([])
  const isLoading = ref(false)

  function $reset() {
    cart.value = []
  }

  function initCart(){
    if(localStorage.getItem('cart')) {
      if (JSON.parse(localStorage.getItem('cart')).length > 0) {
        cart = JSON.parse(localStorage.getItem('cart'))
      } else {
        localStorage.setItem('cart', JSON.stringify(cart))
      }
    }
    else localStorage.setItem('cart', JSON.stringify(cart))
  }


  function addItem(item) {

    // itemInCart is a array
    // the first element itemInCart[0] is a proxy
    const itemInCart = cart.value.filter(i => i.id === item.id)

    if(itemInCart.length) {
      console.log(itemInCart[0].quantity++)
      console.log(item.quantity)
      itemInCart[0].quantity = parseInt(item.quantity) + parseInt(itemInCart[0].quantity)
      console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaahhhh")

    } else {
      item.quantity = 1
  
      if ( item !== null && 'id' in item && 'quantity' in item) {
        cart.value.push(item);

      } else {
          console.log('L\'item ne correspond pas au format attendu { name: string, quantity: number }');
      }
    }
    localStorage.setItem('cart', JSON.stringify(cart))
  }

  function removeItem(index) {
    items.value.splice(index, 1);
  }
  
  return {Authenticated, cart, isLoading, addItem, initCart}
})