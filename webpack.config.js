const path = require('path');

module.exports = {
  mode: 'production',
  devtool: 'eval-source-map',
  entry: './src/app.ts', // esse é o arquivo que importa todos os outros
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        include: [path.resolve(__dirname, 'src')],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    publicPath: 'docs', //Nome da pasta com os arquivos do build.
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'docs'), // caminho absoluto para o destino
  },
};
