module.exports = {
  extends: ['soybeanjs'],
  overrides: [
    {
      files: ['packages/scripts/*.ts', 'packages/*.ts'],
      rules: {
        'no-unused-expressions': 'off'
      }
    }
  ]
};
