<script setup>
import { useCartStore } from '../stores/cart';

const cartStore = useCartStore()


defineProps({
    product: Object,
})
</script>

<template>
    <tr class="cart-line">
        <th class="t-detail">
            <figure class="image mb-4">
                <img :src="product.get_thumbnail" alt="">
            </figure>
        </th>
        <th class="t-price">{{product.price}}</th>
        <th class="t-quantity">
            
            <div class="control">
                {{product.quantity}}
                <a class="button is-dark is-small" @click="cartStore.addItem(product)">+</a>
                <a class="button is-dark is-small" @click="cartStore.subtractItem(product)">-</a>
            </div>
        </th>
        <th class="t-total">{{ cartStore.getPrice(product.id) }}</th>
    </tr>
</template>

<style scoped>
.image {
    max-height: 320px;
}
.image > img{
    max-height: 100%;
    width: auto;
}
</style>
