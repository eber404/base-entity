/* eslint-env node */
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import'],
  root: true,
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@root', '.'],
          ['@', './src'],
          ['@tests', './tests'],
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      },
    },
  },
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'import/no-unresolved': 'off',
    'import/order': [
      'error',
      {
        groups: [
          'external',
          'builtin',
          'internal',
          ['parent', 'sibling', 'index'],
        ],
        pathGroups: [
          {
            pattern: 'bun:**',
            group: 'builtin',
          },
          {
            pattern: '@root',
            group: 'internal',
          },
          {
            pattern: '@/**/ioc/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@/**/infra/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@/**/application/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@/**/domain/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@tests/**',
            group: 'internal',
            position: 'after',
          },
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
}
