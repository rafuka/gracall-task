import Vue from 'vue';
import Vuex from 'vuex';
import router from '@/router/router';

Vue.use(Vuex);

const EMPTY_POST = {
  title: '',
  imgUrl: '',
  content: '<p>Write your post\'s content here</p>'
};

export const store = new Vuex.Store({
  state: {
    posts: [
      {
        id: 'sample-post-id',
        title: 'Sample post',
        imgUrl: '',
        content: '<p>Lorem <i>ipsum</i>!!</p>'
      }
    ],
    currentPost: { ...EMPTY_POST }
  },
  getters: {
    posts: state => state.posts,
    currentPost: state => state.currentPost
  },
  mutations: {
    savePost(state) {
      console.log('SAVING');
      state.posts.push({
        id: '',
        ...state.currentPost
      });
      state.currentPost = { ...EMPTY_POST };
      router.push('/');
    },
    setCurrentPostContent(state, payload) {
      console.log('BOOM', payload);
      state.currentPost.content = payload;
    },
    cancelEdit(state) {
      console.log('CANCELLING');
      state.currentPost = { ...EMPTY_POST };
      router.push('/');
    }
  },
  actions: {
    savePost: ({ commit }) => commit('savePost'),
    setCurrentPostContent: ({ commit }, payload) => commit('setCurrentPostContent', payload),
    cancelEdit: ({ commit }) => commit('cancelEdit'),
  }
});