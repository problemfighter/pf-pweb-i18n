const path = require('path');

module.exports = {
    entry: {
        main: './app/pweb-i18n.tsx'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            compilerOptions: {
                                noEmit: false,
                            },
                        },
                    },
                ],
                exclude: /(node_modules|build)/
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx']
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].[hash:8].js',
        chunkFilename: '[id].[hash:8].js',
        publicPath: '/'
    }
};