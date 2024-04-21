const { defineConfig } = require('@vue/cli-service')
module.exports = {
  configureWebpack: {
    output: {
      filename: 'js/[name].bundle.js',
      chunkFilename: 'js/[name].chunk.js',
    }
  }
}

