import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

import TabsPage from '@/views/TabsPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/views/WelcomePage.vue'),
  },
  {
    path: '/login',
    component: () => import('@/views/LoginPage.vue'),
  },
  {
    path: '/ads/:id',
    name: 'AdsCardDetails',
    component: () => import('@/components/AdsCardDetails.vue'),
    props: true,
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/ads',
      },
      {
        path: 'reels',
        component: () => import('@/views/Tabs/ReelsTab.vue'),
      },
      {
        path: 'ads',
        component: () => import('@/views/Tabs/AdsTab.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
