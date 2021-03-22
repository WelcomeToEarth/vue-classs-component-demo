import {
  createRouter,
  RouteRecordRaw,
  createWebHashHistory,
} from 'vue-router';
import store from '/@/store';

const routes: RouteRecordRaw[] = [{
  path: '',
  name: 'base',
  redirect: { name: 'my' },
  component: () => import('/@/layouts/base.vue'),
  children: [{
    path: 'work',
    name: 'work',
    component: () => import('/@/layouts/work.vue'),
    children: [{
      path: 'my',
      name: 'my',
      component: () => import('/@/views/my.vue'),
    }, {
      path: 'lib',
      name: 'lib',
      component: () => import('/@/views/lib.vue'),
    }],
  }, {
    path: 'editor',
    name: 'editor',
    component: () => import('/@/views/editor.vue'),
  }],
}];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
router.beforeEach(to => {
  if (to.meta.noUser) return;
  store.dispatch('user/requestUser');
});

export default router;
