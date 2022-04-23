import { router } from '~/router';
router.addRoute('DefaultLayout', {
  name: 'Login',
  path: '/login',
  component: () => import('./view.vue'),
  meta: { activePath: '/login' },
});
