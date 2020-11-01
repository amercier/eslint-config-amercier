module.exports = {
  overrides: [
    {
      files: ['**/*'],
      excludedFiles: ['public/**', 'src/**'],
      extends: ['./node', './dev'],
    },
    {
      files: ['scripts/**/*'],
      extends: ['./node', './dev'],
    },

    { files: ['public/**'], extends: './browser' },

    {
      files: ['src/**'],
      extends: './react',
    },
    { files: ['src/**/*.stories.js'], extends: ['./dev', './storybook'] },
    {
      files: ['src/setupTests.js'],
      extends: ['./dev'],
      globals: { global: true },
    },
    {
      files: ['src/serviceWorker.js'],
      globals: { process: true },
      rules: { 'no-console': 'off' },
    },
  ],
}
