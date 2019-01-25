/**
 * Opt-in config for to add [Flow](https://flow.org/) support to an all-in-one config.
 */
module.exports = {
  extends: ['flowtype-strict', 'prettier/flowtype'],
  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: true,
    },
  },
  rules: {
    'react/require-default-props': [
      'error',
      {
        forbidDefaultForRequired: false,
      },
    ],
    'react/default-props-match-prop-types': [
      'error',
      {
        allowRequiredDefaults: true,
      },
    ],
  },
};
