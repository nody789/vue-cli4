<template>
  <div>
    <loading :active.sync="isLoading"> </loading>
    <div class="text-right mt-4">
      <button class="btn btn-primary" @click="openModel(true)">
        建立新的產品
      </button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="120">分類</th>
          <th>產品名稱</th>
          <th width="120">原價</th>
          <th width="120">售價</th>
          <th width="100">是否啟用</th>
          <th width="120">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in products" :key="item.id">
          <td>{{ item.category }}</td>
          <td>{{ item.title }}</td>
          <td class="text-right">
            {{ item.origin_price | currency }}
          </td>
          <td class="text-right">
            {{ item.price | currency }}
          </td>
          <td>
            <span v-if="item.is_enabled" class="text-success">啟用</span>
            <span v-else>未啟用</span>
          </td>
          <td>
            <div class="btn-group">
              <button
                class="btn btn-outline-primary btn-sm"
                @click="openModel(false, item)"
              >
                編輯
              </button>
              <button
                class="btn btn-outline-primary btn-sm"
                @click="opendelModal(item)"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <Pagination
     :pages="pagination"
      @switchpage="getProducts"
    ></Pagination>

    <div
      class="modal fade text-dark"
      id="productsModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"

    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-dark text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span>新增產品</span>
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
            <div class="row">
              <div class="col-sm-4">
                <div class="form-group">
                  <label for="image">輸入圖片網址</label>
                  <input
                    type="text"
                    class="form-control"
                    id="image"
                    v-model="tempProducts.imageUrl"
                    placeholder="請輸入圖片連結"
                  />
                </div>
                <div class="form-group">
                  <label for="customFile"
                    >或 上傳圖片
                    <i
                      class="fas fa-spinner fa-spin"
                      v-if="status.fileUploading"
                    ></i>
                  </label>
                  <input
                    type="file"
                    id="customFile"
                    class="form-control"
                    ref="files"
                    @change="uploadFile"
                  />
                </div>
                <img
                  :src="tempProducts.imageUrl"
                  img="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=828346ed697837ce808cae68d3ddc3cf&auto=format&fit=crop&w=1350&q=80"
                  class="img-fluid"
                  alt=""
                />
              </div>
              <div class="col-sm-8">
                <div class="form-group">
                  <label for="title">標題</label>
                  <input
                    v-model="tempProducts.title"
                    type="text"
                    class="form-control"
                    id="title"
                    placeholder="請輸入標題"
                  />
                </div>

                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="category">分類</label>
                    <select
                      v-model="tempProducts.category"
                      type="text"
                      class="form-control custom-select"
                      id="category"
                    >
                      <option v-for="item in category" :key="item.id">
                        {{ item }}
                      </option>
                    </select>

                  </div>
                  <div class="form-group col-md-6">
                    <label for="price">單位</label>
                    <input
                      v-model="tempProducts.unit"
                      type="unit"
                      class="form-control"
                      id="unit"
                      placeholder="請輸入單位"
                    />
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="origin_price">原價</label>
                    <input
                      v-model="tempProducts.origin_price"
                      type="number"
                      class="form-control"
                      id="origin_price"
                      placeholder="請輸入原價"
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="price">售價</label>
                    <input
                      v-model="tempProducts.price"
                      type="number"
                      class="form-control"
                      id="price"
                      placeholder="請輸入售價"
                    />
                  </div>
                </div>
                <hr />

                <div class="form-group">
                  <label for="description">產品描述</label>
                  <textarea
                    v-model="tempProducts.description"
                    type="text"
                    class="form-control"
                    id="description"
                    placeholder="請輸入產品描述"
                  ></textarea>
                </div>
                <div class="form-group">
                  <label for="content">說明內容</label>
                  <textarea
                    v-model="tempProducts.content"
                    type="text"
                    class="form-control"
                    id="content"
                    placeholder="請輸入產品說明內容"
                  ></textarea>
                </div>
                <div class="form-group">
                  <div class="form-check">
                    <input
                      v-model="tempProducts.is_enabled"
                      :true-value="1"
                      :false-value="1"
                      class="form-check-input"
                      type="checkbox"
                      id="is_enabled"
                    />
                    <label class="form-check-label" for="is_enabled">
                      是否啟用
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-outline-secondary"
              data-dismiss="modal"
            >
              取消
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click="updateProduct()"
            >
              確認
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      id="delProductModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-danger text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span>刪除產品</span>
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
            是否刪除
            <strong class="text-danger">{{ tempProducts.title }}</strong>
            商品(刪除後將無法恢復)。
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-outline-secondary"
              data-dismiss="modal"
            >
              取消
            </button>
            <button
              type="button"
              class="btn btn-danger"
              @click="deleteProduct()"
            >
              確認刪除
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
import Pagination from '@/components/Pagination-2.vue';

