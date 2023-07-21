<template>
  <div class="home">
    <loading :active.sync="isLoading"> </loading>
    <div class="container checkOut">
      <ProgressStep :current="step" class="py-4"></ProgressStep>

      <h3>訂單資訊</h3>
      <div class="row listRow">
        <div class="col-md-6 col-12">
          <ul class="order">
            <li>
              <p>訂購日期 - {{ order.create_at | date }}</p>
            </li>
            <li class="orderList" v-for="item in order.products" :key="item.id">
              <div class="row">
                <div class="col-6 p-0">
                  <div
                    class="pro-title"
                    @click.prevent="
                      $router.push(`/product_detail/${item.product.id}`)
                    "
                  >
                    {{ item.product.title }}
                  </div>
                </div>
                <div class="col-2 p-0">
                  <div class="pro-qty">x{{ item.qty }}</div>
                </div>
                <div class="col-4 p-0">
                  <div class="pro-price">
                    NT{{ (item.final_total / item.qty) | floor | currency }}
                  </div>
                </div>
              </div>
            </li>
            <li class="pt-2 summaryBlock">
              <div class="row summaryList">
                <div class="col-8 p-0 summary">總計</div>
                <div class="col-4 p-0 summary">
                  NT{{ order.total | currency }}
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="col-md-6 col-12">
          <div class="order_info">
            <table class="table">
              <tr>
                <td class="title">姓名</td>
                <td>{{ order.user.name }}</td>
              </tr>
              <tr>
                <td class="title">電話</td>
                <td>{{ order.user.tel }}</td>
              </tr>
              <tr>
                <td class="title">Email</td>
                <td>{{ order.user.email }}</td>
              </tr>
              <tr>
                <td class="title">地址</td>
                <td>{{ order.user.address }}</td>
              </tr>
              <tr>
                <td class="title">付款方式</td>
                <td v-if="order.user.payment === 'CVS'">超商取貨付款</td>
                <td v-if="order.user.payment === 'CTP'">貨到付款</td>
              </tr>
              <tr>
                <td class="title">付款狀態</td>
                <td v-if="!order.is_paid" class="incomplete">尚未付款</td>
                <td v-else class="complete">付款完成</td>
              </tr>
            </table>
            <div class="endpay">
              <button
                type="button"
                v-if="!order.is_paid"
                @click.prevent="completePay"
              >
                確認付款
              </button>
              <button
                type="button"
                v-else
                @click.prevent="$router.push('about')"
              >
                回到商店
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      id="endPayModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">PURE SAVON</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div
            class="modal-body p-3 d-flex align-items-center justify-content-center"
          >
            <i class="fas fa-clipboard-check"></i>
            <h3 class="ml-2 text-dark">
              付款完成<br />
              我們會盡快處理您的訂單！
            </h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import $ from 'jquery';
import ProgressStep from '@/components/progressStep.vue';

export default {
  components: {
    ProgressStep,
  },
  data() {
    return {
      step: 3,
      isLoading: false,
      orderId: '',
      order: {
        user: {},
      },
    };
  },
  methods: {
    getOrder() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/order/${vm.orderId}`;
      vm.isLoading = true;
      vm.$http.get(api).then((response) => {
        if (response.data.success) {
          vm.order = response.data.order;
          console.log(vm.order);
        }
        vm.isLoading = false;
      });
    },
    completePay() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/pay/${vm.orderId}`;
      vm.isLoading = true;
      vm.$http.post(api).then((response) => {
        if (response.data.success) {
          vm.getOrder();
          $('#endPayModal').modal('show');
        } else {
          vm.$bus.$emit('message:push', '付款失敗', 'danger');
        }
        vm.isLoading = false;
      });
    },
  },
  created() {
    this.orderId = this.$route.params.order_id;
    this.getOrder();
  },
};
</script>
