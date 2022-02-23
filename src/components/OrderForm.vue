<template>
  <div class="block-main__adress-form">
    <div class="">
      <h3 class="block-main__adress-title">SHIPPING ADRESS</h3>
      <form action="" class="block-main__adress-link">
        <input
          class="block-main__form-input active"
          type="text"
          name="city"
          placeholder="Bangladesh"
        />
        <input
          class="block-main__form-input"
          type="text"
          name="State"
          placeholder="State"
        />
        <input
          class="block-main__form-input"
          type="text"
          name="Postcode / Zip"
          placeholder="Postcode / Zip"
        />
        <button
          class="block-main__form-input block-main__from-button"
          type="button"
        >
          <p class="block-main__button-p">GET A QUOTE</p>
        </button>
      </form>
    </div>

    <div class="block-main__checkout">
      <div class="block-main__checkout-total">
        <p class="block-main__checkout-sub">SUB TOTAL $900</p>
        <p class="block-main__checkout-grand">
          GRAND TOTAL <strong>$900</strong>
        </p>
        <div class="block-main__line"></div>
        <form>
          <button class="block-main__checkout-button" type="button">
            PROCEED TO CHECKOUT
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrderForm",
};
</script>

<style>
</style>