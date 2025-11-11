import AutoImport from 'unplugin-auto-import/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';
import type { PluginOption } from 'vite';

/**
 * 自动导入组件插件
 * @returns 返回自动导入相关的 Vite 插件数组
 */
export function configAutoImportPlugin(): PluginOption[] {
  return [
    // 自动导入 Vue、Vue Router、Pinia 等 API
    AutoImport({
      // 目标文件
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],
      // 自动导入的 API 来源
      imports: [
        'vue',
        'vue-router',
        'pinia',
        '@vueuse/core',
        {
          axios: [
            ['default', 'axios'], // import { default as axios } from 'axios'
          ],
        },
      ],
      // Element Plus 相关
      resolvers: [ElementPlusResolver()],
      // 生成的类型声明文件路径
      dts: 'types/auto-imports.d.ts',
      // ESLint 配置
      eslintrc: {
        enabled: true, // 生成 eslint 配置
        filepath: './.eslintrc-auto-import.json', // 配置文件路径
        globalsPropValue: true,
      },
      // 自动导入的目录（自定义组件或 hooks）
      dirs: [
        'src/hooks/**', // hooks
        'src/utils/**', // utils
        'src/store/modules', // store modules
      ],
      // 解析器
      vueTemplate: true, // 在 Vue 模板中自动导入
    }),

    // 自动导入组件
    Components({
      // 组件的有效文件扩展名
      extensions: ['vue', 'tsx', 'jsx'],
      // 搜索组件的目录
      dirs: ['src/components', 'src/layouts'],
      // 组件的自定义解析器
      resolvers: [
        ElementPlusResolver({
          importStyle: 'sass', // 按需导入样式
        }),
      ],
      // 生成的类型声明文件路径
      dts: 'types/components.d.ts',
      // 包含组件名称的有效文件路径
      include: [/\.vue$/, /\.vue\?vue/, /\.tsx$/, /\.jsx$/],
      // 排除的组件名称
      exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]\.nuxt[\\/]/],
    }),
  ];
}
