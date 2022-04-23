import { router } from '~/router';
router.addRoute('DefaultLayout', {
  name: 'About',
  path: '/about',
  component: () => import('./view.vue'),
  meta: { activePath: '/about' },
});
