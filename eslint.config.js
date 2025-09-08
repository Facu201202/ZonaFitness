import next from 'eslint-config-next';

export default [
  {
    ignores: [
      'node_modules/',
      '.next/',
      'src/generated/',
      '**/*.wasm.js',
      '**/*.runtime.js',
      '**/*.index.js',
      '**/*.edge.js',
      '**/*.react-native.js'
    ]
  },
  next,
  {
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-this-alias': 'off',
      '@typescript-eslint/no-empty-object-type': 'off'
    }
  }
];
