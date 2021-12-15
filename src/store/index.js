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

const state = {
  posts: [
    {
      id: 'sample-post-id-1',
      title: 'Sample post with cover image',
      imgUrl: 'https://www.vets4pets.com/siteassets/species/cat/cat-close-up-of-side-profile.jpg?w=585&scale=down',
      content: `
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet nisl purus in. Posuere sollicitudin aliquam ultrices sagittis orci. Suspendisse in est ante in nibh mauris cursus mattis molestie. Pharetra magna ac placerat vestibulum lectus. Sit amet volutpat consequat mauris nunc. Ornare arcu odio ut sem nulla. Est ullamcorper eget nulla facilisi etiam dignissim diam quis. Pellentesque eu tincidunt tortor aliquam. Convallis tellus id interdum velit laoreet. Nibh cras pulvinar mattis nunc sed blandit libero volutpat sed. Vitae ultricies leo integer malesuada nunc vel risus. Auctor urna nunc id cursus metus aliquam eleifend. Vulputate sapien nec sagittis aliquam malesuada. Quis ipsum suspendisse ultrices gravida dictum fusce.</p>
        <p>Vitae nunc sed velit dignissim sodales ut eu sem. Habitasse platea dictumst quisque sagittis. Consequat mauris nunc congue nisi vitae. Imperdiet proin fermentum leo vel orci porta. Elit sed vulputate mi sit amet mauris. Pellentesque dignissim enim sit amet venenatis. Sed adipiscing diam donec adipiscing tristique. Maecenas accumsan lacus vel facilisis. Amet porttitor eget dolor morbi non arcu risus quis. Proin gravida hendrerit lectus a. In dictum non consectetur a erat. Lorem donec massa sapien faucibus et molestie ac feugiat. Iaculis at erat pellentesque adipiscing commodo elit at imperdiet. Ornare massa eget egestas purus viverra accumsan in nisl nisi. Pulvinar elementum integer enim neque volutpat.</p>
        <p>Senectus et netus et malesuada fames ac turpis egestas. Faucibus purus in massa tempor nec feugiat nisl pretium. Eu volutpat odio facilisis mauris sit amet. Convallis convallis tellus id interdum velit laoreet id donec ultrices. Donec massa sapien faucibus et molestie ac feugiat sed lectus. Euismod lacinia at quis risus sed. Dui accumsan sit amet nulla facilisi morbi tempus iaculis. Eget dolor morbi non arcu risus quis varius quam quisque. Vulputate sapien nec sagittis aliquam malesuada bibendum. Etiam dignissim diam quis enim lobortis. Nullam eget felis eget nunc lobortis. Morbi tincidunt augue interdum velit euismod. Velit sed ullamcorper morbi tincidunt ornare massa. Dui sapien eget mi proin.</p>
        <p>Neque egestas congue quisque egestas diam in arcu. Duis at consectetur lorem donec massa sapien faucibus et. Sit amet consectetur adipiscing elit duis tristique. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget egestas. Turpis massa tincidunt dui ut ornare lectus sit amet est. Nec feugiat in fermentum posuere urna nec tincidunt praesent. Malesuada nunc vel risus commodo viverra. Nulla posuere sollicitudin aliquam ultrices sagittis orci a. Quam nulla porttitor massa id. Velit euismod in pellentesque massa. In hendrerit gravida rutrum quisque non tellus. Sit amet commodo nulla facilisi nullam.</p>
        <p>In vitae turpis massa sed. Curabitur gravida arcu ac tortor dignissim convallis aenean. Erat pellentesque adipiscing commodo elit at. In nulla posuere sollicitudin aliquam ultrices sagittis. Mi in nulla posuere sollicitudin aliquam. Et ultrices neque ornare aenean euismod elementum nisi quis eleifend. Lacus viverra vitae congue eu consequat ac felis. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Nec sagittis aliquam malesuada bibendum arcu. Et tortor consequat id porta nibh venenatis cras sed. Urna condimentum mattis pellentesque id nibh. Sed sed risus pretium quam. Eget mi proin sed libero enim sed.</p>
      `
    },
    {
      id: 'sample-post-id-2',
      title: 'Sample post without cover image',
      imgUrl: '',
      content: `
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet nisl purus in. Posuere sollicitudin aliquam ultrices sagittis orci. Suspendisse in est ante in nibh mauris cursus mattis molestie. Pharetra magna ac placerat vestibulum lectus. Sit amet volutpat consequat mauris nunc. Ornare arcu odio ut sem nulla. Est ullamcorper eget nulla facilisi etiam dignissim diam quis. Pellentesque eu tincidunt tortor aliquam. Convallis tellus id interdum velit laoreet. Nibh cras pulvinar mattis nunc sed blandit libero volutpat sed. Vitae ultricies leo integer malesuada nunc vel risus. Auctor urna nunc id cursus metus aliquam eleifend. Vulputate sapien nec sagittis aliquam malesuada. Quis ipsum suspendisse ultrices gravida dictum fusce.</p>
        <p>Vitae nunc sed velit dignissim sodales ut eu sem. Habitasse platea dictumst quisque sagittis. Consequat mauris nunc congue nisi vitae. Imperdiet proin fermentum leo vel orci porta. Elit sed vulputate mi sit amet mauris. Pellentesque dignissim enim sit amet venenatis. Sed adipiscing diam donec adipiscing tristique. Maecenas accumsan lacus vel facilisis. Amet porttitor eget dolor morbi non arcu risus quis. Proin gravida hendrerit lectus a. In dictum non consectetur a erat. Lorem donec massa sapien faucibus et molestie ac feugiat. Iaculis at erat pellentesque adipiscing commodo elit at imperdiet. Ornare massa eget egestas purus viverra accumsan in nisl nisi. Pulvinar elementum integer enim neque volutpat.</p>
        <p>Senectus et netus et malesuada fames ac turpis egestas. Faucibus purus in massa tempor nec feugiat nisl pretium. Eu volutpat odio facilisis mauris sit amet. Convallis convallis tellus id interdum velit laoreet id donec ultrices. Donec massa sapien faucibus et molestie ac feugiat sed lectus. Euismod lacinia at quis risus sed. Dui accumsan sit amet nulla facilisi morbi tempus iaculis. Eget dolor morbi non arcu risus quis varius quam quisque. Vulputate sapien nec sagittis aliquam malesuada bibendum. Etiam dignissim diam quis enim lobortis. Nullam eget felis eget nunc lobortis. Morbi tincidunt augue interdum velit euismod. Velit sed ullamcorper morbi tincidunt ornare massa. Dui sapien eget mi proin.</p>
        <p>Neque egestas congue quisque egestas diam in arcu. Duis at consectetur lorem donec massa sapien faucibus et. Sit amet consectetur adipiscing elit duis tristique. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget egestas. Turpis massa tincidunt dui ut ornare lectus sit amet est. Nec feugiat in fermentum posuere urna nec tincidunt praesent. Malesuada nunc vel risus commodo viverra. Nulla posuere sollicitudin aliquam ultrices sagittis orci a. Quam nulla porttitor massa id. Velit euismod in pellentesque massa. In hendrerit gravida rutrum quisque non tellus. Sit amet commodo nulla facilisi nullam.</p>
        <p>In vitae turpis massa sed. Curabitur gravida arcu ac tortor dignissim convallis aenean. Erat pellentesque adipiscing commodo elit at. In nulla posuere sollicitudin aliquam ultrices sagittis. Mi in nulla posuere sollicitudin aliquam. Et ultrices neque ornare aenean euismod elementum nisi quis eleifend. Lacus viverra vitae congue eu consequat ac felis. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Nec sagittis aliquam malesuada bibendum arcu. Et tortor consequat id porta nibh venenatis cras sed. Urna condimentum mattis pellentesque id nibh. Sed sed risus pretium quam. Eget mi proin sed libero enim sed.</p>
      `
    }
  ],
  currentPost: { ...EMPTY_POST }
};

