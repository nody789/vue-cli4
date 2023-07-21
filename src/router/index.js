import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '*',
    redirect: '/',
  },
  {
    path: '/',
    name: 'Layout',
    component: () => import('../views/Layout.vue'),
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import('../views/front/Home.vue'),

      },
      {
        path: 'about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/front/About.vue'),
      },
      {
        path: 'ProductDetail/:product_id',
        name: 'ProductDetail',
        component: () => import('../views/front/ProductDetail.vue'),

      },
      {
        path: 'Checkout',
        name: 'Checkout',
        component: () => import('../views/front/checkout.vue'),
      },
      {
        path: 'Checkout1',
        name: 'Checkout1',
        component: () => import('../views/front/checkout-1.vue'),
      },
      {
        path: 'Checkout2/:order_id',
        name: 'CheckOut2',
        component: () => import('../views/front/checkout-2.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/admin',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue'),
    children: [
      {
        path: 'Products',
        name: 'Products',
        component: () => import('../views/back/Products.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: 'OrderList',
        name: 'OrderList',
        component: () => import('../views/back/OrderList.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: 'Coupon',
        name: 'Coupon',
        component: () => import('../views/back/Coupon.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: 'customer_order',
        name: 'CustomerOrder',
        component: () => import('../views/back/CustomerOrders.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
