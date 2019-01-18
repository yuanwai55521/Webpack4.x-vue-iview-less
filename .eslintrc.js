module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    browser: true
  },
  extends: ['standard', 'plugin:vue/recommended'],
  plugins: ['prettier'],
  rules: {
    'generator-star-spacing': 0,
    'no-debugger': 2,
    semi: [2, 'always'],
    'space-before-function-paren': [0, 'always'],
    'no-return-assign': 0,
    'one-var': 0,
    'no-cond-assign': 0,
    'prefer-const': 2,
    'prefer-reflect': 2,
    'vue/require-default-prop': 'off'
  }
};
