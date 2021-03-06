/*
Node must be provided when reporting error if location is not provided 错误 
因为代码中使用了 enum 语法导致报错
enum NodeType {
  "calc-node" = "calculate",
  "action-node" = "execute",
  "search-node" = "select",
  "back-node" = "return",
  "branch-node" = "branch",
  "start-node" = "start",
  "end-node" = "end",
  "message-node" = "message",
}
*/


module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "commonjs": true,
    },
    "extends": [
        // "eslint:recommended", // 无法使用，引起错误 Node must be provided when reporting error if location is not provided
    ],
    "overrides": [
        {
          "files": ["webpack.config.js"],
          "excludedFiles": "*.test.js",
          "rules": {
            "quotes": ["error", "single"]
          }
        }
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module",
        "jsx": true,
        "useJSXTextNode": true,
        "project": "./tsconfig.json",
        "tsconfigRootDir": "./",
        "extraFileExtensions": [".ts", ".tsx", ".js", ".jsx"]
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "eslint-plugin-typescript",
        "typescript-sort-keys"
    ],
    "rules": {
        "no-else-return": 2,
        "no-alert":2,
        "curly": 2,
        "typescript-sort-keys/interface": "error",
        "typescript-sort-keys/string-enum": "error",
        "constructor-super": 2,
        "for-direction": 2,
        "getter-return": 2,
        "no-async-promise-executor": 2,
        "no-case-declarations": 2,
        "no-class-assign": 2,
        "no-compare-neg-zero": 2,
        "no-cond-assign": 2,
        "no-const-assign": 2,
        "no-constant-condition": 2,
        "no-control-regex": 2,
        "no-debugger": 2,
        "no-delete-var": 2,
        "no-dupe-args": 2,
        "no-dupe-class-members": 2,
        "no-dupe-keys": 2,
        "no-duplicate-case": 2,
        "no-empty": 2,
        "no-empty-character-class": 2,
        "no-empty-pattern": 2,
        "no-ex-assign": 2,
        "no-extra-boolean-cast": 2,
        "no-extra-semi": 2,
        "no-fallthrough": 2,
        "no-func-assign": 2,
        "no-global-assign": 2,
        "no-inner-declarations": 2,
        "no-invalid-regexp": 2,
        "no-irregular-whitespace": 2,
        "no-misleading-character-class": 2,
        "no-mixed-spaces-and-tabs": 2,
        "no-new-symbol": 2,
        "no-obj-calls": 2,
        "no-octal": 2,
        "no-prototype-builtins": 2,
        "no-redeclare": 2,
        "no-regex-spaces": 2,
        "no-self-assign": 2,
        "no-shadow-restricted-names": 2,
        "no-sparse-arrays": 2,
        "no-this-before-super": 2,
        "no-undef": 2,
        "no-unexpected-multiline": 2,
        "no-unreachable": 2,
        "no-unsafe-finally": 2,

        "no-unsafe-negation": 2,
        "no-unused-labels": 2,
        // "no-unused-vars": 2, // 引起错误 Node must be provided when reporting error if location is not provided
        "no-useless-catch": 2,
        "no-with": 2,
        "require-atomic-updates": 2,
        "require-yield": 2,
        "use-isnan": 2,
        "valid-typeof": 2
    }
};