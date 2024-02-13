<script setup>
import TheWelcome from '../components/TheWelcome.vue'

import { onMounted, ref } from 'vue'
import axios from 'axios'

let latestProducts = ref('')

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/my_ecom',
  headers: {
    //common['Authorization']: 'AUTH_TOKEN',
  },
  //headers.common['Authorization'] = AUTH_TOKEN;
  //defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
  timeout: 2500,
})


onMounted( async () => {
  const response = await api.get('http://127.0.0.1:8000/my_ecom/latest-products-list/?format=json')
  latestProducts.value = response.data
  console.log(latestProducts.value[0].name)
})
</script>

<template>
  <div class="home">
    <section class="hero is-medium is-dark mb-6">
      <div class="hero-body has-text-centered">
        <p class="title mb-6">
        Welcome to Djacket
        </p>
        <p class="subtitle">
        The best jacket store online
        </p>
      </div>

      <div class="columns is-multiline">
        <div class="column is-12">
          <h2 class="is-size-2 has-text-centered">Latest products</h2>
        </div>

        <div
          class="column is-3"
          v-for="product in latestProducts"
          :key="product.id">
          <div class="box">
            <figure class="image mb-4">
              <img :src="product.get_thumbnail" alt="">
            </figure>
            <h3>{{ product.name }}</h3>
            <p>{{ product.price }}</p>
            <p>{{ product.description }}</p>
          </div>
        </div>
      </div>


    </section>
  </div>
</template>