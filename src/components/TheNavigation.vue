<script setup>
const props = defineProps({
  cartLength: Number
})
</script>

<template>
<div id="wrapper">
    <nav class="navbar is-fixed-top" role="navigation">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item"><strong>Djackets</strong></router-link>
        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" @click="showMobaleMenu = !showMobaleMenu">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div class="navbar-menu" :class="{'is-active': showMobaleMenu}" id="navbar-menu">
        <div class="navbar-end">
          <router-link to="/summer" class="navbar-item">Summer</router-link>
          <router-link to="/winter" class="navbar-item">winter</router-link>
        </div>
        <div class="navbar-item">
          <div class="buttons">
            <router-link 
              :to="{ path: '/log-in', query: { to: $route.fullPath } }" 
              class="button is-light ">
              Log in
            </router-link>
            <router-link to="/cart" class="button is-success">
              <span v-if="cartLength != 0">({{cartLength}})</span>
              <span class="icon"><i class="fas fa-shopping-cart"></i></span>
              <span>Cart</span>
            </router-link>
          </div>
        </div>
      </div>
    </nav>
</div>
</template>

<style>
.navbar {
    background-color: pink;
}
</style>