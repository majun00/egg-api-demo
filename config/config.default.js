'use strict';

module.exports = appInfo => {
    const config = exports = {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1510736931192_897';

    // add your config here
    config.middleware = [];

    // 设置MongoDB地址
    config.mongoose = {
        url: 'mongodb://localhost:27017/demo',
        options: {}
    }

    return config;
};