const getters = {
  posts: state => state.posts,
  currentPost: state => state.currentPost,
  getPostById: (state) => (id) => state.posts.filter(post => post.id === id)[0]
};

const mutations = {
  savePost(state) {
    const {
      posts,
      currentPost
    } = state;

    if(!currentPost.title || !currentPost.content) {
      return alert('Please make sure your post has a title and some content');
    }

    if(!currentPost.id) {
      state.posts.push({
        id: uniqid(),
        ...currentPost
      });
    } else {
      state.posts = [...posts.filter(item => item.id !== currentPost.id)];
      state.posts.push({
        ...currentPost
      });
    }

    state.currentPost = { ...EMPTY_POST };
    router.push('/');
  },
  setCurrentPostContent(state, postContent) {
    state.currentPost.content = postContent;
  },
  cancelEdit(state) {
    state.currentPost = { ...EMPTY_POST };
    router.push('/');
  },
  deletePost(state, postId) {
    const confirmed = confirm(`Are you sure you want to delete the post?`);
    if(confirmed) {
      state.posts = [...state.posts.filter(item => item.id !== postId)];
      router.push('/');
    }
  },
  editPost(state, postId) {
    const post = state.posts.filter(item => item.id === postId)[0];
    state.currentPost = post;
    router.push('/edit');
  }
};

const actions = {
  savePost: ({ commit }) => commit('savePost'),
  setCurrentPostContent: ({ commit }, postContent) => commit('setCurrentPostContent', postContent),
  cancelEdit: ({ commit }) => commit('cancelEdit'),
  deletePost: ({ commit }, post) => commit('deletePost', post),
  editPost: ({ commit }, post) => commit('editPost', post)
};

export const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});