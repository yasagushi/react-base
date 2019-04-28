import path from 'path';

export default {
  mode: 'development',
  entry: `./src/js/app.js`,
  output: {
    path: path.join(__dirname, 'dist/js'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/react']aa
            },
          },
          // {
          //   enforce: 'pre',
          //   test: /\.js$/,
          //   exclude: /node_modules/,
          //   loader: 'eslint-loader',
          // },
        ],
      },
    ],
  },
};
