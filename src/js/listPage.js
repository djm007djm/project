require.config({
	// baseUrl:"js",
	paths:{
		'jquery':'jquery-3.3.1',
		'bass':'bass',
		'common':'common',
		'index':'index',
		'list':'list',
		// 一个组件 一个模块
		'bsheader':'../extendss/bsheader/header',
		'bsfooter':'../extendss/bsfooter/footer'
	},
	shim: {
             "bass": {
                 deps: ["jquery","bsheader"],//设置依赖
             },
             "list": {
                 deps: ["jquery","bass"],//设置依赖
             }
        }
})

require(['jquery','bsheader','bsfooter','common','bass','list'],function($,bass,common,list,bsheader,bsfooter){
	$("bsheader").bsheader();
	$("bsfooter").bsfooter();
})