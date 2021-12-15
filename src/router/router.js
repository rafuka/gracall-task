import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from '../views/Dashboard';
import BlogPost from '../views/BlogPost';
import Editor from '../views/Editor';


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Dashboard,
    meta: { title: 'Home' }
  },
  {
    path: '/post/:id',
    name: 'Post',
    component: BlogPost
  },
  {
    path: '/edit',
    component: Editor,
    name: 'Edit'
  }
];

const router = new VueRouter({
  routes
});

export default router;