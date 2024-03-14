import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { formatMonetaire } from '@/utils.js'
import Swal from 'sweetalert2'
import { apiRest } from '@/rest-api'

export const useCartStore = defineStore('cart', () => {
  const Authenticated = ref(true)
  const cart = ref([])
  const isLoading = ref(false)
  const token = ref('')

  function $reset() {
    cart.value = ref([])
  }

  // GETTER
  const getQuantity = computed(() => (id) => filterIdProduct(id).quantity)
  const getPrice = computed(() => (id) => formatMonetaire(totalProduct(id)))
  const getTotal = computed(() => formatMonetaire(totalAll()))
  const getLength = computed(() => cart.value.length)


  //my local function
  function filterIdProduct(id){
    const myProduct = cart.value.filter((i) => i !== null && i !== undefined ).filter(i => i.id === id)[0]
    if (myProduct) {
      return myProduct
    } else {
      return {}
    }
  }

  function totalProduct(id){
    return filterIdProduct(id).quantity * filterIdProduct(id).price
  }
  function totalAll(){
    let total = 0
    for(const item of cart.value) {
      total += totalProduct(item.id)
    }
    return total
  }

  function setLocalStorageCart(){
    cleanCart()
    localStorage.setItem('cart', JSON.stringify(cart))
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

  //ACTION function 
  function initCart(){
    const local = localStorage.getItem('cart')

    if (localStorage.getItem('token')){
      token.value = localStorage.getItem('token')
      Authenticated.value = true
    } else {
      token.value = ''
      Authenticated.value = false
    }

    if(local) {
      if (JSON.parse(local)._value.length > 0) {
        for (const item of JSON.parse(local)._value){
          cart.value.push(item)
        }
      } else setLocalStorageCart()
    } else setLocalStorageCart()
  }

  function setToken(new_token){

    if (new_token !== ''){
      Authenticated.value = true
    } else {
      Authenticated.value = false
    }
    token.value = new_token
    apiRest.defaults.headers.common["Authorization"] = "Token " + new_token
    localStorage.setItem('token', new_token)
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

  function subtractItem(item) {

    cleanCart()

    const itemInCart = cart.value.filter(i => i.id === item.id)[0]

    if( itemInCart ) {
      itemInCart.quantity --
      if (itemInCart.quantity === 0){
        Swal.fire({
          title: "Are you sure?",
          text: "Remouve your product?",
          icon: "warning",
          imageUrl: itemInCart.get_thumbnail,
          imageHeight: 200,
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              title: "Deleted!",
              text: "Your cart is clean",
              icon: "success"
            })
          cart.value = cart.value.filter((i) => i.quantity !== 0)
          } else {
            itemInCart.quantity = 1
          }
        })
      }
    }
    setLocalStorageCart()
  }
  

  return {
    Authenticated,
    cart,
    //isLoading,
    setToken,    
    addItem,
    subtractItem,
    initCart,
    getQuantity,
    getPrice,
    getTotal,
    getLength,
  }
})