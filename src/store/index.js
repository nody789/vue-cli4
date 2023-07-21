import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import cartsModules from './carts';

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    isLoading: false,
    categories: [],
    products: [],
    isCurrent: '全部商品',
  },
  actions: {
    updateLoading(context, status) {
      context.commit('LOADING', status);
    },
    getProducts(context) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`;
      context.commit('LOADING', true);
      // return new Promise((resolve, reject) => {
      axios.get(api).then((response) => {
        context.commit('LOADING', true);
        // eslint-disable-next-line no-empty
        if (!response.data.success) {
          console.log('沒有資料');
        } else {
          // 儲存所有商品資料
          context.commit('PRODUCTS', response.data.products);
          context.commit('CATEGORIES', response.data.products);
          console.log('取得產品列表:', response);
          context.commit('LOADING', false);
          // resolve();
        }
      });
      // });
    },
  },
  mutations: {
    LOADING(state, status) {
      state.isLoading = status;
    },
    PRODUCTS(state, payload) {
      state.products = payload;
    },
    CATEGORIES(state, payload) {
      const categories = new Set();
      payload.forEach((item) => {
        categories.add(item.category);
      });
      state.categories = Array.from(categories);
      state.categories.unshift('全部商品');
    },
  },
  getters: {
    categories(state) {
      return state.categories;
    },
    products(state) {
      return state.products;
    },
  },
  modules: {
    cartsModules,
  },
});
