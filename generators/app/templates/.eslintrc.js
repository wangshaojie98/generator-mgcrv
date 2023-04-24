module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', 'standard-with-typescript', 'plugin:prettier/recommended'],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    '@typescript-eslint/consistent-type-definitions': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-extraneous-class': 0,
    '@typescript-eslint/return-await': 0,
    '@typescript-eslint/no-floating-promises': 0,
    '@typescript-eslint/array-type': 0,
    '@typescript-eslint/strict-boolean-expressions': 0,
    'prettier/prettier': [
      'error',
      {
        bracketSameLine: false,
        jsxBracketSameLine: false
      }
    ],
    '@typescript-eslint/ban-types': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/no-misused-promises': 0,
    'react/react-in-jsx-scope': 0,
    '@typescript-eslint/no-redeclare': 0,
    '@typescript-eslint/no-unnecessary-type-assertion': 0,
    'import/no-absolute-path': 0,
    'react/prop-types': 0
  },
  settings: {
    react: {
      createClass: 'createReactClass', // Regex for Component Factory to use,
      // default to "createReactClass"
      pragma: 'React', // Pragma to use, default to "React"
      fragment: 'Fragment', // Fragment to use (may be a property of <pragma>), default to "Fragment"
      version: 'detect', // React version. "detect" automatically picks the version you have installed.
      // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
      // It will default to "latest" and warn if missing, and to "detect" in the future
      flowVersion: '0.20' // Flow version
    }
  }
}
