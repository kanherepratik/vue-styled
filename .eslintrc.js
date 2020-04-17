module.exports = {
    root: true,
    env: {
      node: true,
    },
    extends: [
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:vue/essential',
        '@vue/airbnb',
        '@vue/typescript/recommended',
        '@vue/prettier',
        '@vue/prettier/@typescript-eslint'
    ],
    "parserOptions": {
        "ecmaVersion": 2020,
        "sourceType": "module",
        project: ['./tsconfig.json']
     },
    plugins: ['@typescript-eslint'],
    rules: {
        'no-unused-vars': 'off',
        'no-useless-constructor': 'off',
        "indent": 'off',
        'no-tabs': 'error',
        'max-len': [2, 140, 4, { ignoreUrls: true }],
        'no-template-curly-in-string': 'error',
        '@typescript-eslint/indent': 'error',
        'prefer-arrow-callback': 'error',
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/no-useless-constructor': 'error',
        '@typescript-eslint/default-param-last': 'error',
        '@typescript-eslint/explicit-function-return-type': 'error',
        '@typescript-eslint/no-empty-interface': 'error',
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/no-implied-eval': 'error',
        '@typescript-eslint/no-inferrable-types': 'error',
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/naming-convention': [
            'error',
            {
                selector: 'default',
                format: ['camelCase','PascalCase']
            },

            {
                selector: 'variable',
                format: ['camelCase', 'UPPER_CASE']
            },
            {
                selector: 'parameter',
                format: ['camelCase'],
                leadingUnderscore: 'allow'
            },

            {
                selector: 'memberLike',
                modifiers: ['private'],
                format: ['camelCase'],
                leadingUnderscore: 'allow'
            },

            {
                selector: 'typeLike',
                format: ['PascalCase']
            },
            {
                selector: 'class',
                format: ['PascalCase']
            },
            {
                selector: 'interface',
                format: ['PascalCase'],
                prefix: ['I']
            },
            {
                selector: 'enum',
                format: ['PascalCase']
            }
        ],
        'require-jsdoc': [
            'error',
            {
                require: {
                    FunctionDeclaration: true,
                    MethodDefinition: false,
                    ClassDeclaration: false,
                    ArrowFunctionExpression: false,
                    FunctionExpression: false
                }
            }
        ],
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    },
    settings: {
        'import/extensions': ['.js', '.ts'],
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx']
        },
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx', 'd.ts']
            }
        }
    },
    overrides: [
        {
          files: [
            '**/__tests__/*.{j,t}s?(x)',
            '**/tests/unit/**/*.spec.{j,t}s?(x)',
          ],
          env: {
            jest: true,
          },
        },
      ],
};
