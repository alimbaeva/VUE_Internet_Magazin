<template>
  <div class="catalog">
    <div class="catalog__link">
      <a href="#" class="catalog__link-item-a">
        <img class="catalog__item__img" :src="data.img" alt="товар" />
        <div class="catalog__link-text">
          <h2 class="catalog__items-link-h2">{{ data.title }}</h2>
          <p class="catalog__items-p-txt">{{ data.desc }}</p>
          <p class="catalog__items-link-paiy">$ {{ data.price }}</p>
        </div>
      </a>
      <div class="catalog__hidden">
        <a href="#" class="catalog__add">
          <img
            src="img/korzina.svg"
            alt="корзина"
            class="catalog__hidden-img"
          />
          <p class="catalog__hidden-txt">Add to Cart</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Catalog",
  props: ["data"],
};
</script>

<style>
</style>