<template>
  <div class="navigation">
    <nav class="navbar navbar-expand-lg navbar-light bg-orange bg-light">
      <div class="container px-lg-5">        
          <!-- <router-link class="nav-item nav-link navbar-brand" id="logo" to="/">Logo</router-link> -->        
        <button
          type="button"
          class="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">          
          <div class="navbar-nav ms-auto">
            <router-link class="nav-item nav-link active" id="dash" to="/">Dashboard</router-link>                      
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavMenu",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.navigation .bg-orange {background-color: #fc8019 !important;}
.bg-orange .navbar-brand, .bg-orange .navbar-collapse a, .bg-orange .navbar-collapse a.nav-link{color:#fff}
</style>
