import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';

export default tseslint.config(
  { ignores: ['dist', 'coverage', 'docs', 'public', 'node_modules', 'assets'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      import: importPlugin,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
      'prefer-const': 'error',
      'import/order': [
        'error',
        {
          groups: ['external', 'builtin', 'internal', 'sibling', 'parent', 'index'],
          pathGroups: [
            {
              pattern: '(@/public/**)|(@/assets/**)',
              group: 'internal',
            },
            {
              pattern: '@/config/**',
              group: 'internal',
            },
            {
              pattern: '@/shared/**',
              group: 'internal',
            },
            {
              pattern: '@/domain/**',
              group: 'internal',
            },
            {
              pattern: '@/infraestructure/**',
              group: 'internal',
            },
            {
              pattern: '@/presentation/**',
              group: 'internal',
            },
          ],
          pathGroupsExcludedImportTypes: ['internal'],
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
    },
  }
);
