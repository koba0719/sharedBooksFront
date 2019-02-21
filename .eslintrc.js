module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:prettier/recommended'
  ],
  plugins: [
    'prettier'
  ],
  // add your custom rules here
  rules: {
    "linebreak-style": 0,
    "multiline": "never",
    "vue/singleline-html-element-content-newline": false,
    "vue/html-closing-bracket-spacing": false
  }
}
