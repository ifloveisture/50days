import type { AppRouteRecordRaw } from '@/router/type';

const component: AppRouteRecordRaw[] = [
  {
    path: '/practice',
    redirect: '/practice/day1',
    name: 'Practice',
    meta: {
      title: '练习',
      icon: 'iEL-briefcase',
      position: 2,
    },
    children: [
      {
        path: 'day1',
        name: 'Day1',
        component: () => import('@/views/practice/day1/index.vue'),
        meta: { title: '第一天', keepAlive: true },
      },
      {
        path: 'day2',
        name: 'Day2',
        component: () => import('@/views/practice/day2/index.vue'),
        meta: { title: '第二天', keepAlive: true },
      },
    ],
  },
];

export default component;
