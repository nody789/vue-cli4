<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="row mt-4">
      <div class="col-md-4 mb-4" v-for="item in products" :key="item.id">
        <div class="card border-0 shadow-sm">
          <div
            style="
              height: 150px;
              background-size: cover;
              background-position: center;
            "
            :style="{ backgroundImage: `url(${item.imageUrl})` }"
          ></div>
          <div class="card-body">
            <span class="badge badge-secondary float-right ml-2">{{
              item.category
            }}</span>
            <h5 class="card-title">
              <a href="#" class="text-dark">{{ item.title }}</a>
            </h5>
            <p class="card-text text-dark">{{ item.content }}</p>
            <div class="d-flex text-dark justify-content-between align-items-baseline">
              <div class="h5" v-if="!item.price">
                {{ item.origin_price }} 元
              </div>
              <del class="h6" v-if="item.price"
                >原價 {{ item.origin_price }} 元</del
              >
              <div class="h5" v-if="item.price">
                現在只要 {{ item.price }}元
              </div>
            </div>
          </div>
          <div class="card-footer d-flex">
            <button
              type="button"
              class="btn btn-outline-secondary btn-sm"
              @click="getProduct(item.id)"
            >
              <i
                class="fas fa-spinner fa-spin"
                v-if="status.loadingItem === item.id"
              ></i>
              查看更多
            </button>
            <button
              type="button"
              class="btn btn-outline-danger btn-sm ml-auto"
              @click="addtoCart(item.id)"
            >
              <i
                class="fas fa-spinner fa-spin"
                v-if="status.loadingItem === item.id"
              ></i>
              加到購物車
            </button>
          </div>
        </div>
      </div>
    </div>
    <table class="table">
      <thead>
        <th></th>
        <th>品名</th>
        <th>數量</th>
        <th>單價</th>
      </thead>
      <tbody>
        <tr v-for="item in cart.carts" :key="item.cart">
          <td class="align-middle">
            <button
              type="button"
              class="btn btn-outline-danger btn-sm"
              @click="removeCartItem(item.id)"
            >
              <i class="far fa-trash-alt"></i>
            </button>
          </td>
          <td class="align-middle">
            {{ item.product.title }}
            <div class="text-success" v-if="item.coupon">已套用優惠券</div>
          </td>
          <td class="align-middle">{{ item.qty }}{{ item.product.unit }}</td>
          <td class="align-middle">{{ item.final_total }}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="3" class="text-right">總計</td>
          <td class="text-right">{{ cart.total }}</td>
        </tr>
        <tr v-if="cart.final_total !== cart.total">
          <td colspan="3" class="text-right text-success">折扣價</td>
          <td class="text-right text-success">{{ cart.final_total }}</td>
        </tr>
      </tfoot>
    </table>
    <div class="input-group mb-3 input-group-sm">
      <input
        type="text"
        class="form-control"
        v-model="coupon_code"
        placeholder="請輸入優惠碼"
      />
      <div class="input-group-append">
        <button
          class="btn btn-outline-secondary"
          type="button"
          @click="addCouponCode()"
        >
          套用優惠碼
        </button>
      </div>
    </div>
    <div class="my-5 row justify-content-center">
      <validation-observer class="col-md-6" v-slot="{ invalid }">
        <form @submit.prevent="createOrder">
          <validation-provider
            rules="required|email"
            v-slot="{ errors, classes }"
          >
            <!-- 輸入框 -->
            <div class="form-group">
              <label for="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                :class="classes"
                v-model="form.user.email"
                class="form-control"
              />
              <!-- 錯誤訊息 -->
              <span class="invalid-feedback">{{ errors[0] }}</span>
            </div>
          </validation-provider>
          <validation-provider rules="required" v-slot="{ errors, classes }">
            <!-- 輸入框 -->
            <div class="form-group">
              <label for="username">收件人姓名</label>
              <input
                id="username"
                type="text"
                name="name"
                :class="classes"
                v-model="form.user.name"
                class="form-control"
              />
              <!-- 錯誤訊息 -->
              <span class="invalid-feedback">{{ errors[0] }}</span>
            </div>
          </validation-provider>
          <validation-provider rules="required||numeric" v-slot="{ classes }">
            <!-- 輸入框 -->
            <div class="form-group">
              <label for="usertel">收件人電話</label>
              <input
                id="usertel"
                type="tel"
                name="usertel"
                :class="classes"
                v-model="form.user.tel"
                class="form-control"
                placeholder="請輸入電話"
              />
              <!-- 錯誤訊息 -->
              <span class="invalid-feedback">{{ "請輸入電話" }}</span>
            </div>
          </validation-provider>

          <validation-provider rules="required" v-slot="{ classes }">
            <!-- 輸入框 -->
            <div class="form-group">
              <label for="useraddress">收件人地址</label>
              <input
                id="useraddress"
                type="text"
                name="address"
                :class="classes"
                v-model="form.user.address"
                class="form-control"
                placeholder="請輸入地址"
              />
              <!-- 錯誤訊息 -->
              <span class="invalid-feedback">{{ "請輸入地址" }}</span>
            </div>
          </validation-provider>

          <div class="form-group">
            <label for="comment">留言</label>
            <textarea
              name=""
              id="comment"
              class="form-control"
              cols="30"
              rows="10"
              v-model="form.message"
            ></textarea>
          </div>
          <div class="text-right">
            <button class="btn btn-danger" :disabled="invalid">送出訂單</button>
          </div>
        </form>
      </validation-observer>
    </div>

    <div
      class="modal fade"
      id="productModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              {{ product.title }}
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <img :src="product.imageUrl" class="img-fluid" alt="" />
            <blockquote class="blockquote mt-3">
              <p class="mb-0">{{ product.content }}</p>
              <footer class="blockquote-footer text-right">
                {{ product.description }}
              </footer>
            </blockquote>
            <div class="d-flex justify-content-between align-items-baseline ">
              <div class="h5" v-if="!product.price">
                {{ product.origin_price }} 元
              </div>
              <del class="h6" v-if="product.price"
                >原價 {{ product.origin_price }} 元</del
              >
              <div class="h5">現在只要 {{ product.price }}元</div>
            </div>

            <select name="" class="form-control mt-3" v-model="product.num">
              <option :value="num" v-for="num in 10" :key="num">
                選購{{ num }} {{ product.unit }}
              </option>
            </select>
          </div>
          <div class="modal-footer">
            <div class="text-muted text-nowrap mr-3">
              <strong v-if="product.price != product.origin_price"
                >小計{{ product.num * product.price }}</strong
              >
              <strong v-if="product.price == product.origin_price"
                >小計{{ product.num * product.origin_price }}</strong
              >
              元
            </div>
            <button
              type="button"
              class="btn btn-primary"
              @click="addtoCart(product.id, product.num)"
            >
              <i
                class="fas fa-spinner fa-spin"
                v-if="product.id === status.loadingItem"
              ></i>
              加到購物車
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
import { ValidationProvider } from 'vee-validate';

