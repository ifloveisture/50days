import type { AppRouteRecordRaw } from '@/router/type';

const nested: AppRouteRecordRaw[] = [
  {
    path: '/nested',
    redirect: '/nested/menu1',
    name: 'RtNested',
    meta: {
      title: '嵌套路由',
      icon: 'iEL-grid',
      position: 6,
    },
    children: [
      {
        path: 'menu1',
        name: 'RtMenu1',
        redirect: '/nested/menu1/menu1-1',
        meta: { title: '路由1' },
        children: [
          {
            path: 'menu1-1',
            component: () => import('@/views/nested/menu1/menu1-1/index.vue'),
            name: 'RtMenu1-1',
            meta: { title: '路由1-1' },
          },
          {
            path: 'menu1-2',
            name: 'RtMenu1-2',
            redirect: '/nested/menu1/menu1-2/menu1-2-1',
            meta: { title: '路由1-2' },
            children: [
              {
                path: 'menu1-2-1',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1/index.vue'),
                name: 'RtMenu1-2-1',
                meta: { title: '路由1-2-1' },
              },
              {
                path: 'menu1-2-2',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2/index.vue'),
                name: 'RtMenu1-2-2',
                meta: { title: '路由1-2-2' },
              },
            ],
          },
          {
            path: 'menu1-3',
            component: () => import('@/views/nested/menu1/menu1-3/index.vue'),
            name: 'RtMenu1-3',
            meta: { title: '路由1-3' },
          },
        ],
      },
      {
        path: 'menu2',
        component: () => import('@/views/nested/menu2/index.vue'),
        name: 'RtMenu2',
        meta: { title: '路由2' },
      },
    ],
  },
];

export default nested;
