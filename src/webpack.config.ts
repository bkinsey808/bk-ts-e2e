declare var glob: any

export const config = {
  entry: {
    "spec": glob.sync("./src/spec/**/*.ts"),
  },
  module: {
    loaders: [ {
        loader: "ts-loader?compiler=ntypescript",
        test: /\.ts$/
      }
    ]
  },
  output: {
    filename: "[name].js",
    path: __dirname
  },
  ts: {
    compiler: "ntypescript"
  }
}
