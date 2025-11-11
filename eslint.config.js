import jsxiaosiConfig from '@jsxiaosi/eslint-config';
import autoImportGlobals from './.eslintrc-auto-import.json' assert { type: 'json' };

export default jsxiaosiConfig(
  {
    vue: true,
    prettier: {
      usePrettierrc: true,
    },
    ignores: ['src/**/china.json'],
  },
  {
    languageOptions: {
      globals: {
        ...autoImportGlobals.globals,
      },
    },
    rules: {
      'no-console': 'off',
    },
  },
);
