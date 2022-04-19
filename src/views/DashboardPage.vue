<template>
  <div class="home">
    <header class="py-5">
      <div class="container px-lg-5">
        <div class="row d-flex justify-content-center">
          <div class="input-group col-md-6">
            <input
              class="form-control py-2"
              type="search"
              value="search recieps"
              id="example-search-input"
              v-model="searchName"
            />
            <span class="input-group-append">
              <button
              id="searchbtn"
                class="btn btn-outline-secondary border-left-0 border"
                type="button"
                @click="searchRecips"
              >
                Search
              </button>
            </span>
          </div>
        </div>
      </div>
    </header>
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
      searchName: "",
      searchData: [],
    };
  },
  computed: mapGetters(['listData']),
  created () {
  this.getRandomDish()
  },
  methods: {
    ...mapActions(["getRandomDish","getParticularFood"]),
    searchRecips() { 
      this.getParticularFood(this.searchName);
    },
 
    
  },
};
</script>
<style scoped>
.bg_ref .card {
  padding: 15px;
  border: 1px solid #d3d5df;
}
.bg_ref .card:hover {
  padding: 15px;
  border: 1px solid #d3d5df !important;
  box-shadow: 0 4px 7px 0 rgb(218 220 230 / 60%);
}
.dish_desc {
  font-size: 0.8rem;
}
.f_title {
  font-size: 1rem;
  font-weight: bold;
}
.btn:focus, .btn:active:focus, .btn.active:focus{
    outline:none;
    box-shadow:none;
}
.btn_clr a{color:#fff;}
.btn_clr a:hover{color:#fc8019;}
</style>
