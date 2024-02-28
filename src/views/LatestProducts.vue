<script setup>
import { onMounted, ref } from 'vue'
import { apiRest } from '/src/rest-api/http-api'

import ProductBox from '../components/ProductBox.vue';

let latestProducts = ref('')

onMounted( async () => {
  const response = await apiRest.get('/latest-products-list/?format=json')
  latestProducts.value = response.data
})
</script>

<template>
<div class="columns is-multiline main">
    <div
    class="column is-3"
    v-for="product in latestProducts"
    :key="product.id">
        <ProductBox :product='product'/>
    </div>
</div>
</template>
