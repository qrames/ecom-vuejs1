<script setup>
import CartLine from '@/components/CartLine.vue'

const props = defineProps({
  cartLength: Number,
  product: Object,
})
// !!!!!!!!!!!!!!!!!!!
// pour un achat direct depuis la page product 
// a lier a ProductBox btn
</script>

<template>
  <div class="cart-component">
    <h2 class="green">Your Cart <i class="fas fa-shopping-cart"></i></h2>
    <h3>
      You are ready for your news projects ? 
    </h3>
    <table class="table is-fullwidth is-striped">
        <thead>
            <tr>
                <th class="t-detail">Product</th>
                <th class="t-price">Price</th>
                <th class="t-quantity">Quantity</th>
                <th class="t-total">Total</th>
            </tr>
        </thead>
        <tbody>
            <CartLine></CartLine>
        </tbody>
        <tfoot>
            <tr>
                <th class="t-detail">Product</th>
                <th class="t-price">Price</th>
                <th class="t-quantity">Quantity</th>
                <th class="t-total">Total</th>
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
