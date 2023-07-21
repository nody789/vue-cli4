<template>
  <div>
    <nav class="navbar navbar-expand-md bg-primary p-0">
      <div class="container">
        <button
          class="navbar-toggler border-none d-md-none d-flex align-items-center"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" style="color: white"
            ><i class="fas fa-bars"></i
          ></span>
        </button>
        <a
          class="navbar-brand text-white d-flex justify-content-center align-items-center mr-0"
          href="index.html"
        >
          <img
            src="stylesheets/img/6icon.com_39151_f17IbY.png"
            height="40"
            alt=""
            class="d-none d-md-inline-block mr-3"
          />
          <div class="d-inline-block d-flex flex-column nav-title">
            <h1 class="text-title mb-0" style="letter-spacing: 5px">
              美味漢堡
            </h1>
            <span
              class="h6 align-self-center"
              style="letter-spacing: 5px; font-family: cursive"
              >delicious</span
            >
          </div>
        </a>

        <div class="navbar-collapse collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <router-link class="nav-link" to="/"> 首頁</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="about">
                餐點</router-link
              >
            </li>

            <li class="dropdown nav-item">
              <div
                class="nav-link"
                :class="{ disabled: avoidClick }"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                id="favorList"
              >
                <i class="fas fa-heart">
                  <span class="badge" v-if="favoriteslength > 0">{{
                    favoriteslength
                  }}</span>
                </i>
              </div>
              <div
                class="dropdown-menu dropdown-menu-right p-4"
                aria-labelledby="favorList"
              >
                <h5 class="text-center">我的最愛</h5>

                <table class="table">
                  <tbody>
                    <tr v-for="item in favorites" :key="item.id">
                      <td class="align-middle">
                        <button
                          type="button"
                          class="btn btn-outline-danger btn-sm"
                          @click="addTocart(item)"
                        >
                          <i class="fas fa-shopping-cart"></i>
                        </button>
                      </td>
                      <td class="align-middle">
                        {{ item.title }}
                      </td>

                      <td class="align-middle">
                        <button
                          type="button"
                          class="btn btn-outline-danger btn-sm"
                          @click="removeFavorites(item.id)"
                        >
                          <i class="far fa-trash-alt"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </li>
            <li class="dropdown nav-item">
              <div
                class="nav-link"
                :class="{ disabled: avoidClick }"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                id="cartList"
              >
                <i class="fas fa-shopping-cart">
                  <span class="badge" v-if="cartLength > 0">
                    {{ cartLength }}
                  </span>
                </i>
              </div>
              <div
                class="dropdown-menu dropdown-menu-right p-4"
                aria-labelledby="cartList"
              >
                <h5 class="text-center">購物車</h5>

                <table class="table">
                  <tbody>
                    <tr v-for="item in cart" :key="item.id">
                      <td class="align-middle">
                        {{ item.title }}
                      </td>
                      <td class="align-middle">
                        {{ item.qty }}{{ item.unit }}
                      </td>
                      <td class="align-middle">
                        {{ item.total | currency }}
                      </td>
                      <td class="align-middle">
                        <button
                          type="button"
                          class="btn btn-outline-danger btn-sm"
                          @click="removeCart(item.id)"
                        >
                          <i class="far fa-trash-alt"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colspan="3" class="text-right">總計</td>
                      <td class="text-right">{{ total | currency }}</td>
                    </tr>
                    <tr v-if="cart.final_total !== cart.total">
                      <td colspan="3" class="text-right text-success">
                        折扣價
                      </td>
                      <td class="text-right text-success">
                        {{ cart.final_total }}
                      </td>
                    </tr>
                  </tfoot>
                </table>
                <button
                  @click="$router.push('/Checkout')"
                  class="btn btn-primary btn-lg btn-block"
                >
                  結帳去
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
import $ from 'jquery';

export default {
  data() {
    return {
      favorites: {}, // 喜歡商品
      favoriteslength: 0, // 喜歡商品資料筆數
      total: 0, // 小計金額
      isLoading: false,
      cart: {},
      cartLength: 0,
    };
  },
  methods: {
    getfavorites() {
      const vm = this;
      vm.favorites = JSON.parse(localStorage.getItem('favorites')) || [];
      vm.favoriteslength = vm.favorites.length;
    },
    addTocart(product, qty = 1) {
      const vm = this;
      let productIndex = -1;
      vm.getCart();
      if (vm.cart.length > 0) {
        vm.cart.forEach((item, index) => {
          if (item.id === product.id) {
            productIndex = index;
          }
        });
      }
      // 代表購物車中沒有與要添加的商品相同的商品
      if (productIndex === -1) {
        const total = parseInt(product.origin_price * qty, 10);
        vm.$set(product, 'qty', qty);
        vm.$set(product, 'total', total);
        vm.cart.push(product);
      } else { // 代表購物車中已經有與要添加的商品相同的商品 創建一個臨時的商品對象 tempProduct
        //  { ...vm.cart[productIndex] };取得指定索引位置的商品物件。
        const tempProduct = { ...vm.cart[productIndex] };
        tempProduct.qty += qty;
        const total = parseInt(product.origin_price * tempProduct.qty, 10);
        tempProduct.total = total;
        vm.cart.splice(productIndex, 1);
        vm.cart.push(tempProduct);
      }
      localStorage.setItem('cart', JSON.stringify(vm.cart));
      vm.getCart();
      vm.$bus.$emit('message:push', '商品已加入購物車', 'success');
    },
    removeCart(id) {
      const vm = this;
      let removingIndex = -1;
      if (vm.cart.length > 0) {
        vm.cart.forEach((item, index) => {
          if (item.id === id) {
            removingIndex = index;
          }
        });
      }
      vm.cart.splice(removingIndex, 1);
      localStorage.setItem('cart', JSON.stringify(vm.cart));
      vm.$bus.$emit('message:push', '商品已刪除', 'success');

      vm.getCart();
    },
    removeFavorites(product) {
      const vm = this;
      const index = this.favorites.indexOf(product);
      this.favorites.splice(index, 1);
      localStorage.setItem('favorites', JSON.stringify(this.favorites));
      vm.$bus.$emit('message:push', '商品已刪除', 'success');
      this.$bus.$emit('productFavor:get');

      this.getfavorites();
    },
    getCart() {
      const vm = this;
      vm.cart = JSON.parse(localStorage.getItem('cart')) || [];
      vm.total = 0;
      vm.cartLength = 0;
      // 用foEach來循環裡面的商品
      vm.cart.forEach((item) => {
        vm.total += item.total;
        vm.cartLength += item.qty;
      });
      console.log(vm.cart);
    },
  },
  computed: {
    avoidClick() {
      if (
        this.$route.path === '/Checkout'
        || this.$route.path === '/buyer_info'
      ) {
        $('#cartList').dropdown('hide');
        $('#favorList').dropdown('hide');
        return true;
      }
      return false;
    },
  },
  mounted() {
    // 進入網頁/重新整理時，若購物車無資料則開啟dropdown-menu
    if (this.cartLength === 0) {
      $('#cartDropdown').dropdown('show');
    }
  },
  created() {
    this.getCart();
    this.$bus.$on('cart:get', () => this.getCart());
    this.getfavorites();
    this.$bus.$on('favor:get', () => this.getfavorites());
  },
};
</script>
<style >
.dropdown-menu {
  width: 330px;
}
</style>
