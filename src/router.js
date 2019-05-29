import Vue from 'vue';
import VueRouter from 'vue-router';

import Foo from './views/Foo.vue';
import Bar from './views/Bar.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar },
  ],
});

export default router;
