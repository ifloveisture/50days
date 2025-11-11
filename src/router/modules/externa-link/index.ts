import type { AppRouteRecordRaw } from '@/router/type';

const externalLink: AppRouteRecordRaw[] = [
  {
    path: '/external-link',
    // component: Layout,
    name: 'RtExternal',
    meta: {
      title: '外链',
      icon: 'link',
      alwaysShow: true,
      position: 9,
    },
    children: [
      {
        path: 'https://jsxiaosi.github.io/vue-xs-admin-docs/',
        name: 'RtGitLink',
        meta: { title: '外链文档' },
      },
      {
        path: 'embedded-page',
        component: () => import('@/views/external-link/embedded-page/index.vue'),
        name: 'RtGitLink',
        meta: {
          title: '内嵌文档',
          externalUrl: 'https://jsxiaosi.github.io/vue-xs-admin-docs/',
        },
      },
    ],
  },
];

export default externalLink;
