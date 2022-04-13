<template>
  <div class="navigation">
    <nav class="navbar navbar-expand-lg navbar-light bg-orange bg-light">
      <div class="container px-lg-5">
      <router-link class="nav-item nav-link navbar-brand" to="/">Logo</router-link>
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
            <router-link class="nav-item nav-link active" to="/">Dashboard</router-link>
          </li>
        </ul>
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
.navigation .bg-orange {
  background-color: #fc8019 !important;
}
.bg-orange .navbar-brand,
.bg-orange .navbar-collapse a,
.bg-orange .navbar-collapse a.nav-link,
.navbar-light .navbar-brand:focus,
.navbar-light .navbar-brand:hover {
  color: #fff;
}
</style>
