<script setup>
import { onMounted, ref } from 'vue'
import { apiRest } from '/src/rest-api'

import ProductBox from '../components/ProductBox.vue';

let latestProducts = ref('')

let query = ''
onMounted( async () => {
  const response = await apiRest.get('/latest-products-list/?format=json')
  latestProducts.value = response.data
})

async function searchProducts() {
  document.getElementById("loop").classList.add('fa-pulse')
  document.getElementById("loop").classList.add('fa-spinner')
  document.getElementById("loop").classList.remove('fa-search')

  try {
    const response = await apiRest.get(
      '/latest-products-list/?format=json'
      + '&' + 'query=' + query
    )
    latestProducts.value = response.data
  } catch (err) {
    console.error("Error response:");
    console.error(err.response.data);    // ***
    console.error(err.response.status);  // ***
    console.error(err.response.headers); // ***
  } finally {
    document.getElementById("loop").classList.remove('fa-pulse')
    document.getElementById("loop").classList.remove('fa-spinner')
    document.getElementById("loop").classList.add('fa-search')
  }
}
</script>

<template>
  <div class="container">
    <form method="get" action="/latest-products-list/">
      <div class="field has-addons has-addons-centered">
        <div class="control">
          <input class="input" type="text" placeholder="search" v-model="query">
        </div>
        <div class="control">
          <a class="button is-primary" @click="searchProducts">
            <i id="loop" class="fas fa-search"></i>
          </a>
        </div>
      </div>
    </form>
  </div>
  <div
  class="gridywrap"
  v-for="product in latestProducts"
  :key="product.id">
      <ProductBox :product='product'/>
  </div>
</template>