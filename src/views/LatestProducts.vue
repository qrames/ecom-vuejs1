<script setup>
import { onMounted, ref } from 'vue'
import { apiRest } from '/src/rest-api/http-api'

import ProductBox from '../components/ProductBox.vue';
import axios from 'axios';

let latestProducts = ref('')

let query = ''
onMounted( async () => {
  const response = await apiRest.get('/latest-products-list/?format=json')
  latestProducts.value = response.data
})

async function searchProducts() {

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
    
  }
}
</script>

<template>
  <div class="columns is-multiline main">
    <form method="get" action="/latest-products-list/"></form>
    <div class="field has-addons">
      <div class="control">
        <input class="input" type="text" placeholder="search" v-model="query">
      </div>
      <div class="control">
        <a class="button is-primary" @click="searchProducts">
          <i class="fas fa-spinner fa-pulse"></i>
          <i class="fas fa-search"></i>
        </a>
      </div>
    </div>
    <div
    class="column is-3"
    v-for="product in latestProducts"
    :key="product.id">
        <ProductBox :product='product'/>
    </div>
  </div>
</template>
