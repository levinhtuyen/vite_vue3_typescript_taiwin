import { router } from '~/router';
router.addRoute('DefaultLayout', {
  name: 'HomePage',
  path: '/',
  component: () => import('./view.vue'),
  meta: { activePath: '/homepage' },
});
