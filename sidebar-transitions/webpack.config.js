var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: path.resolve(__dirname, './js/sidebarEffects.js'),
    output: {
        path: path.resolve(__dirname, './'),
        filename: 'bundle.js',
    },
	devServer:{
		port:3333,
		inline:true,
	}
};