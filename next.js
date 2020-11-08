const CONFIG_FILES = ['./.*']
const SERVER_FILES = ['./*']
const PUBLIC_FILES = ['./browser']
const STORYBOOK_FILES = ['*.stories.*']

module.exports = {
  overrides: [
    {
      files: CONFIG_FILES,
      extends: ['./node', './dev'],
    },
    {
      files: SERVER_FILES,
      extends: ['./node'],
    },
    {
      files: 'public/**',
      extends: PUBLIC_FILES,
    },
    {
      files: ['*'],
      excludedFiles: [...CONFIG_FILES, ...SERVER_FILES, ...PUBLIC_FILES],
      extends: ['./react'],
      rules: {
        // Next.js uses react-require Babel plugin, so we don't want this rule.
        // Read more: https://github.com/vercel/next.js/pull/295
        'react/react-in-jsx-scope': 'off',
      },
    },
    {
      files: STORYBOOK_FILES,
      extends: ['./dev', './storybook'],
    },
  ],
}
