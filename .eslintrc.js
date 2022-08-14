module.exports = {
    env: {
      es2021: true,
      node: true,
      jest: true
    },
    extends: [
      'standard'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module'
    },
    plugins: [
      '@typescript-eslint'
    ],
    rules: {
      'no-redeclare': 'off',
      'no-useless-constructor': 'off',
      'no-useless-escape': 'off',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'error'
    }
  }
  