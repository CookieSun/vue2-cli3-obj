module.exports = {
	devServer: {
// 		open: process.platform === 'darwin',
// 		host: '0.0.0.0',
		port: 8001,
		open: true,
// 		https: false,
// 		hotOnly: false,
// 		proxy: null, // string | Object
        // before: app => {}
	},
	css:{
// 		extract: true,
// 		modules: false,
// 		localIdentName: '[name]_[local]_[hash:base64:5]',
// 		sourceMap: false,
// 		loaderOptions: {}
	},
	// lintOnSave: false, //关闭esling警告
	// lintOnSave:process.env.NODE_ENV !== 'production', //生产构建时禁用
	productionSourceMap: false,//打包不携带map文件
}