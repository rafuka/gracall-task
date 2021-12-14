import Vue from 'vue';
import Vuex from 'vuex';
import uniqid from 'uniqid';
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
        id: 'sample-post-id-1',
        title: 'Sample post with cover image',
        imgUrl: 'https://www.vets4pets.com/siteassets/species/cat/cat-close-up-of-side-profile.jpg?w=585&scale=down',
        content: '<p>Lorem <i>ipsum</i>!!</p>'
      },
      {
        id: 'sample-post-id-2',
        title: 'Sample post without cover image',
        imgUrl: '',
        content: '<p>Lorem <i>ipsum</i>!!</p>'
      }
    ],
    currentPost: { ...EMPTY_POST }
  },
  getters: {
    posts: state => state.posts,
    currentPost: state => state.currentPost,
    getPostById: (state) => (id) => state.posts.filter(post => post.id === id)[0]
  },
  mutations: {
    savePost(state) {
      console.log('SAVING');
      if(!state.currentPost.id) {
        state.posts.push({
          id: uniqid(),
          ...state.currentPost
        });
      } else {
        state.posts = [...state.posts.filter(item => item.id !== state.currentPost.id)];
        state.posts.push({
          ...state.currentPost
        });
      }
      state.currentPost = { ...EMPTY_POST };
      router.push('/');
    },
    setCurrentPostContent(state, postContent) {
      console.log('BOOM', postContent);
      state.currentPost.content = postContent;
    },
    cancelEdit(state) {
      console.log('CANCELLING');
      state.currentPost = { ...EMPTY_POST };
      router.push('/');
    },
    deletePost(state, post) {
      console.log('DELETING');
      const confirmed = confirm(`Are you sure you want to delete post '${post.title}' ?`);
      if(confirmed) {
        state.posts = [...state.posts.filter(item => item.id !== post.id)];
      }
    },
    editPost(state, post) {
      console.log('EDITING');
      state.currentPost = post;
      router.push('/edit');
    }
  },
  actions: {
    savePost: ({ commit }) => commit('savePost'),
    setCurrentPostContent: ({ commit }, postContent) => commit('setCurrentPostContent', postContent),
    cancelEdit: ({ commit }) => commit('cancelEdit'),
    deletePost: ({ commit }, post) => commit('deletePost', post),
    editPost: ({ commit }, post) => commit('editPost', post)
  }
});