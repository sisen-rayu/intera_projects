let JS_DEST = __dirname + `/../_static/dist/js/`;

module.exports = {
  // モードの設定、v4系以降はmodeを指定しないと、webpack実行時に警告が出る
  mode: 'production',
  // エントリーポイントの設定
  entry: {
    'index': ['./js/index.js']
  },
  // 出力の設定
  output: {
    // 出力するファイル名
    filename: '[name].bundle.js',
    // 出力先のパス（絶対パスを指定する必要がある）
    path: JS_DEST,
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
              presets: [
                [
                  '@babel/preset-env',
                  {
                    targets: {
                      ie: 11,
                    },
                    // 必要な箇所にだけpolyfillを読み込む設定
                    useBuiltIns: 'usage',
                    corejs: 3,
                  },
                ],
              ],
            },
          },
        ],
      },
    ],
  },
};
