const { merge } = require('webpack-merge');
const baseConfig = require('./base');
const devConfig = require('./dev');
const proConfig = require('./pro');

module.exports = (env, argv) => {
    let config = argv.mode === 'development' ? devConfig :  proConfig;
    return merge(baseConfig, config);
};
