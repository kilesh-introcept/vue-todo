import Vue from 'vue'
import App from './App.vue'
import './index.css'

import { library } from '@fortawesome/fontawesome-svg-core'

import { faUserSecret, faCheck, faTrash, faPlus, faXmark, faPenToSquare, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret, faCheck, faTrash, faPlus, faXmark, faPenToSquare, faEllipsisVertical)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)


new Vue({
  el: '#app',
  render: h => h(App)
})
