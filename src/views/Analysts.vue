<template>
  <div class="analysts">
    <Customers :reviews="reviews" />
  </div>
</template>

<script>
import Customers from '../components/Customers.vue'
export default {
  name: 'Analysts',
  components: {
    Customers
  },
  data() {
    return {
    }
  },
  computed: {
    reviews() {
      return this.$root.$data.reviews;
    }
  },
}
</script>
