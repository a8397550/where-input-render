const presets = [
  [
    '@babel/preset-env',
    {
      modules: "umd",
      // loose: false,
      targets: {
        edge: '10',
        firefox: '50',
        chrome: '52',
        safari: '8',
      },
      // useBuiltIns: 'usage',
    },
  ],
  [
    '@babel/preset-react'
  ],
  [
    "@babel/preset-typescript"
  ]
];

const plugins = [
  ['babel-plugin-import', {
    'libraryName': '@ali/deep',
    'libraryDirectory': 'lib',
    'camel2DashComponentName': true,
    'style': true
  }],
  ["@babel/plugin-transform-modules-commonjs"],
  ["@babel/plugin-syntax-dynamic-import"],
  [
    '@babel/plugin-transform-runtime',
    {
      'corejs': false,
      'helpers': false,
      'regenerator': true,
      'useESModules': false
    }
  ],
  ['@babel/plugin-transform-regenerator'],
  ['@babel/plugin-proposal-object-rest-spread'],
  ["@babel/plugin-proposal-class-static-block"],
  ['@babel/plugin-proposal-class-properties'],
];

module.exports = { presets, plugins };