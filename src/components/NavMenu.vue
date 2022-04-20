<template>
  <div class="navigation">
    <nav class="navbar navbar-expand-lg navbar-light bg-light bg-orange">
      <div class="container px-lg-5"> 
        <a class="navbar-brand" href="#">&nbsp;</a>       
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">              
              <router-link
                :to="{ name: 'home' }"
                class="nav-item nav-link active"
                id="dash"
                v-on:click.native="getRecipesDate"
                >Dashboard<span class="sr-only">(current)</span></router-link
              >
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <div class="input-group">
            <input
              class="form-control py-2 input-lg-width"
              type="search"
              value="search recieps"
              id="example-search-input"
              v-model="searchName"
            />
            <span class="input-group-append">
              <button
                id="searchbtn"
                class="btn btn-outline-secondary border-left-0 border btn_color"
                type="button"
                @click="searchRecips"
              >
                Search
              </button>
            </span>
            </div>
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: "NavMenu",
  data () {
    return {
          searchName: ""
    }
  },
  props: {
    msg: String,
  },
  methods: {
    ...mapActions(["getRandomDish", "getParticularFood"]),
    searchRecips() { 
      this.getParticularFood(this.searchName);
    },
    getRecipesDate(){  
      this.getRandomDish();  
    }

 
    
  },
};
</script>