export default {
  components: {
    Pagination,
  },
  data() {
    return {
      products: [],
      pagination: {
      },
      tempProducts: {},
      isNew: false,
      isLoading: false,
      status: {
        fileUploading: false,
      },
      category: ['義大利麵', '漢堡', '燉飯', '點心'],
    };
  },
  methods: {
    getProducts(page = 1) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products?page=${page}`; // 'https://vue-course-api.hexschool.io/api/nody852/products';
      const vm = this;
      console.log(process.env.APIPATH, process.env.CUSTOMPATH);
      vm.isLoading = true;
      this.$http.get(api).then((response) => {
        console.log(response.data);
        vm.isLoading = false;
        vm.products = response.data.products;
        vm.pagination = response.data.pagination;
      });
    },
    // 遠端取得資料再開啟model
    openModel(isNew, item) {
      if (isNew) {
        this.tempProducts = {};
        this.isNew = true;
      } else {
        this.tempProducts = { ...item };
        this.isNew = false;
      }
      $('#productsModal').modal('show');
    },
    opendelModal(item) {
      this.tempProducts = { ...item };
      console.log(this.tempProducts.title);
      $('#delProductModal').modal('show');
    },
    updateProduct() {
      let api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product`; // 'https://vue-course-api.hexschool.io/api/nody852/products';
      let httpMethod = 'post';
      const vm = this;
      if (!vm.isNew) {
        api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product/${vm.tempProducts.id}`;
        httpMethod = 'put';
      }
      console.log(process.env.VUE_APP_APIPATH, process.env.VUE_APP_CUSTOMPATH);
      this.$http[httpMethod](api, { data: vm.tempProducts }).then(
        (response) => {
          console.log(response.data);
          if (response.data.success) {
            $('#productsModal').modal('hide');
            vm.getProducts();
          } else {
            $('#productsModal').modal('hide');
            vm.getProducts();
            console.log('新增失敗');
          }
        },
      );
    },
    deleteProduct() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product/${vm.tempProducts.id}`;
      vm.isloading = true;
      this.$http.delete(api).then(() => {
        vm.getProducts(); // 刪除該筆資料後，重新取得更新後的購物車內容
        $('#delProductModal').modal('hide');
        vm.isloading = false;
      });
    },
    uploadFile() {
      console.log(this);
      const uploadedFile = this.$refs.files.files[0];
      const vm = this;
      const formData = new FormData();
      formData.append('file-to-upload', uploadedFile);
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/upload`;
      vm.status.fileUploading = true;
      vm.$http
        .post(url, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((response) => {
          console.log(response.data);
          vm.status.fileUploading = false;
          if (response.data.success) {
            console.log(vm.tempProducts);
            vm.$set(vm.tempProducts, 'imageUrl', response.data.imageUrl);
          } else {
            this.$bus.$emit('message:push', response.data.message, 'danger');
          }
        });
    },
  },
  created() {
    // Chrome 的跨域限制， Token 的存取方式，讓前端可自行將 Token 存入 Cookie 及發送的方法
    const myCookie = document.cookie.replace(
      /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
      '$1',
    );
    console.log('myCookie', myCookie);
    this.$http.defaults.headers.common.Authorization = myCookie;

    this.getProducts();
    this.$bus.$emit('message:push', '這裡是一段訊息', 'success');
  },
};
</script>
