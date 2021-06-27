module.exports = {
  root: true,
  env: {
    node: true
  },
  globals: {
    GIT_DESCRIBE: true
  },
  extends: [
    'plugin:vue/recommended',
    'semistandard'
  ],
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'vue/component-name-in-template-casing': ['error', 'PascalCase', {
      registeredComponentsOnly: false,
      ignores: []
    }]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
};
