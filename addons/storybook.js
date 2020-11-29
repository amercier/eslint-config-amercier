module.exports = {
  overrides: [
    {
      files: '*.stories.js',
      extends: './dev',
      rules: {
        // Allow props spreading in Storybook stories, as suggested in documentation
        // for args: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
        'react/jsx-props-no-spreading': 'off',
      },
    },
  ],
}
