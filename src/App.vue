<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import 'bulma/css/bulma.min.css'
import { ref } from 'vue';

const showMobaleMenu = ref (false)

</script>

<template>
  <div id="wrapper">
    <nav class="navbar is-dark" role="navigation">
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
            <router-link to="/log-in" class="button is-light ">Log in</router-link>
            <router-link to="/cart" class="button is-success">
            <span class="icon"><i class="fas fa-shopping-cart"></i></span>
            <span>Cart</span>
            </router-link>
          </div>
        </div>
      </div>
    </nav>
  </div>
  <section class="section">
    <HelloWorld/>
  </section>

  <footer class="footer">
    <p class="has-text-contered is-dark">Copyright (c) 2024</p>
  </footer>

</template>