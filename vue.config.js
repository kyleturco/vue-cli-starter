const webPackConfig = require('./webpack.config')

module.exports = {
    configureWebpack: {
        resolve: webPackConfig.resolve,
        module: {
            rules: [
                {
                    test: /\.(s*)css$/,
                    use: [
                        'sass-loader',
                    ],
                },
            ],
        },
    },
    css: {
        requireModuleExtension: false,
    }
}