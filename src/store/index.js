import Vue from 'vue'
import Vuex from 'vuex'
import dish from './module/dish'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    dish
  }
})
