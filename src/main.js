import Vue from 'vue'
import App from './App.vue'
import './index.css'

import { library } from '@fortawesome/fontawesome-svg-core'

import { faUserSecret, faCheck, faTrash, faPlus, faXmark, faPenToSquare, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import VueRouter from 'vue-router'
import Routes from './Routes'

library.add(faUserSecret, faCheck, faTrash, faPlus, faXmark, faPenToSquare, faEllipsisVertical, faXmark)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VueRouter)

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
