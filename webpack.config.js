const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin')
const DashboardPlugin = require('webpack-dashboard/plugin');

const parts = require('./webpack.parts');

const commonConfig = merge([
    {   
        plugins: [
            new HtmlWebpackPlugin({
                title: 'Webpack demo',
            }),
            new ErrorOverlayPlugin(),
            // new DashboardPlugin(), poss?
        ],
    },
]);

const productionConfig = merge([]);

const developmentConfig = merge([
    parts.devServer({
        //custom port if needed
        host: process.env.HOST,
        port: process.env.PORT,
    }),
]);

module.exports = mode => {
    if(mode === 'production') {
        return merge(commonConfig, productionConfig, { mode });
    }

    return merge(commonConfig, developmentConfig, { mode });
};