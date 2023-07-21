<template>
    <div>
     <nav class="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">

              <router-link class="navbar-brand col-sm-3 col-md-2 mr-0" to="/Home">
              Company name
              </router-link>
  <input class="form-control form-control-dark w-100" type="text" placeholder="Search"
   aria-label="Search">
  <ul class="navbar-nav px-3">
    <li class="nav-item text-nowrap">
      <a class="nav-link" href="#" @click.prevent="signout()">Sign out4</a>
    </li>
  </ul>
</nav>

    </div>
</template>
<script>
export default {
  methods: {
    signout() {
      const vm = this;
      const api = `${process.env.APIPATH}logout`;
      this.$http.post(api).then((response) => {
        console.log(response);
        if (response.data) {
          vm.$router.push('/login');
        }
      });
    },
  },
};
</script>
