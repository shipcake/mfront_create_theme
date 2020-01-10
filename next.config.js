const withCSS = require('@zeit/next-css');
const withFonts = require('next-fonts');
const withImages = require('next-images');
const withPlugins = require("next-compose-plugins");
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
})


module.exports = withPlugins([withCSS, withFonts, withImages, withBundleAnalyzer],
    {
        module: {
            rules: [
                // {
                //     test: /\.jsx$/,
                //     use: {
                //         loader: 'babel-loader',
                //         options: {
                //             cacheDirectory: true,
                //             presets: ['react', 'es2015', 'stage-2']
                //         }
                //     }
                // }, 
                {
                    test: /\.css$/,
                    use: [
                        'style-loader',
                        'css-loader'
                    ]
                },
                {
                    test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                    use: "url-loader?limit=10000&mimetype=application/font-woff"
                }, {
                    test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                    use: "url-loader?limit=10000&mimetype=application/font-woff"
                }, {
                    test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                    use: "url-loader?limit=10000&mimetype=application/octet-stream"
                }, {
                    test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                    use: "file-loader"
                }, {
                    test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                    use: "url-loader?limit=10000&mimetype=image/svg+xml"
                }
            ]
        },
        // webpack: function (cfg) {
        //     if (!String.prototype.includes) {
        //         String.prototype.includes = function (search, start) {
        //             'use strict';
        //             if (typeof start !== 'number') {
        //                 start = 0;
        //             }
        //             if (start + search.length > this.length) {
        //                 return false;
        //             } else {
        //                 return this.indexOf(search, start) !== -1;
        //             }
        //         };
        //     }
        //     const originalEntry = cfg.entry
        //     cfg.entry = async () => {
        //         const entries = await originalEntry()
        //         if (
        //             entries['main.js'] &&
        //             !entries['main.js'].includes('./src/lib/polyfills.js')
        //         ) {
        //             entries['main.js'].unshift('./src/lib/polyfills.js')
        //         }
        //         return entries

        //     }
        //     return cfg
        // }


    }

)

