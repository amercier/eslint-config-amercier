module.exports = {
  overrides: [
    { files: 'public/**', extends: './browser' },
    { files: 'src/**', extends: './react' },
    { files: 'src/**/*.stories.js', extends: './storybook' },
    {
      files: ['!{public,src}/**', 'src/setupTests.js'],
      extends: './node',
      globals: { global: true },
      rules: { 'import/no-extraneous-dependencies': 'off' },
    },
    {
      files: 'src/serviceWorker.js',
      globals: { process: true },
      rules: { 'no-console': 'off' },
    },
  ],
}
