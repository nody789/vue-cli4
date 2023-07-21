<template>
  <div class="home">
    <loading :active.sync="isLoading"> </loading>
    <div class="container">
      <nav aria-label="breadcrumb" class="breadmark">
        <ul class="breadcrumb mb-0">
          <li class="breadcrumb-item">
            <a href="#" @click.prevent="$router.push('/')">首頁</a>
          </li>
          <li class="breadcrumb-item">
            <a href="#" @click.prevent="$router.push('About')">商店</a>
          </li>
          <li class="breadcrumb-item">
            <a
              href="#"
              @click.prevent="
                $router.push({
                  name: 'About',
                  params: { category: product.category },
                })
              "
              >系列</a
            >
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            {{ product.title }}
          </li>
        </ul>
      </nav>
    </div>
    <div class="container">
      <div class="row product_info">
        <div class="col-lg-6 col-md-7">
          <div class="product_pic">
            <img  :src="product.imageUrl" :alt="product.title" />
          </div>
        </div>
        <div class="col-lg-6 col-md-5">
          <ul class="product_meta">
            <li>
              <h3>{{ product.title }}</h3>
            </li>
            <li>
              <p class="origin_pricesolo" v-if="!product.price">
                NT{{ product.origin_price | currency }}
              </p>
              <del class="origin_price" v-if="product.price"
                >NT{{ product.origin_price | currency }}</del
              >
            </li>
            <li>
              <p class="salesprice" v-if="product.price">
                NT{{ product.price | currency }}
              </p>
            </li>
            <li>
              <div
                class="numControl d-flex justify-content-start align-items-center"
              >
                <button
                  type="button"
                  class="btn-minus btn"
                  data-quantity="minus"
                  data-field="quantity"
                  @click.prevent="changeNum(-1)"
                >
                  <i class="fa fa-minus" aria-hidden="true"></i>
                </button>
                <input
                  class="amount"
                  type="number"
                  max="10"
                  min="1"
                  v-model="productnum"
                  @change="changeAmount(productnum)"
                />
                <button
                  type="button"
                  class="btn-plus btn"
                  data-quantity="plus"
                  data-field="quantity"
                  @click.prevent="changeNum(1)"
                >
                  <i class="fa fa-plus" aria-hidden="true"></i>
                </button>
              </div>
              <button
                type="button"
                class="btn-cart mt-2"
                @click.prevent="addToCart(product, productnum)"
              >
                <i class="fas fa-shopping-cart"></i>加入購物車
              </button>
            </li>
            <li>
              <p class="product_des">{{ product.description }}</p>
            </li>
            <li>
              <p class="product_con">{{ product.content }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="container mt-4">
      <h3>相關產品</h3>
      <div class="row">
        <div
          class="col-md-4 col-sm-6 col-12 d-flex justify-content-start align-item-center"
          v-for="item in filterSimilars"
          :key="item.id"
        >
          <div class="item-card" @click.prevent="goRelated(item.id)">
            <div class="product_pic">
              <img :src="item.imageUrl" :alt="item.title" />
              <div class="item-tag">特價中</div>
            </div>
            <div class="bottom">
              <h3>{{ item.title }}</h3>
              <div class="price">NT${{ item.origin_price }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: [], // 單件商品資料
      similarproducts: [],
      productId: '', // 儲存 router 傳遞的 id 參數
      cart: [], // 存 localstorage-購物車 資料
      isLoading: false,
      productnum: 1,
    };
  },
  methods: {
    // 取得單件商品資料
    getProduct() {
      const vm = this;
      vm.productId = vm.$route.params.product_id;
      vm.isLoading = true;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/product/${vm.productId}`;
      vm.$http.get(api).then((response) => {
        vm.product = response.data.product;
        vm.productnum = 1;
        console.log(vm.productId);
        vm.isLoading = false;
      });
    },
    // 取得所有商品資料
    getSimilarproducts() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APPCUSTOMPATH}/products/all`;
      vm.$http.get(api).then((response) => {
        vm.similarproducts = response.data.products;
      });
    },
    addToCart(product, qty = 1) {
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
      if (productIndex === -1) {
        const total = parseInt(product.origin_price * qty, 10);
        vm.$set(product, 'total', total);
        vm.$set(product, 'qty', qty);
        vm.cart.push(product);
      } else {
        const tempProduct = { ...vm.cart[productIndex] };
        tempProduct.qty += qty;
        const total = parseInt(tempProduct.origin_price * tempProduct.qty, 10);
        tempProduct.total = total;
        vm.cart.splice(productIndex, 1);
        vm.cart.push(tempProduct);
      }
      localStorage.setItem('cart', JSON.stringify(vm.cart));
      vm.$bus.$emit('message:push', '商品已加入購物車', 'success');
      vm.$bus.$emit('cart:get');
      vm.getCart();
    },
    getCart() {
      const vm = this;
      vm.cart = JSON.parse(localStorage.getItem('cart')) || [];
    },
    // 商品數量變更做判斷
    changeNum(qty) {
      const amount = this.productnum + qty;
      this.changeAmount(amount);
    },
    // 商品數量欄位變動時判斷
    changeAmount(num) {
      const qty = num;
      if (qty >= 10) {
        this.productnum = 10;
      } else if (qty <= 1) {
        this.productnum = 1;
      } else {
        this.productnum = qty;
      }
    },
    // 取得新一筆商品資料
    goRelated(id) {
      this.$router.push(`/ProductDetail/${id}`);
      this.getProduct(); // 轉換至對應商品的路徑，並且接住商品id參數，從api取得該商品資料，呈現於畫面上
    },
  },

  computed: {
    filterSimilars() {
      const vm = this;
      // 過濾出符合特定條件的產品（物件），並將過濾結果返回。
      return vm.similarproducts.filter(
        (item) => item.id !== vm.productId
          && item.category === vm.product.category,
      );
    },
  },
  created() {
    this.getProduct();
    this.getSimilarproducts();
    this.getCart();
  },
};
</script>
