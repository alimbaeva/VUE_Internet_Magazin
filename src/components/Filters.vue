<template>
  <div class="filters">
    <div class="container">
      <div class="filter">
        <details class="filter__details">
          <summary class="filter__details_sum">
            <span class="filter__details_summary">FILTER </span>
            <svg
              class="img"
              width="15"
              height="10"
              viewBox="0 0 15 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.833333 10H4.16667C4.625 10 5 9.625 5 9.16667C5 8.70833 4.625 8.33333 4.16667 8.33333H0.833333C0.375 8.33333 0 8.70833 0 9.16667C0 9.625 0.375 10 0.833333 10ZM0 0.833333C0 1.29167 0.375 1.66667 0.833333 1.66667H14.1667C14.625 1.66667 15 1.29167 15 0.833333C15 0.375 14.625 0 14.1667 0H0.833333C0.375 0 0 0.375 0 0.833333ZM0.833333 5.83333H9.16667C9.625 5.83333 10 5.45833 10 5C10 4.54167 9.625 4.16667 9.16667 4.16667H0.833333C0.375 4.16667 0 4.54167 0 5C0 5.45833 0.375 5.83333 0.833333 5.83333Z"
                fill="black"
              ></path>
            </svg>
          </summary>
          <div class="filter__sidebar">
            <details class="filter__sidebar_details-in">
              <summary class="filter__sidebar_summary-in">
                <div class="filter__sidebar_cub"></div>
                <span class="filter__sidebar_title-in">CATEGORY</span>
              </summary>
              <ul class="filter__sidebar_items">
                <li class="filter__sidebar_item">
                  <a class="filter__sidebar_link" href="#"> Accessories</a>
                </li>
                <li class="filter__sidebar_item">
                  <a class="filter__sidebar_link" href="#"> Bags</a>
                </li>
                <li class="filter__sidebar_item">
                  <a class="filter__sidebar_link" href="#"> Denim</a>
                </li>
                <li class="filter__sidebar_item">
                  <a class="filter__sidebar_link" href="#">
                    Hoodies & Sweatshirts</a
                  >
                </li>
                <li class="filter__sidebar_item">
                  <a class="filter__sidebar_link" href="#"> Jackets & Coats</a>
                </li>
                <li class="filter__sidebar_item">
                  <a class="filter__sidebar_link" href="#"> Polos</a>
                </li>
                <li class="filter__sidebar_item">
                  <a class="filter__sidebar_link" href="#"> Shirts</a>
                </li>
                <li class="filter__sidebar_item">
                  <a class="filter__sidebar_link" href="#"> Shoes</a>
                </li>
                <li class="filter__sidebar_item">
                  <a class="filter__sidebar_link" href="#"> Sweaters & Knits</a>
                </li>
                <li class="filter__sidebar_item">
                  <a class="filter__sidebar_link" href="#"> T-Shirts</a>
                </li>
                <li class="filter__sidebar_item">
                  <a class="filter__sidebar_link" href="#"> Tanks</a>
                </li>
              </ul>
            </details>
            <details class="filter__sidebar_details-in">
              <summary class="filter__sidebar_summary-in">
                <div class="filter__sidebar_cub"></div>
                <span class="filter__sidebar_title-in">BRAND</span>
              </summary>
              <ul class="filter__sidebar_items">
                <li class="filter__sidebar_item">
                  <a class="filter__sidebar_link" href="#"> Accessories</a>
                </li>
                <li class="filter__sidebar_item">
                  <a class="filter__sidebar_link" href="#"> Bags</a>
                </li>
                <li class="filter__sidebar_item">
                  <a class="filter__sidebar_link" href="#"> Denim</a>
                </li>
                <li class="filter__sidebar_item">
                  <a class="filter__sidebar_link" href="#">
                    Hoodies & Sweatshirts</a
                  >
                </li>
                <li class="filter__sidebar_item">
                  <a class="filter__sidebar_link" href="#"> Jackets & Coats</a>
                </li>
                <li class="filter__sidebar_item">
                  <a class="filter__sidebar_link" href="#"> Polos</a>
                </li>
                <li class="filter__sidebar_item">
                  <a class="filter__sidebar_link" href="#"> Shirts</a>
                </li>
              </ul>
            </details>
            <details class="filter__sidebar_details-in">
              <summary class="filter__sidebar_summary-in">
                <div class="filter__sidebar_cub"></div>
                <span class="filter__sidebar_title-in">DESIGNER</span>
              </summary>
              <ul class="filter__sidebar_items">
                <li class="filter__sidebar_item">
                  <a class="filter__sidebar_link" href="#"> Accessories</a>
                </li>
                <li class="filter__sidebar_item">
                  <a class="filter__sidebar_link" href="#"> Bags</a>
                </li>
                <li class="filter__sidebar_item">
                  <a class="filter__sidebar_link" href="#"> Denim</a>
                </li>
                <li class="filter__sidebar_item">
                  <a class="filter__sidebar_link" href="#">
                    Hoodies & Sweatshirts</a
                  >
                </li>
              </ul>
            </details>
          </div>
        </details>
        <div class="choose">
          <details class="choose__detail">
            <summary class="choose__summary">
              <span class="choose__detail_tiltle">TRENDING NOW</span>
              <div class="choose__detail_cub"></div>
            </summary>
            <div class="choose__detail_size size">
              <div class="choose__detail_size-in">
                <input type="checkbox" id="XS" name="XS" />
                <label for="scales">XS</label>
              </div>
              <div class="choose__detail_size-in">
                <input type="checkbox" id="S" name="S" />
                <label for="scales">S</label>
              </div>
              <div class="choose__detail_size-in">
                <input type="checkbox" id="M" name="M" />
                <label for="scales">M</label>
              </div>
              <div class="choose__detail_size-in">
                <input type="checkbox" id="XS" name="XS" />
                <label for="scales">XS</label>
              </div>
            </div>
          </details>
          <details class="choose__detail">
            <summary class="choose__summary">
              <span class="choose__detail_tiltle">SIZE </span>
              <div class="choose__detail_cub"></div>
            </summary>
            <div class="choose__detail_size size-2">
              <div class="choose__detail_size-in">
                <input type="checkbox" id="XS" name="XS" />
                <label for="scales">XS</label>
              </div>
              <div class="choose__detail_size-in">
                <input type="checkbox" id="S" name="S" />
                <label for="scales">S</label>
              </div>
              <div class="choose__detail_size-in">
                <input type="checkbox" id="M" name="M" />
                <label for="scales">M</label>
              </div>
              <div class="choose__detail_size-in">
                <input type="checkbox" id="XS" name="XS" />
                <label for="scales">XS</label>
              </div>
            </div>
          </details>
          <details class="choose__detail">
            <summary class="choose__summary">
              <span class="choose__detail_tiltle">PRICE</span>
              <div class="choose__detail_cub"></div>
            </summary>
            <div class="choose__detail_size size-3">
              <div class="choose__detail_size-in">
                <input type="checkbox" id="XS" name="XS" />
                <label for="scales">XS</label>
              </div>
              <div class="choose__detail_size-in">
                <input type="checkbox" id="S" name="S" />
                <label for="scales">S</label>
              </div>
              <div class="choose__detail_size-in">
                <input type="checkbox" id="M" name="M" />
                <label for="scales">M</label>
              </div>
              <div class="choose__detail_size-in">
                <input type="checkbox" id="XS" name="XS" />
                <label for="scales">XS</label>
              </div>
            </div>
          </details>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Filters",
};
</script>

<style>
</style>