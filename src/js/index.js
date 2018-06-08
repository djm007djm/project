

// 轮播图
$(function(){
	var banner = document.querySelector("#banner");
	var page = banner.querySelector(".page");
	var leng = $("#banner ul li").length;

	//创建页码
	var str ="";
	for(let i=0;i<leng;i++){
		str += `<span></span>`
	}
	page.innerHTML = str;

	//默认页码第一个高亮
	$("#banner .page span").eq(0).addClass("change");

	var timer;
	var idx = 0;
	Show();
	timer = setInterval(autoShow,3000);

	$("#banner").hover(
		function(){
			clearInterval(timer);
		},function(){
			timer = setInterval(autoShow,3000)
		})
	//点击页码时获取索引并赋值
	$("#banner .page span").click(function(){
		var num = $(this).index();
		idx = num;
		Show();
	})

	function Show(){
		for(let i=0;i<leng;i++){
			if(i===idx){
				$("#banner ul li").eq(i).addClass('active').siblings().removeClass('active');
				$("#banner .page span").eq(i).addClass("change").siblings().removeClass("change");
			}
		}
	}

	function autoShow(){
		
		idx++;
		Show();
		if(idx>=leng){
			idx = -1;
		}
	}

});


// content 的 大小图切换
$(function(){
	var content = document.querySelector("#content");
	var bigPic = content.querySelector(".bigPic");
	var smallPic = content.querySelector(".smallPic");
	var bigLi = bigPic.children[0].children;
	var smallLi = smallPic.children[0].children;

	var leng = bigLi.length;

	// 默认小图第一个带框
	$("#content .smallPic ul li").eq(0).addClass("bgKuang");

	var idx = 0;
	var timer;

	timer = setInterval(bigShow,2000);

	// hover大图的时候
	$("#content .bigPic").hover(
		function(){
			clearInterval(timer);
		},function(){
			timer = setInterval(bigShow,2000);
		})
	// hover小图的时候
	$("#content .smallPic ul li").hover(
		function(){
			clearInterval(timer);
			var num = $(this).index();
			idx = num;
			bigShow();
	},function(){
		timer = setInterval(bigShow,2000);
	})






	function bigShow(){
		for(let i=0;i<leng;i++){
			if(i===idx){
				$("#content .bigPic ul li").eq(i).show().siblings().hide();
				$("#content .smallPic ul li").eq(i).addClass("bgKuang").siblings().removeClass("bgKuang");
			}
		}
		idx++;
		if(idx>=leng){
			idx = 0;
		}
	}
});


// 获取首页li数据  （从数据库获取）
$(function(){

	// 获取主页商品部分的li
	var leng = $("#main li").length;

	$.ajax({
		url:"../api/index.php",
		success :function(data){
			data = JSON.parse(data);
			// console.log(data)
			for(let i=0;i<leng;i++){
				$("#main li").eq(i).attr("data-id",data[i].id);
				$("#main li").eq(i).html(
					`<a href="html/detail.html" class="mainGoods"><img src="img/${data[i].url}"/></a>
					<a href="html/detail.html" class="mainGoods"><h5>${data[i].name}</h5></a>
					<div class="price">${data[i].price}</div>
					<div class="yuanjia">${data[i].yuanjia}</div>
					<div class="addCar">加入购物车</div>
					`
					);

			}





		}
	});
});



// hover内容分类  或者个商品显示可加入购物车
$(function(){	
	// hover内容分类 更换背景图
	$("#main .mainClass").hover(
		function(){
			// console.log($(this).html())
			$(this).css("background-positionX","-385px");
	},function(){
			$(this).css("background-positionX","0");
	})


	// hover li 商品显示可加入购物车动画显示  图片向右抖
	$("#main li").hover(
		function(){
			$(this).find(".addCar").animate({bottom:"0"});
			$(this).find("img").animate({paddingLeft:"15px"},"fast");

	},function(){
			$(this).find(".addCar").animate({bottom:"-50px"});
			$(this).find("img").animate({paddingLeft:"0"},"fast");

	})

});


// 点击二级  传对应的class   已放到bass
// $(function(){
	
// 	$("#nav .navTwo .item h3 a").click(function(){
// 		var lei = $(this).attr("class");
// 		var href = location.href + "html/list.html?"+lei;
// 		$(this).attr("href",href);
// 	});	

// });


// 点击主页中间商品类 左边的跳转到对应的列表页  传对应的class
$(function(){
	
	$("#main .main0 .main0_l a").click(function(){
		var lei = $(this).attr("class");
		var href = location.href + "html/list.html?"+lei;
		$(this).attr("href",href);
	});	

});




// 点击商品进入详情页面  生成的数据要用事情委托
$(function(){
	$("#main .main0").on("click",".mainGoods",function(){
		var lei = $(this).parent("li").attr("data-id");
		var href = location.href + "html/detail.html?"+lei;
		$(this).attr("href",href);
	});	

});



// 生成的数据要用事情委托    点击加入购物车
$(function(){
	$("#main").on("click",".addCar",function(){
		var goodsId = $(this).parent().attr("data-id");

		$.ajax({
			url:"../api/shoppingCar.php",
			data:{id:goodsId},
			dataType:"json",
			success:function(data){
				console.log(data)
				buildCar(data);
			}
		})
	})
});


console.log("index");