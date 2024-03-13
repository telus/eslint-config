/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  overrides: [
    {
      files: ['*.js', '*.jsx'],
      extends: 'standard',
      rules: {
        'space-before-function-paren': 'off'
      }
    },
    {
      files: ['*.ts', '*.tsx'],
      extends: 'standard-with-typescript',
      rules: {
        '@typescript-eslint/space-before-function-paren': 'off'
      }
    }
  ]
}
