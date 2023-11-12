require("@rushstack/eslint-patch/modern-module-resolution");
const restrictedGlobals = require("confusing-browser-globals");


module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es6: true,
		node: true
	},
	parserOptions: {
		ecmaVersion: 2023
	},
	ignorePatterns: ["node_modules/"],
	extends: [
		"eslint:recommended",
		"./extensions/import.js",
		"./extensions/jsdoc.js"
	],
	rules: {
		"quotes": ["warn", "double"],
		"semi": "warn",
		"camelcase": "warn",
		"no-multi-spaces": "warn",
		"array-bracket-spacing": "warn",
		"object-curly-spacing": ["warn", "always"],
		"space-infix-ops": "warn",
		"space-in-parens": "warn",
		"spaced-comment": ["warn", "always"],
		"comma-spacing": "warn",
		"comma-dangle": ["warn", "never"],
		"prefer-arrow-callback": "warn",
		"quote-props": ["warn", "consistent-as-needed"],
		"nonblock-statement-body-position": "warn",
		"arrow-body-style": "warn",
		"dot-notation": "warn",
		"no-var": "warn",
		"indent": ["warn", "tab", { SwitchCase: 1, ignoreComments: true }],
		"no-duplicate-imports": "warn",
		"no-multiple-empty-lines": ["warn", { max: 2, maxBOF: 0, maxEOF: 0 }],
		"no-restricted-globals": ["error"].concat(restrictedGlobals),
		"array-callback-return": "warn",
		"default-case": ["warn", { commentPattern: "^no default$" }],
		"dot-location": ["warn", "property"],
		"eqeqeq": ["warn", "smart"],
		"eol-last": ["warn", "never"],
		"new-parens": "warn",
		"no-array-constructor": "warn",
		"no-caller": "warn",
		"no-case-declarations": "off",
		"no-cond-assign": ["warn", "except-parens"],
		"no-const-assign": "warn",
		"no-control-regex": "warn",
		"no-delete-var": "warn",
		"no-dupe-args": "warn",
		"no-dupe-class-members": "warn",
		"no-dupe-keys": "warn",
		"no-duplicate-case": "warn",
		"no-empty-character-class": "warn",
		"no-empty-pattern": "warn",
		"no-async-promise-executor": "off",
		"no-eval": "warn",
		"no-ex-assign": "warn",
		"no-extend-native": "warn",
		"no-extra-bind": "warn",
		"no-extra-label": "warn",
		"no-extra-semi": "off",
		"no-fallthrough": "warn",
		"no-func-assign": "warn",
		"no-implied-eval": "warn",
		"no-invalid-regexp": "warn",
		"no-iterator": "warn",
		"no-label-var": "warn",
		"no-labels": ["warn", { allowLoop: true, allowSwitch: false }],
		"no-lone-blocks": "warn",
		"no-loop-func": "warn",
		"no-mixed-operators": "warn",
		"no-multi-str": "warn",
		"no-global-assign": "warn",
		"no-unsafe-negation": "warn",
		"no-new-func": "warn",
		"no-new-object": "warn",
		"no-new-symbol": "warn",
		"no-new-wrappers": "warn",
		"no-obj-calls": "warn",
		"no-octal": "warn",
		"no-octal-escape": "warn",
		"no-redeclare": "warn",
		"no-regex-spaces": "warn",
		"no-restricted-syntax": ["warn", "WithStatement"],
		"no-script-url": "warn",
		"no-self-assign": "warn",
		"no-self-compare": "warn",
		"no-sequences": "warn",
		"no-shadow-restricted-names": "warn",
		"no-sparse-arrays": "warn",
		"no-template-curly-in-string": "warn",
		"no-this-before-super": "warn",
		"no-throw-literal": "warn",
		"no-undef": "error",
		"no-unreachable": "warn",
		"no-unused-expressions": ["error", {
			allowShortCircuit: true,
			allowTernary: true,
			allowTaggedTemplates: true
		}],
		"no-unused-labels": "warn",
		"no-unused-vars": ["warn", {
			args: "none",
			ignoreRestSiblings: true
		}],
		"no-use-before-define": ["warn", {
			functions: false,
			classes: false,
			variables: false
		}],
		"no-useless-computed-key": "warn",
		"no-useless-concat": "warn",
		"no-useless-constructor": "warn",
		"no-useless-escape": "warn",
		"no-useless-rename": ["warn", {
			ignoreDestructuring: false,
			ignoreImport: false,
			ignoreExport: false
		}],
		"no-with": "warn",
		"no-whitespace-before-property": "warn",
		"require-yield": "warn",
		"rest-spread-spacing": ["warn", "never"],
		"strict": ["warn", "never"],
		"unicode-bom": ["warn", "never"],
		"use-isnan": "warn",
		"valid-typeof": "warn",
		"getter-return": "warn"
	}
};