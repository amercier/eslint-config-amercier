const CONFIG_FILES = ['./.*']
const SERVER_FILES = ['./*']
const PUBLIC_FILES = ['public/**']

module.exports = {
  overrides: [
    {
      files: CONFIG_FILES,
      extends: ['./node', './addons/dev'],
    },
    {
      files: SERVER_FILES,
      extends: ['./node'],
    },
    {
      files: PUBLIC_FILES,
      extends: ['./browser'],
    },
    {
      files: ['*'],
      excludedFiles: [...CONFIG_FILES, ...SERVER_FILES, ...PUBLIC_FILES],
      extends: ['./react'],
      globals: {
        process: true,
      },
      rules: {
        // Next.js uses react-require Babel plugin, so we don't want this rule.
        // Read more: https://github.com/vercel/next.js/pull/295
        'react/react-in-jsx-scope': 'off',

        // Prevent importing react for the same reason.
        'no-restricted-imports': [
          'error',
          {
            paths: [
              {
                name: 'react',
                importNames: ['default'],
                message: 'Importing React is not required since Next.js 6.0',
              },
            ],
          },
        ],
      },
    },
  ],
}
