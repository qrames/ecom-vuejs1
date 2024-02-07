<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <div id="wrapper">
      <nav class="navbar is-dark">
        <div class="navbar-brand">
          <router-link to="/" class="navbar-item"><strong>Djackets</strong></router-link>
          <a class="'navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbar-meny">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div class="navbar-menu" id="navbar-menu">
          <div class="navbar-end">
            <router-link to="/summer" class="navbar-item">Summer</router-link>
            <router-link to="/winter" class="navbar-item">winter</router-link>
          </div>
          <div class="navbar-item">
            <div class="buttons">
              <router-link to="/log-in" class="button is-light">Log in</router-link>
              <router-link to="/cart" class="button is-success">
              <span class="icon"><i class="fas fa-shopping-cart"></i></span>
              <span>Cart</span>
              </router-link>
            </div>
          </div>
            
        </div>
      </nav>
      <section class="section">
        <router-veiw/>
      </section>
      <footer class="footer">
        <p class="has-text-contered">Copyright (c) 2024</p>
      </footer>
    </div>
  </header>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
