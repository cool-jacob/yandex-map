const { VueLoaderPlugin } = require("vue-loader")

// vue.config.js
module.exports = {
	chainWebpack: config => {
		plugins: [
			new VueLoaderPlugin()
		]
	  
		config.module
			.rule('vue')
			.test(/\.vue$/)
			.use('vue-loader')
			.loader('vue-loader')
			.end();

		config.module
	  		.rule('js')
	  		.test(/\.js$/)
	  		.use('babel-loader')
	  		.loader('babel-loader')
	}
}
