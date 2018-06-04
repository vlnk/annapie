import Vue from 'vue'
import Vuex from 'vuex'

import recipe from '~/store/recipe'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { recipe }
})
