<script setup>
import TheWelcome from '../components/TheWelcome.vue'

import { onMounted, ref } from 'vue'
import axios from 'axios'

let product = ref('')

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/my_ecom'
});

/*
onMounted( async () => {
  const response = await api.get('/latest-products-list/?format=json')
  product.value = response.data
  console.log(product.value[0].name)
})
*/
</script>

<template>
    <div class="page-product">
        <div class="columns is-multiline">
            <div class="column is-9">
                <figure class="image mb-6">
                    <img v:src="product.get_image">
                </figure>

                <h1 class="title">{{ product.name }}</h1>

                <p>{{ product.description }}</p>
            </div>
            <div class="column is-3">

                <h2 class="subtitle">Information</h2>

                <p><strong>Price: </strong>${{ product.price }}</p>
            </div>
        </div>
        <div class="field has-addons mt-6">
            <div class="control">
                <input type="number" class="input" min="1" v-model="quantity">
            </div>
            
            <div class="control">
                <a class="button is-dark">Add to cart/a
            </div>
        </div>    
    </div>

</template>

    
    I