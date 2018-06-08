require.config({
	// baseUrl:"js",
	paths:{
		'jquery':'jquery-3.3.1',
        
		'bass':'bass',
		'common':'common',
		'detail':'detail',
		// 一个组件 一个模块
		'bsheader':'../extendss/bsheader/header',
		'bsfooter':'../extendss/bsfooter/footer'
	},
	shim: {
             "bass": {
                 deps: ["jquery","bsheader"],//设置依赖
             },
             "bsheader": {
                 deps: ["jquery"],//设置依赖
             },
             "detail": {
                 deps: ["jquery"]//设置依赖
             }
        }
})

require(['jquery','bsheader','bsfooter','bass','common','detail'],function($,bsheader,bsfooter,bass,common,detail){
	$("bsheader").bsheader();
	$("bsfooter").bsfooter();
})