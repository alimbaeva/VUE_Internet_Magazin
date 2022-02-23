<template>
  <header class="header">
    <div class="headering">
      <div class="container">
        <div class="header1">
          <div class="header1__nav">
            <div class="header1__nav_elements">
              <router-link class="header1__nav_a" to="/"
                ><img src="img/logo.svg" alt="logo"
              /></router-link>
              <a class="header1__nav_a" href="#"
                ><img class="form" src="img/search.svg" alt="поиск"
              /></a>
              <form class="header1__nav_form" action="">
                <input
                  class="header1__nav_form"
                  type="text"
                  name="serche"
                  placeholder="Поиск"
                />
              </form>
            </div>
            <div class="header1__nav_elements header1__nav_elements-it">
              <details class="header1__nav_menu">
                <summary>
                  <img
                    class="header1__nav_burger-menu"
                    src="/img/burger-menu.svg"
                    alt=""
                  />
                </summary>
                <div class="header1__nav_menu-items">
                  <h3 class="header1__nav_menu-title">MENU</h3>
                  <h3 class="header1__nav_tile">MAN</h3>
                  <a class="header1__nav_menu-link" href="">Accessories</a>
                  <a class="header1__nav_menu-link" href="">Bags</a>
                  <a class="header1__nav_menu-link" href="">Denim</a>
                  <a class="header1__nav_menu-link" href="">T-Shirts</a>

                  <h3 class="header1__nav_tile">WOMAN</h3>
                  <a class="header1__nav_menu-link" href="">Accessories</a>
                  <a class="header1__nav_menu-link" href="">Jackets & Coats</a>
                  <a class="header1__nav_menu-link" href="">Polos</a>
                  <a class="header1__nav_menu-link" href="">T-Shirts</a>
                  <a class="header1__nav_menu-link" href="">Shirts</a>

                  <h3 class="header1__nav_tile">KIDS</h3>
                  <a class="header1__nav_menu-link" href="">Accessories</a>
                  <a class="header1__nav_menu-link" href="">Jackets & Coats</a>
                  <a class="header1__nav_menu-link" href="">Polos</a>
                  <a class="header1__nav_menu-link" href="">T-Shirts</a>
                  <a class="header1__nav_menu-link" href="">Shirts</a>
                  <a class="header1__nav_menu-link" href="">Bags</a>
                </div>
              </details>
              <a
                href="regictration.html"
                class="header1__nav_a header1__nav_none"
                ><img
                  class="a"
                  src="img/personal-account.svg"
                  alt="личный кабинет"
              /></a>
              <router-link to="CartMain" class="header1__nav_a nav-number"
                ><img class="a" src="img/basket.svg" alt="корзина"
              /></router-link>
              <div class="header1__nav_namber-it">
                <p class="nav-namber-item">5</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "MainHeader",
};
</script>

<style scoped>
</style>
