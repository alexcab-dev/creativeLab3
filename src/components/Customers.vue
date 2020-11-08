<template>
  <div class="wrapperHie">
    <h1>Customer Reviews</h1>
    <div class="customer" v-for="review in reviews" :key="review.id">
      <div class="info">
        <div class="container" id="only">
          <div class="row">
            <div class="col-lg-6">
              <h3>{{review.name}}</h3>
              <img :src="review.image">
            </div>
            <div class="col-lg-6">
              <div class="section">
                <h2>Review</h2>
                <p>{{review.review}}</p>
              </div>
              <div class="section">
                <h2>Business Name</h2>
                <p>{{review.business}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
  export default {
    name: 'Customers',
    props: {
      reviews: Array
    },
  }
</script>

<style scoped>
  img {
    height: 270px;
    border-radius: 30px;
  }
  .wrapperHie {
    text-align: -moz-center;
  }
  .container {
    overflow: hidden;
    margin: 100px;
    background-color: #2a304f !important;
    border-radius:25px
  }
  .container p {
    font-size: 25px;
    font-weight: 900;
    letter-spacing: 1.01px;
  }
    .col-lg-6 .section {
    border-radius: 30px;
    margin: 10px;
    padding: 30px;
    background-color: #000000 !important;
  }
</style>
