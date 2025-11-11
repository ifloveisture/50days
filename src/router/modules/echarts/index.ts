import type { AppRouteRecordRaw } from '@/router/type';

const echarts: AppRouteRecordRaw[] = [
  {
    path: '/echarts',
    redirect: '/echarts/bar',
    name: 'RtEcharts',
    meta: { title: '图表', icon: 'echarts', position: 3 },
    children: [
      {
        path: 'bar',
        name: 'RtBar',
        component: () => import('@/views/echarts/bar/index.vue'),
        meta: { title: '柱状图' },
      },
      {
        path: 'map',
        name: 'RtMap',
        component: () => import('@/views/echarts/map/index.vue'),
        meta: { title: '地图' },
      },
    ],
  },
];

export default echarts;
