<template>
  <div class="home">
    <div class="container px-0 px-md-3">
      <header class="header">
        <div
          class="header-main-image bg-cover"
          style="
            background-image: url(https://image.shutterstock.com/z/stock-photo-tasty-grilled-home-made-burger-with-beef-tomato-cheese-bacon-and-lettuce-on-a-light-stone-1482799622.jpg);
          "
        ></div>
        <h1 class="text-hide">想吃漢堡不需要理由</h1>
        <h2
          class="header-image-context text-img text-md-vertical"
          style="background-color: cadetblue"
        >
          想吃漢堡——
          <br />
          <span class="mt-4">是不需要理由的。</span>
        </h2>
      </header>
    </div>
    <section class="container my-6">
      <h1 class="page_title mb-3">餐點專區</h1>
      <div class="row justify-content-end">
        <div class="col-md-8 col-lg-4">
          <div class="input-group mb-3">
            <!-- <input type="text" class="form-control" placeholder="Search something..."
              v-model.trim="searchFilter" @input="searchProducts">
            <div class="input-group-append">
              <button class="btn btn-becare "
               type="button" @click="searchProducts">
                <i class="fas fa-search"></i>
              </button>
            </div> -->
              <input
          type="text"
          class="form-control"
          placeholder="Search"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          v-model.trim="searchFilter"
          @input="searchProducts"
        />
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button" @click='searchProducts'>
             <i class="fas fa-search"></i>
          </button>
        </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4 mb-5">
          <div class="list-group text-center">
            <Category
              :categories="categories"
              :currentOption="isCurrent"
              @getcategory="changeCategory"
            ></Category>
          </div>
        </div>
        <div class="col-md-8">
        <div v-if="(searchFilter || searchResult.length) && searchResult.length == 0"
           class="alert alert-warning h-100 d-flex justify-content-center
           align-items-center">
            抱歉,依您的關鍵字「{{searchFilter}}」搜尋不到產品呢...
          </div>
          <template v-else>
          <div class="row">
            <div  class="col-md-6" v-for="item in filterProducts" :key="item.id">
              <div
                class="item-card mb-5"
                @click="$router.push(`/ProductDetail/${item.id}`)"
              >
                <div
                  class="item-image"
                  :style="{ backgroundImage: `url(${item.imageUrl}` }"
                >
                  <div class="item-icon text-primary">
                    <i
                      class="fa fa-heart"
                      style="color: white"
                      aria-hidden="true"
                      v-if="setliked(item)"
                      @click.stop="changeFavorite(item)"
                    ></i>
                    <i
                      class="fa fa-heart"
                      v-else
                      @click.stop="changeFavorite(item)"
                    ></i>
                  </div>
                  <div class="item-tag">特價中</div>
                </div>
                <div class="item-body d-flex text-center">
                  <div class="item-name col">
                    {{ item.title }}
                  </div>
                  <div class="item-price col">
                    {{ item.price | currency }}
                  </div>
                </div>
                <div>
                  <button
                    href="#"
                    @click.stop="addtoCart(item)"
                    v-if="item.id !== status.loadingItem"
                    class="btn-lg col btn-primary-lighter btn"
                  >
                    加入購物車
                  </button>
                </div>
              </div>
            </div>
          </div>
          </template>
          <Pagination
            :pages="pagination"
            @switchpage="setPagination"
          ></Pagination>
        </div>
      </div>
    </section>
    <section class="py-5">
      <div class="container">
        <div class="row justify-content-center">
          <div
            class="col-md-5 d-flex align-items-center
            justify-content-center justify-content-md-start mb-4 mb-md-0"
          >
            <span class="mx-3 text-white h4 mb-0">定位你我的美味郵件</span>
          </div>
          <div class="col-md-5">
            <div
              class="form-square form-square-withicon d-flex justify-content-between"
            >
              <label
                for="subscription"
                class="form-square-icon-left fas fa-envelope"
                ><p class="text-hide">email</p></label
              >
              <input
                type="email"
                id="subscription"
                class="form-input w-100 text-white"
              />
              <button
                class="btn btn-primary btn-lg d-flex align-items-center fas fa-arrow-right"
              >
                <p class="text-hide">arrow</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import Pagination from '@/components/Pagination.vue';
import Category from '@/components/Category.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  components: {
    Pagination,
    Category,
  },

  data() {
    return {
      isCurrent: '全部商品', // 目前選擇類別
      currentPageNum: 1, // 目前頁碼
      showPages: '', // 顯示頁數
      pagination: {
        total_pages: '',
        current_page: '',
        has_pre: false,
        has_next: true,
      },
      status: {
        loadingItem: '', // 當筆點選商品 id
      },
      searchFilter: '',
      searchResult: [],
      cart: [],
      favorites: [], // 存 localstorage-案讚商品 資料
    };
  },
  methods: {
    // 取得所有商品資料
    // 頁碼變數處理 (pagination 呼叫)
    setPagination(page) {
      // 儲存目前點擊頁碼
      this.currentPageNum = page;
      // 總頁數
      this.pagination.total_pages = this.showPages;
      // 目前頁數
      this.pagination.current_page = this.currentPageNum;
      // 判斷目前頁碼，若小於1，則前一頁按鈕無法點選
      if (this.currentPageNum <= 1) {
        this.pagination.has_pre = false;
      } else {
        this.pagination.has_pre = true;
      }
      // 判斷目前頁碼，若大於總頁數，則後一頁按鈕無法點選
      if (this.currentPageNum >= this.pagination.total_pages) {
        this.pagination.has_next = false;
      } else {
        this.pagination.has_next = true;
      }
    },
    // 處理畫面一頁顯示8筆資料
    setShowData(data) {
      // 8筆資料為一頁，使用無條件進位
      const pages = Math.ceil(data.length / 8);
      // 更新目前顯示頁數
      this.showPages = pages;
      // 更新頁碼
      this.setPagination(this.currentPageNum);
      // 計算要顯示的資料
      const startNum = (parseInt(this.currentPageNum, 10) - 1) * 8;
      const endNum = (parseInt(this.currentPageNum, 10) - 1) * 8 + 8;
      return data.slice(startNum, endNum);
    },
    // 類別變動時，更新相關變數 (Category.vue 點擊呼叫)
    changeCategory(option = '全部商品') {
      // 目前點擊類別
      this.isCurrent = option;
      // 頁碼重設初始值
      this.currentPageNum = 1;
    },
    addtoCart(product, qty = 1) {
      const vm = this;
      // 才會從０開始
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
        const total = parseInt(product.price * qty, 10);
        // 不存在則加入陣列
        vm.$set(product, 'qty', qty);
        vm.$set(product, 'total', total);
        vm.cart.push(product);
      } else {
        // 存在則先計算數量
        const tempCart = { ...vm.cart[productIndex] };
        tempCart.qty += qty;
        const total = parseInt(product.price * tempCart.qty, 10);
        tempCart.total = total;
        // 刪除該筆資料
        vm.cart.splice(productIndex, 1);
        // 將新資料存入陣列
        vm.cart.push(tempCart);
      }

      // 儲存至 localStorage
      localStorage.setItem('cart', JSON.stringify(vm.cart));
      // 重新整理
      vm.getCart();
      // 重新整理 Navbar 購物車
      vm.$bus.$emit('message:push', '商品已加入購物車', 'success');
      vm.$bus.$emit('cart:get');

      vm.status.loadingItem = '';
    },
    // 取得購物車資料
    getCart() {
      this.cart = JSON.parse(localStorage.getItem('cart')) || [];
    },
    // 取得喜歡的商品
    getFavorites() {
      this.favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    },
    // 變更喜愛的商品資料(新增/移除)
    changeFavorite(product) {
      const vm = this;
      let delIndex = -1; // 儲存有在this.favorites中資料的index

      if (vm.favorites.length > 0) {
        vm.favorites.forEach((item, index) => {
          if (item.id === product.id) {
            delIndex = index;
          }
        });
      }
      if (delIndex === -1) {
        // 不存在則加入陣列
        vm.favorites.push(product);
      } else {
        // 存在則移除
        vm.favorites.splice(delIndex, 1);
      }

      // 儲存至 localStorage
      localStorage.setItem('favorites', JSON.stringify(vm.favorites));
      // 重新整理
      console.log(vm.favorites);
      vm.getFavorites();
      // 監聽並用於在不同的 Vue 組件之間進行通訊
      vm.$bus.$emit('favor:get');
    },
    // 判斷顯示/隱藏關注樣式
    setliked(item) {
      const liked = this.favorites.filter((favor) => favor.id === item.id);
      if (liked.length > 0) {
        return true;
      }

      return false;
    },
    searchProducts() {
      const vm = this;
      if (vm.searchFilter) {
        vm.searchResult = vm.products.filter((item) => item.title.match(vm.searchFilter));
        console.log(vm.searchResult);
      } else {
        vm.searchResult = [];
      }
    },
    ...mapActions(['getProducts']),
  },
  computed: {
    // 依類別篩選要顯示的商品資料
    filterProducts() {
      let tempProducts = this.products;
      // 判断是否进行类别筛选
      if (this.isCurrent && this.isCurrent !== '全部商品') {
        tempProducts = tempProducts.filter((item) => item.category === this.isCurrent);
      }

      // 判断是否进行搜索
      if (this.searchFilter) {
        const searchResult = tempProducts.filter((item) => item.title.includes(this.searchFilter));
        return this.setShowData(searchResult);
      }
      return this.setShowData(tempProducts);
    },
    ...mapGetters(['categories', 'products']),
  },
  created() {
    const vm = this;
    // 接類別變數 首頁category
    if (vm.$route.params.category) {
      vm.isCurrent = vm.$route.params.category;
    }
    vm.getProducts();
    vm.getCart();
    vm.getFavorites();
    // 用於在不同的 Vue 組件之間進行通訊
    vm.$bus.$on('productFavor:get', () => vm.getFavorites());
  },
};
</script>
