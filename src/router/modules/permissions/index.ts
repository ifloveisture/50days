import { RoleEnum } from '@/enum/role';
import type { AppRouteRecordRaw } from '@/router/type';

const permissions: AppRouteRecordRaw[] = [
  {
    path: '/permissions',
    redirect: '/permissions/page',
    name: 'RtPermissions',
    meta: { title: '权限管理', icon: 'guide', position: 7 },
    children: [
      {
        path: 'page',
        name: 'RtPermissionsPage',
        component: () => import('@/views/permissions/page/index.vue'),
        meta: { title: '权限切换' },
      },
      {
        path: 'test-page-admin',
        name: 'RtPermissionsTestPageAdmin',
        component: () => import('@/views/permissions/test-permissions-a/index.vue'),
        meta: { title: 'Admin权限测试页面', roles: [RoleEnum.ADMIN] },
      },
      {
        path: 'test-page-test',
        name: 'RtPermissionsTestPageTest',
        component: () => import('@/views/permissions/test-permissions-b/index.vue'),
        meta: { title: 'Test权限测试页面', roles: [RoleEnum.TEST] },
      },
    ],
  },
];

export default permissions;
