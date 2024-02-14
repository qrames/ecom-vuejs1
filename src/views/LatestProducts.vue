<script setup>
import { onMounted, ref } from 'vue'

import { api } from '/src/rest-api/http-api'

let latestProducts = ref('')


onMounted( async () => {
  const response = await api.get('/latest-products-list/?format=json')
  latestProducts.value = response.data
  console.log(latestProducts.value[0].name)
})

</script>

<template>
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
</template>