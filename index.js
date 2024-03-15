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
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/indent': 'off',
        // This rule enforces some weird spacing on this:
        // providerProps?:
        // | {
        //     copy?: LegalsProviderProps['copy']
        //   }
        // | undefined
        '@typescript-eslint/key-spacing': 'off',
        '@typescript-eslint/no-confusing-void-expression': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/space-before-function-paren': 'off',
        '@typescript-eslint/strict-boolean-expressions': 'off'
      }
    }
  ]
}
