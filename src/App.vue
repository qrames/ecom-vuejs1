<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TheNavigation from './components/TheNavigation.vue';
import 'bulma/css/bulma.min.css'
import { ref, onMounted } from 'vue';

import { useCartStore } from './stores/cart';


const showMobaleMenu = ref (false)

const cartStore = useCartStore()
cartStore.initCart()

onMounted( () => {

})
  

</script>

<template>
  <TheNavigation :cartLength="cartStore.getLength"/>
  <section class="section">
    <router-view v-slot="{ Component, route }">
      <component :is="Component" :key="route.path" />
    </router-view> 
  </section>
  <footer class="footer">
    <p class="has-text-contered is-dark">Copyright (c) 2024</p>
  </footer>

</template>

<style>
</style>