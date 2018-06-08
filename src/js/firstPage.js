require.config({
	// baseUrl:"js",
	paths:{
		'jquery':'jquery-3.3.1',

		'index':'index',
		'bass':'bass',
		'common':'common',
		// 'index':'index',

		// 一个组件 一个模块
		'bsheader':'../extends/bsheader/header',
		'bsfooter':'../extends/bsfooter/footer'
	},
	shim: {	
             "bass": {
                 deps: ["jquery","bsheader"],//设置依赖
             },
             "bsheader": {
                 deps: ["jquery"],//设置依赖
             },
             "index": {
                 deps: ["jquery"]//设置依赖
             }
             
        }
})

require(['jquery','index','bsheader','bsfooter','bass','common'],function($,index,bsheader,bsfooter,bass,common){
	$("bsheader").bsheader();
	$("bsfooter").bsfooter();
})
console.log("firstPage");