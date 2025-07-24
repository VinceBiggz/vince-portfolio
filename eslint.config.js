// eslint.config.js
import js from '@eslint/js';
import react from 'eslint-plugin-react/configs/recommended.js';
import tailwindcss from 'eslint-plugin-tailwindcss';

export default [
  js.configs.recommended,
  {
    files: ['**/*.jsx', '**/*.js', '**/*.tsx', '**/*.ts'],
    plugins: {
      react,
      tailwindcss,
    },
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      'react/react-in-jsx-scope': 'off', // Not needed for React 17+
      'tailwindcss/no-custom-classname': 'off', // Customize this based on your setup
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];
