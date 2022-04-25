import { router } from '@/router';
router.addRoute('DefaultLayout', {
  name: 'Homepage',
  path: '/',
  component: () => import('./view.vue'),
  meta: { pathActive: '/homepage' },
});
