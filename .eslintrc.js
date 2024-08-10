module.exports = {
  root: true,
  extends: ['@react-native-community', 'airbnb-typescript', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint', 'react', 'import'],
  ignorePatterns: ['.eslintrc.js', 'babel.config.js'],
  rules: {
    'import/prefer-default-export': 0, // Allow named exports on files without default export
    'react/jsx-props-no-spreading': 0, // Allow prop spreading everywhere
    'react/require-default-props': 0, // Optional props with typescript doesn't need extra handling
    'no-underscore-dangle': 0, // Allow underscores in variable names
    'no-console': ['warn', { allow: ['error', 'debug'] }], // Allow console.error
    'react/prop-types': 0, // Turning it off because redundancy is needed in some places with typescript
    '@typescript-eslint/no-unused-vars': 0,
  },
};