export default {

  components: {
    // ...
    ValidationProvider,
  },
  data() {
    return {
      products: [],
      product: {},
      cart: [],
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
      coupon_code: '',
      status: {
        loadingItem: '',
      },
      isLoading: false,
    };
  },
  methods: {
    getProducts() {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products`; // 'https://vue-course-api.hexschool.io/api/nody852/products';
      const vm = this;
      console.log(process.env.APIPATH, process.env.CUSTOMPATH);
      vm.isLoading = true;
      this.$http.get(api).then((response) => {
        console.log(response.data);
        vm.isLoading = false;
        vm.products = response.data.products;
      });
    },
    getProduct(id) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/product/${id}`; // 'https://vue-course-api.hexschool.io/api/nody852/products';
      const vm = this;
      console.log(process.env.APIPATH, process.env.CUSTOMPATH);
      vm.status.loadingItem = id;
      this.$http.get(api).then((response) => {
        console.log(response.data);
        vm.product = response.data.product;

        $('#productModal').modal('show');
        vm.status.isLoading = '';
      });
    },
    addtoCart(id, qty = 1) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`; // 'https://vue-course-api.hexschool.io/api/nody852/products';
      const vm = this;
      const cart = {
        product_id: id,
        qty,
      };
      vm.status.loadingItem = id;
      this.$http.post(api, { data: cart }).then((response) => {
        console.log(response.data);
        vm.status.isLoading = '';
        vm.getCart();
        $('#productModal').modal('hide');
      });
    },
    getCart() {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      const vm = this;
      vm.isLoading = true;
      this.$http.get(api).then((response) => {
        vm.cart = response.data.data;
        console.log(vm.cart);
        vm.isLoading = false;
      });
    },
    removeCartItem(id) {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${id}`;
      vm.isLoading = true;
      this.$http.delete(api).then(() => {
        this.getCart();
        vm.isLoading = false;
      });
    },
    addCouponCode() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/coupon`;
      const coupon = {
        code: vm.coupon_code,
      };
      vm.isLoading = true;
      this.$http.post(api, { data: coupon }).then((response) => {
        console.log(response);
        this.getCart();
        vm.isLoading = false;
      });
    },
    createOrder() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/order`;
      const order = vm.form;

      this.$http.post(api, { data: order }).then((response) => {
        // vm.cart = response.data.data;
        // vm.getCart();
        console.log('建立訂單', response);
        if (response.data.success) {
          vm.$router.push(`Customer_checkout/${response.data.orderId}`);
        }
        vm.isLoading = false;
      });
    },
  },
  created() {
    this.getProducts();
    this.getCart();
    this.$bus.$emit('message:push', '這裡是一段訊息', 'success');
  },
};
</script>
