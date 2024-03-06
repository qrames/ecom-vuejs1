<script setup>
import { onMounted, ref } from 'vue'

import CartLine from '@/components/CartLine.vue'
import { useCartStore } from '../stores/cart';

const cartStore = useCartStore()

const props = defineProps({
  cartLength: Number
})

</script>

<template>
  <div class="container cart-view">
    <h2 class="green">Your Cart <i class="fas fa-shopping-cart"></i></h2>
    <h3>
      Are you ready to make yours wonderfulls projects ? 
    </h3>
    <table class="table is-fullwidth is-striped">
        <thead>
            <tr>
                <th class="t-detail"><h3><strong>Product</strong></h3></th>
                <th class="t-price"><h3><strong>Price</strong></h3></th>
                <th class="t-quantity"><h3><strong>Quantity</strong></h3></th>
                <th class="t-total"><h3><strong>Total</strong></h3></th>
            </tr>
        </thead>
        <tbody>
            <CartLine
            v-for="product in cartStore.cart"
            :key="product.id"
            :product="product"
            ></CartLine>
        </tbody>
        <tfoot>
            <tr>
                <th class="t-detail"></th>
                <th class="t-price"></th>
                <th class="t-quantity"><h3><strong>Total</strong></h3></th>
                <th class="t-total"><h3><strong>{{ cartStore.getTotal }}</strong></h3></th>
            </tr>

        </tfoot>
    </table>
  </div>
</template>

<style scoped>
h2 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}



@media (min-width: 1024px) {
  .greetings h2,
  .greetings h3 {
    text-align: left;
  }
}
</style>
