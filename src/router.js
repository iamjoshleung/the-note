import Vue from 'vue';
import Router from 'vue-router';
import Meta from 'vue-meta';
import Home from './views/Home.vue';

Vue.use(Router);
Vue.use(Meta);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/write',
      name: 'write',
      component: () => import(/* webpackChunkName: "write" */ './views/Write.vue'),
    },
    {
      path: '/note/:id',
      name: 'note',
      component: () => import(/* webpackChunkName: "note" */ './views/Note.vue'),
    },
    {
      path: '/note/:id/edit',
      name: 'edit',
      component: () => import(/* webpackChunkName: "note-edit" */ './views/NoteEdit.vue'),
    },
    {
      path: '/404',
      name: '404',
      component: () => import(/* webpackChunkName: "not-found" */ './views/NotFound.vue'),
    },
    {
      path: '*',
      redirect: '/404',
    },
  ],
});
