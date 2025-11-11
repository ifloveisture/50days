import type { AppRouteRecordRaw } from '@/router/type';

const component: AppRouteRecordRaw[] = [
  {
    path: '/components',
    // component: Layout,
    redirect: '/components/form',
    name: 'RtComponents',
    meta: {
      title: '组件',
      icon: 'components',
      position: 2,
    },
    children: [
      {
        path: 'form',
        name: 'RtForm',
        component: () => import('@/views/components/form/index.vue'),
        meta: { title: '表单', keepAlive: true },
      },
      {
        path: 'table',
        name: 'RtTable',
        component: () => import('@/views/components/table-page/index.vue'),
        meta: { title: '表格' },
      },
      {
        path: 'drag',
        name: 'RtDrag',
        component: () => import('@/views/components/drag/index.vue'),
        meta: { title: '拖拽组件' },
      },
      {
        path: 'count-to',
        name: 'RtCountTo',
        component: () => import('@/views/components/count-to/index.vue'),
        meta: { title: '数字动画' },
      },
      {
        path: 'seamless-scroll',
        name: 'RtSeamlessScroll',
        component: () => import('@/views/components/seamless-scroll/index.vue'),
        meta: { title: '无限滚动' },
      },
      {
        path: 'date-time',
        // Parent router-view
        name: 'DateTime',
        redirect: '/components/date-time/date',
        meta: { title: '日期组件' },
        children: [
          {
            path: 'date-select',
            name: 'RtDate',
            component: () => import('@/views/components/date/index.vue'),
            meta: { title: '日期选择器', keepAlive: true },
          },
          {
            path: 'calendar',
            name: 'RtCalendar',
            component: () => import('@/views/components/calendar/index.vue'),
            meta: { title: '日历' },
          },
        ],
      },
    ],
  },
];

export default component;
