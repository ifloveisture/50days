import type { AppRouteRecordRaw } from '@/router/type';

const functions: AppRouteRecordRaw[] = [
  {
    path: '/functions',
    redirect: '/functions/preview-pdf',
    name: 'Functions',
    meta: {
      title: '功能',
      icon: 'iEL-briefcase',
      position: 2,
      whiteRoute: true,
      alwaysShow: true,
    },
    children: [
      {
        path: 'water_mark',
        name: 'RtWaterMark',
        component: () => import('@/views/functions/water-mark/index.vue'),
        meta: { title: '水印' },
      },
      {
        path: 'preview-pdf',
        name: 'RtPreviewPdf',
        component: () => import('@/views/functions/pdf/index.vue'),
        meta: { title: 'PDF' },
      },
      {
        path: 'preview-docx',
        name: 'RtPreviewDocx',
        component: () => import('@/views/functions/docx/index.vue'),
        meta: { title: 'Docx' },
      },
      {
        path: 'guide',
        name: 'RtGuide',
        component: () => import('@/views/functions/guide/index.vue'),
        meta: { title: '引导页' },
      },
    ],
  },
];

export default functions;
