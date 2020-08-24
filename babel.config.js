module.exports = {
  presets: [
    '@babel/preset-react',
    '@babel/preset-typescript',
    ['@babel/env', { modules: false }],
  ],
  plugins: ['@babel/plugin-transform-modules-commonjs'],
};
