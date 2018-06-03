import Vue from 'vue'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

import Sortable from 'vue-sortable'

import App from '~/containers/App.vue'

Vue.use(VueMaterial)
Vue.use(Sortable)

new Vue({ // eslint-disable-line no-new
  el: '#app-container',
  components: { App },
  template: '<App />'
})
