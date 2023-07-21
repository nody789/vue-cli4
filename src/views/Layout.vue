<template>
  <div class="home container-fluid px-0">
    <Navber />
    <Alert />
    <loading :active.sync="isLoading"> </loading>
    <router-view />
    <HomeFooter />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeFooter from '@/components/HomeFooter.vue';
import Navber from '@/components/HomeNabar.vue';
import Alert from '@/components/AlertMessage.vue';

export default {
  name: 'Layout',
  components: {
    HomeFooter,
    Alert,
    Navber,
  },
  computed: {
    isLoading() {
      return this.$store.state.isLoading;
    },
  },
};
</script>
