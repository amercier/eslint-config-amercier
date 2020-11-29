module.exports = {
  overrides: [
    {
      files: ['**/*'],
      excludedFiles: ['public/**', 'src/**'],
      extends: ['./node', './addons/dev'],
    },
    {
      files: ['scripts/**/*'],
      extends: ['./node', './addons/dev'],
    },

    { files: ['public/**'], extends: './browser' },

    {
      files: ['src/**'],
      extends: './react',
    },
    {
      files: ['src/setupTests.js'],
      extends: ['./addons/dev'],
      globals: { global: true },
    },
    {
      files: ['src/serviceWorker.js'],
      globals: { process: true },
      rules: { 'no-console': 'off' },
    },
  ],
}
