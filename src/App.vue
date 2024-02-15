<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import TheNavigation from './components/TheNavigation.vue';
import 'bulma/css/bulma.min.css'
import { ref } from 'vue';
import HomeView from './views/HomeView.vue';

const showMobaleMenu = ref (false)

</script>

<template>
  <TheNavigation/>
  <section class="section">
    <router-view v-slot="{ Component, route }">
      <transition :name="route.meta.transition">
        <component :is="Component" :key="route.path" />
      </transition>
    </router-view> 
  </section>
  <footer class="footer">
    <p class="has-text-contered is-dark">Copyright (c) 2024</p>
  </footer>

</template>

<style>

.v-enter-active,
.v-leave-active {
  transition: opacity 5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.slide-left-enter-active,
.slide-left-leave-active {
  transition: opacity 1s, transform 1s ;
}

.slide-left-enter-from,
.slide-right-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

.slide-right-enter-active,
.slide-right-leave-active {
  transition: opacity 1s, transform 1s ;
}

.slide-right-enter-from,
.slide-left-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>