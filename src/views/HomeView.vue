<script setup>

import latestProducts from './LatestProducts.vue';


</script>

<template>
  <div class="home">
    <article class="hero is-medium is-dark mb-6">
      <div class="hero-body has-text-centered">
        <p class="title mb-6">
        Welcome to Djacket
        </p>
        <p class="subtitle">
        The best jacket store online
        </p>
      </div>
    </article>
    <article>
      <latestProducts/>
    </article>
  </div>
</template>