<template>
  <div>
           <button class="btn btn-dark btn-lg btn-block"
            v-for="(item,key) in categories" :key="key" :value='item'
            :class="{'active': item === currentOption}"
            @click.prevent="getCategory(item)">
        {{ item }}
           </button>
  </div>
</template>

<script>
export default {
  name: 'Category',
  props: ['categories', 'currentOption'],
  methods: {
    getCategory(option) {
      this.$emit('getcategory', option);
    },
  },
};
</script>
