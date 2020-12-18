module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:react-redux/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:jsx-a11y/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      spread: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-redux',
    '@typescript-eslint',
    'jsx-a11y',
  ],
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx', '.json'],
  },
  rules: {
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'react/jsx-filename-extension': [
      1,
      { extensions: ['ts', '.tsx'] },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'always',
        jsx: 'always',
        ts: 'always',
        tsx: 'never',
        '': 'never',
      },
    ],
    'max-len': ['error', { code: 150 }],
    '@typescript-eslint/no-namespace': 'off',
    'import/no-unresolved': [
      2, {
        ignore: [
          '',
        ],
      },
    ],
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': ['error'],
    'no-console': ['error', { allow: ['warn', 'error'] },
    ],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': ['error'],
      },
    },
  ],
};
