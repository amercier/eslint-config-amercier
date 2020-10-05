module.exports = {
  overrides: [
    {
      files: '**.{spec,test}.*',
      extends: ['./jest'],
    },
    {
      files: '**.spec.*',
      rules: {
        // In .spec.* files, we only allow `describe` / `it`. Specs must be
        // written using BDD style.
        //
        // Example:
        //
        //    describe('Login form', () => {
        //      it('displays an error message when user enters a wrong password', () => { ... })
        //    })
        //
        'jest/consistent-test-it': ['error', { fn: 'it' }],
      },
    },
    {
      files: '**.test.*',
      rules: {
        // In .test.* files, we only allow `describe` / `test`. Tests must be
        // written using TDD style.
        //
        // Example:
        //
        //    test('User enters a wrong password', () => { ... })
        //
        'jest/consistent-test-it': ['error', { fn: 'test' }],
      },
    },
  ],
}
