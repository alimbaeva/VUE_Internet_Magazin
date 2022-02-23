<template>
  <main class="cart">
    <div class="container">
      <section class="cart__two">
        <div class="block-main">
          <product-into-cart></product-into-cart>
        </div>
        <order-form></order-form>
      </section>
      <cart-control-buttons></cart-control-buttons>
    </div>
  </main>
</template>

<script>
import CartControlButtons from "../components/CartControlButtons.vue";
import OrderForm from "../components/OrderForm.vue";
import ProductIntoCart from "../components/ProductIntoCart.vue";
export default {
  components: { ProductIntoCart, CartControlButtons, OrderForm },
  name: "CartMain",
};
</script>

<style>
</style>