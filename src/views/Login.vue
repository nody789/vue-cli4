<template >
  <div class="home">
    <Navbar></Navbar>
    <div class="container px-0 px-md-3 my-md-6">
      <div class="row no-gutters justify-content-center">
        <div class="col-md-6">
          <div class="p-5 bg-primary d-md-block d-none">
            <h1 class="mt-2 mb-2 text-center text-white">後台管理員登錄</h1>
          </div>
          <div class="p-5 pt-md-0 bg-primary">
            <form class="form-signin" @submit.prevent="signin">
              <div
                class="form-square form-square-withicon d-flex justify-content-between mb-3"
              >
                <label
                  for="inputEmail"
                  class="sr-only form-square-icon-left fas fa-user"
                  >Email address</label
                >
                <input
                  type="email"
                  v-model="user.username"
                  id="inputEmail"
                  class="form-control form-input w-100 text-white"
                  placeholder="電子信箱/手機號碼"
                  required
                  autofocus
                />
              </div>
              <div
                class="form-square form-square-withicon d-flex justify-content-between mb-3"
              >
                <label
                  for="inputPassword"
                  class="sr-only form-square-icon-left fas fa-key"
                  >Password</label
                >
                <input
                  type="password"
                  v-model="user.password"
                  id="inputPassword"
                  class="form-control form-input w-100 text-white"
                  placeholder="請輸入使用者密碼"
                  required
                />
              </div>
              <div class="checkbox mb-3">
                <label>
                  <input type="checkbox" value="remember-me" /> 記住我
                </label>
              </div>
              <button
                class="btn btn-accent btn-block rounded-0 btn-lg py-3 text-primary"
                type="submit"
              >
                登入帳號
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '@/components/HomeFooter.vue';
import Navbar from '@/components/HomeNabar.vue';

export default {
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    signin() {
      const api = `${process.env.VUE_APP_APIPATH}/admin/signin`;
      const vm = this;
      this.$http.post(api, vm.user).then((response) => {
        console.log(response.data);
        if (response.data.success) {
          // 新增 Token 的存取方式，讓前端可自行將 Token 存入 Cookie 及發送的方法
          const { token } = response.data;
          const { expired } = response.data;
          document.cookie = `token=${token}; expires=${new Date(expired)};`;
          console.log(token, expired);
          vm.$router.push('/admin/products');
        } else {
          alert('登入失敗');
        }
      });
    },
  },
  created() {
    this.$bus.$emit('message', '這是一段消息', 'danger');
    console.log(this.$bus.$emit);
  },
};
</script>

<style scoped>
html,
body {
  height: 100%;
}

body {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
