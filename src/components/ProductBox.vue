<script setup>
defineProps({
  product: Object,
})
</script>

<template>
<div class="box">
    <figure class="image mb-4">
        <img :src="product.get_thumbnail" alt="">
    </figure>
    <h3>{{ product.name }}</h3>
    <p>{{ product.price }}</p>
    <p>{{ product.description }}</p>
    <router-link :to="product.get_absolute_url" class="fancy-btn" >
        detail
    </router-link>
</div>
</template>


<style>
.main {
    height: 100%;
}
.main div{
    height: 100%;

}

.fancy-btn {
  color: #fff;
  background: linear-gradient(315deg, #42d342 25%, #71ff64);
  border: none;
  padding: 5px 10px;
  margin: 5px;
  border-radius: 8px;
  cursor: pointer;
}

</style>