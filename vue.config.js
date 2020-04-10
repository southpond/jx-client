module.exports = {
  devServer: {
    proxy: {
      "/api": {
        // 目标 API 地址
        target: "http://127.0.0.1:9000/"
        // target: "http://43.111.252.217:9000/"
      }
    }
  },
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          blue: "#409EFF",
          "text-color": "#111"
        }
      }
    }
  }
};
