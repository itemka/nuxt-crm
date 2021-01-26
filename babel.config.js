module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        corejs: '3.8.3',
        useBuiltIns: 'usage',
      },
    ],
    // '@vue/cli-plugin-babel/preset',
  ],
  // plugins: ['@babel/plugin-proposal-class-properties'],
}
