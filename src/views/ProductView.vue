<script setup>
import TheWelcome from '../components/TheWelcome.vue'

import { onMounted, ref, reactive } from 'vue'
import {useRoute} from 'vue-router'
import { apiRest } from '/src/rest-api/http-api'


let product = ref('')
const get_is_ok = reactive({ data_response: 'loading' })

onMounted( async () => {

    try {
        const response = await apiRest.get('/products' + useRoute().path)
        product.value = response.data

    } catch (err) {
        console.error("Error response:");
        console.error(err.response.data);    // ***
        console.error(err.response.status);  // ***
        console.log(err.response.status)
        console.error(err.response.headers); // ***
    } finally {

        if (product.value != "") {
            get_is_ok.data_response = true
        }       
        else {
            get_is_ok.data_response = false
        }

    }

})



</script>

<template>
    <div class="looping-rhombuses-spinner" v-if="get_is_ok.data_response == 'loading'">
        <div class="rhombus"></div>
        <div class="rhombus"></div>
        <div class="rhombus"></div>
    </div>
    <div class="page-product" v-else-if="get_is_ok.data_response === true">
        <div class="columns is-multiline">
            <div class="column is-9">
                <figure class="image mb-6">
                    <img :src="product.get_image">
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
                <a class="button is-dark">Add to cart</a>
            </div>
        </div>    
    </div>
    <div class="page-404" v-else>
        <h1>404</h1>
        <p>Aïl ! Aïl ! Aïl !</p>
        <p><strong>On trouve la l'article ...</strong></p>
    </div>
</template>

<style>
.page-404 {
    text-align: center;
    font-size: 2em;
}
</style>
    I