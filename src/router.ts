import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'TodoList',
      component: Home,
    },
    {
      path: '/create',
      name: 'AddTodo',
      // route level code-splitting
      // this generates a separate chunk (AddTodo.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "AddTodo" */ './views/AddTodo.vue'),
    },
    {
      path: '/details/:id',
      name: 'TodoDetails',
      // route level code-splitting
      // this generates a separate chunk (TodoDetails.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "TodoDetails" */ './views/TodoDetails.vue'),
    },
  ],
});
