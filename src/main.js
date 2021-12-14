import Vue from 'vue'
import App from './App.vue'
import router from './router/router';
import { store } from './store';
import CKEditor from '@ckeditor/ckeditor5-vue2';
import './normalize.css';

Vue.use(CKEditor);

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');
