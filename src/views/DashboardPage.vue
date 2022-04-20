<template>
  <div class="home">    
    <!-- Page Content-->
    <section class="pt-4">
      <div class="container px-lg-5">
        <div class="row bg_ref gx-lg-5">
          
          <div class="col-lg-4 col-xxl-4 mb-5" v-for="list in listData" :key="list.idMeal">
            <div class="card bg-light h-100">              
              <img :src="list.strMealThumb" />              
              <div class="card-body text-left px-1">
                <h2 class="f_title">{{list.strMeal}}</h2>                 
                <button
                class="btn bg-dark btn-outline-secondary border-left-0 border mt-4 mx-auto d-block btn_clr"
                type="button"                
              >
                <router-link id="product" :to="`/detailsPage/${list.strMeal}`">Product Details</router-link>
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

import {mapGetters,mapActions} from 'vuex';
export default {
  name: "DashboardPage",
  components: {},
  data() {
    return {
      mealName: "",
      image: "",
      searchName: ""
    };
  },
  computed: mapGetters(['listData']),
  created () {
  this.getRandomDish()
  },
  methods: {
    ...mapActions(["getRandomDish"])    
  },
};
</script>

