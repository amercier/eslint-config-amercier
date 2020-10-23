module.exports = {
  overrides: [
    { files: 'public/**', extends: './browser' },
    { files: 'src/**', extends: './react' },
    { files: '!{public,src}/**', extends: './node' },
  ],
}
