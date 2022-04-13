<template>
  <div id="app">
     <NavMenu />
     <router-view/>
      <FooterBottom />
  </div>
</template>

<script>
import NavMenu from '@/components/NavMenu.vue'
import FooterBottom from '@/components/FooterBottom.vue'

export default {
  name: 'App',
  components: {
    NavMenu,
    FooterBottom
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
