<template>
  <div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="120">購買時間</th>
          <th>Email</th>
          <th width="120">購買款項</th>
          <th width="120">應付金額</th>
          <th width="100">是否付款</th>
          <th>刪除</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in orders" :key="item.id">
          <td>{{ item.create_at | dateFilter }}</td>
          <td>{{ item.user.email }}</td>
          <td>
            <ul class="list-unstyled">
              <li v-for="(product, i) in item.products" :key="i">
                {{ product.product.title }} 數量：{{ product.qty }}
                {{ product.product.unit }}
              </li>
            </ul>
          </td>
          <td>{{ item.total }}</td>
          <td>
            <span v-if="item.is_paid" class="text-success"> 已付款 </span>
            <span v-if="!item.is_paid" class="text-muted">尚未起用</span>
          </td>
          <td>
            <button
              type="button"
              class="btn btn-outline-danger btn-sm"
              @click="removeOrder(item.id)"
            >
              刪除
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <tbody></tbody>
  </div>
</template>
<script>
export default {
  data() {
    return {
      orders: '',
      isLoading: false,
    };
  },
  filters: {
    dateFilter(time) {
      const date = new Date(time * 1000);
      return date.toLocaleDateString();
    },
  },
  methods: {
    getOrders() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/orders`;
      vm.$http.get(api).then((response) => {
        console.log(response);
        vm.orders = response.data.orders;
        console.log('vm.order', vm.orders);
      });
    },
  },
  created() {
    this.getOrders();
  },
};
</script>
