<script setup>
import { onMounted, ref } from 'vue'
import {useRoute} from 'vue-router'
import ProductBox from '../components/ProductBox.vue';

import { apiRest } from '/src/rest-api/http-api'

let latestProducts = ref('')

onMounted( async () => {
    const response = await apiRest.get('/products' + useRoute().path)
    console.log(response.data.products)
    latestProducts.value = response.data.products
})
</script>

<template>
<div
  class="gridywrap"
  v-for="product in latestProducts"
  :key="product.id">
      <ProductBox :product='product'/>
  </div>
</template>

<style>

</style>