import type { AppRouteRecordRaw } from '@/router/type';

const editor: AppRouteRecordRaw[] = [
  {
    path: '/editor',
    redirect: '/editor/rich-text',
    name: 'RtEditor',
    meta: { title: '编辑器', icon: 'editor', position: 4 },
    children: [
      {
        path: 'rich-text',
        name: 'RtRichText',
        component: () => import('@/views/editor/rich-text/index.vue'),
        meta: { title: '富文本编辑器' },
      },
      {
        path: 'markdown',
        name: 'RtMarkdown',
        component: () => import('@/views/editor/markdown/index.vue'),
        meta: { title: 'Markdown' },
      },
      {
        path: 'logic-flow',
        name: 'RtLogicFlow',
        component: () => import('@/views/editor/logic-flow/index.vue'),
        meta: { title: '流程图编辑器' },
      },
    ],
  },
];

export default editor;
