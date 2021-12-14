import Vue from 'vue';
import App from './App.vue';
import router from './router/router';
import { store } from './store';

import CKEditor from '@ckeditor/ckeditor5-vue2';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faEllipsisV,
  faTrash,
  faEdit
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import './normalize.css';

Vue.use(CKEditor);

library.add(faEllipsisV);
library.add(faTrash);
library.add(faEdit);

Vue.component('fa-icon', FontAwesomeIcon)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');
