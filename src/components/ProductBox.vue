<script setup>
defineProps({
  product: Object,
})
</script>

<template>
<div class="gridy-1 gridyhe-1">
    <div class="gridimg" :style="'background-image: url(' + product.get_thumbnail + ')'">

    </div>
    <div class="gridinfo">
        <h3>{{ product.name }}</h3>
        <div class="gridmeta">
            <p class="gridwhen">{{ product.price }}</p>

        </div>
        <p class="gridexerpt">{{ product.description }}</p>
        <router-link :to="product.get_absolute_url" class="grid-btn grid-more" >
            <span>Detail</span>
            <i class="fa fa-plus"></i>
        </router-link>
    </div>
</div>

</template>


<style>
</style>