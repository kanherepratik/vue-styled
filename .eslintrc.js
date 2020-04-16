module.exports = {
    extends: [
        'airbnb/base',
        'prettier/@typescript-eslint',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:prettier/recommended',
        'plugin:vue/essential',
        '@vue/airbnb',
        '@vue/typescript/recommended',
        '@vue/prettier/recommended'
    ],
    "parserOptions": {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ".vue",
        "ecmaVersion": 2020,
        "sourceType": "module"
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
                format: ['camelCase']
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
                leadingUnderscore: 'require'
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
        'no-console': 'warn',
        'no-debugger': 'warn',
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
    parserOptions: {
        ecmaVersion: 2020,
        tsconfigRootDir: '.',
        project: ['./tsconfig.json']
    }
};
