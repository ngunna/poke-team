module.exports = {
    publicPath: '/poke-team/',
    runtimeCompiler: true,
    chainWebpack: config => {
        // html-loader
        config.module
            .rule('html')
            .test(/\.html$/)
            .use('html-loader')
            .loader('html-loader')
            .end()
    }
}