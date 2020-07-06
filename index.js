module.exports = {
    globals: {
        MyGlobal: true
    },
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint'
    ],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended'
    ],
    rules: {
        '@typescript-eslint/naming-convention': [
            'error',
            {
                'selector': 'default',
                'format': ['camelCase', 'PascalCase']
            },
            {
                'selector': 'variable',
                'format': ['camelCase', 'UPPER_CASE', 'PascalCase']
            },
            {
                'selector': 'parameter',
                'format': ['camelCase'],
                'leadingUnderscore': 'allow'
            },
            {
                'selector': 'memberLike',
                'modifiers': ['private'],
                'format': ['camelCase'],
                'leadingUnderscore': 'require'
            },
            {
                'selector': 'typeLike',
                'format': ['PascalCase']
            },
            {
                'selector': 'interface',
                'format': ['PascalCase']
            },
            {
                'selector': 'method',
                'format': ['camelCase']
            },
            {
                'selector': 'property',
                'format': ['camelCase', 'UPPER_CASE', 'PascalCase']
            },
            {
                'selector': 'enumMember',
                'format': ['UPPER_CASE', 'PascalCase']
            }
        ],
        '@typescript-eslint/explicit-function-return-type': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/interface-name-prefix': 'off',
        'no-prototype-builtins': 'off',
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        'no-empty': 'off',
        'no-extra-boolean-cast': 'off',
        '@typescript-eslint/ban-ts-ignore': 'off',
        'no-console': ['error', {'allow': ['warn', 'error', 'info']}],
        'lines-between-class-members': 'error',
        'quotes': ['error', 'single'],
        'complexity': ['error', {'max': 20}],
        'generator-star-spacing': ['error', 'after'],
        'yield-star-spacing': ['error', 'after'],
        '@typescript-eslint/consistent-type-assertions': ['error',
            {
                'assertionStyle': 'as',
                'objectLiteralTypeAssertions': 'allow'
            }],
        'no-nested-ternary': ['error'],
        'array-callback-return': ['error'],
        'react/prop-types': ['off'],
        'react/jsx-no-target-blank': ['off'],
        'react/display-name': ['off'],
        'react/no-unsafe': ['error', {
            'checkAliases': true
        }],
        'spaced-comment': ['error', 'always'],
        'react/jsx-no-useless-fragment': ['error'],
        'curly': ['error', 'all']
    }
};
