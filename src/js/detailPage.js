require.config({
	// baseUrl:"js",
	paths:{
		'jquery':'jquery-3.3.1',
		'bass':'bass',
		'common':'common',
		'index':'index',
		'list':'list',
		'detail':'detail',
		// 一个组件 一个模块
		'bsheader':'../extendss/bsheader/header',
		'bsfooter':'../extendss/bsfooter/footer'
	},
	shim: {
             "bass": {
                 deps: ["jquery"],//设置依赖
             },
             "index": {
                 deps: ["jquery"],//设置依赖
             },
             "list": {
                 deps: ["jquery"],//设置依赖
             },
             "detail": {
                 deps: ["jquery","bass"],//设置依赖
             },
             "common": {
                 deps: ["jquery"],//设置依赖
             }
        }
})

require(['jquery','bass','common','detail','bsheader','bsfooter'],function($,bass,common,detail,bsheader,bsfooter){
	$("bsheader").bsheader();
	$("bsfooter").bsfooter();
})