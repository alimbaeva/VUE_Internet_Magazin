import { createStore } from 'vuex'

export default createStore({
  state: {
    catalog: [],
    cart: []
  },
  getters: {
    getCatalog: (state) => [...state.catalog],
    getCart: (state) => [...state.cart]
  },
  mutations: {
    setCatalog: (state, catalog) => { state.catalog = catalog },
    setCart: (state, cart) => { state.cart = cart },
    addToCart: (state, product) => {
      const existProduct = state.cart.find((item) => item.id == product.id)
      if (existProduct) {
        existProduct.quantity++
      } else {
        state.cart.push(Object.assign({ quantity: 1, product }))
      }
      state.cart.push(product)
    },
    removeFromCart: (state, id) => {
      const idx = state.cart.findIndex((item) => item.id === id)
      if (state.cart[idx] > 1) {
        state.cart[idx].quantity--
      } else {
        state.cart.splice(idx, 1)
      }
      state.cart.splice(idx, 1);
    }
  },
  actions: {
    loadCatalog({ commit }) {
      return fetch(`/api/v1/catalog`)
        .then((response) => response.json())
        .then((data) => {
          commit('setCatalog', data);
        })
    },
    loadCart({ commit }) {
      return fetch(`/api/v1/cart`)
        .then((response) => response.json())
        .then((data) => {
          commit('setCart', data);
        })
    },
    addToCart({ commit }, product) {
      return fetch(`/api/v1/cart`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product)
      })
        .then(() => {
          commit('addToCart', product);
        })
    },
    removeFromCart({ commit }, id) {
      return fetch(`/api/v1/cart/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
      })
        .then(() => {
          commit('removeFromCart', id);
        })
    }
  }
})
