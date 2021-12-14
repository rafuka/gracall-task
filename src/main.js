import Vue from 'vue';
import App from './App.vue';
import router from './router/router';
import { store } from './store';

import CKEditor from '@ckeditor/ckeditor5-vue2';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faEllipsisV,
  faTrash,
  faEdit,
  faPlus
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import './normalize.css';

Vue.use(CKEditor);

library.add(faEllipsisV);
library.add(faTrash);
library.add(faEdit);
library.add(faPlus);

Vue.component('fa-icon', FontAwesomeIcon)

// The following directive was taken from: https://gist.github.com/AnalyzePlatypus/22ca31c8f953db92eedadfe930bce31f
Vue.directive('click-outside',{
  bind: function (el, binding, vnode) {
    el.eventSetDrag = function () {
      el.setAttribute('data-dragging', 'yes');
    }
    el.eventClearDrag = function () {
      el.removeAttribute('data-dragging');
    }
    el.eventOnClick = function (event) {
      var dragging = el.getAttribute('data-dragging');
      // Check that the click was outside the el and its children, and wasn't a drag
      if (!(el == event.target || el.contains(event.target)) && !dragging) {
        // call method provided in attribute value
        vnode.context[binding.expression](event);
      }
    };
    document.addEventListener('touchstart', el.eventClearDrag);
    document.addEventListener('touchmove', el.eventSetDrag);
    document.addEventListener('click', el.eventOnClick);
    document.addEventListener('touchend', el.eventOnClick);
  }, unbind: function (el) {
    document.removeEventListener('touchstart', el.eventClearDrag);
    document.removeEventListener('touchmove', el.eventSetDrag);
    document.removeEventListener('click', el.eventOnClick);
    document.removeEventListener('touchend', el.eventOnClick);
    el.removeAttribute('data-dragging');
  },
});

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');
