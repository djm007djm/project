

//头部购物车
$(document).ready(function(){
	$("#header .top_car").hover(
		function(){
			$(".top_car_pay").show();
		},function(){
			$(".top_car_pay").hide();
		})
  	
});
//hover一级导航  出现二级导航
$(document).ready(function(){
	$("#nav .allGoods").hover(
		function(){
			$("#nav .navTwo").show();
		},function(){
			$("#nav .navTwo").hide();
		})
  	
});
//hover二级导航  出现三级导航
$(document).ready(function(){
	$("#nav .navTwo .item").hover(
		function(){
			$(this).find(".navThree").show();
			// $(this).find("h3").addClass("hover");
		},function(){
			$(this).find(".navThree").hide();
			// $(this).find("h3").removeClass("hover");
		})
  	
});

//搜索栏吸顶  以及右侧导航 回到顶部
$(document).ready(function(){
	// var search = document.querySelector("#header");
	// console.log(search)
	var setColor = "rgba("+51+","+51+","+51+","+0.8+")"
	window.onscroll = function(){
		var scrollY = window.scrollY;
		if(scrollY>150){
			$("#header").css({
				"position":"fixed",
				"top":0,"left":0,"right":0,
				"backgroundColor":setColor
			})
			$("#nav").css("marginTop",90);
			$("#right_link .goTop").show();
		}else{
			$("#header").css({
				"position":"static",
				"backgroundColor":"#E0E0E0",
				"opacity":1
			});
			$("#nav").css("marginTop",0);
			$("#right_link .goTop").hide();
		}
	}
	//回到顶部
	$("#right_link .goTop").click(function(){
		var timer = setInterval(function(){
			var scrollY = window.scrollY;
			var speed = scrollY/5;
			scrollBy(0,-speed);
			if(window.scrollY<=0 || speed<2){
				clearInterval(timer);
				scrollTo(0,0);
			}
		},50)
	})

});

// 右侧导航
$(document).ready(function(){
	$("#right_link li").hover(
		function(){
			$(this).find(".move").show().animate({
				left:"-92px"
			},500)
			$(this).css("backgroundColor","#FD7400");
			$(this).find("i").css("borderColor","#FD7400");
			$(this).find("a").css("backgroundPosition","-60px");
	},function(){
			$(this).find(".move").hide().animate({
				left:"-120px"
			},20)
			$(this).css("backgroundColor","#000");
			$(this).find("a").css("backgroundPosition","-22px -224px");
	})

});

// 点击二级  传对应的class
$(function(){

	$("#nav .navTwo .item h3 a").click(function(){
		var href = location.href;
		var num = href.indexOf("?");
		href = href.slice(0,num);//去除问候以后的  从新赋值
		var lei = $(this).attr("class");

		// href = href + "?"+lei;
		href = "//localhost:12345/html/list.html?"+lei;
		$(this).attr("href",href);
	});	

});

// 跟住数据库生成 头部购物车
$(function(){
	$.ajax({
		url:"../api/shoppingCar.php",
		dataType:"json",
		success:function(data){
			console.log(data)
			buildCar(data);
		}
	})

	// function buildCar(data){
	// 	var href = location.href;
	// 		href = href.charAt(href.length-1);
	// 		var url = '';
	// 		if(href!=="/"){
	// 			url += "../";
	// 		}
			
	// 		var allPrice = 0;
	// 		var sum = 0;
	// 		var str = `<ul class="goodslist">`;
	// 		data.forEach(function(item){
	// 			str += `
	// 				<li data-id="${item.id}">
	// 					<div class="img">
	// 						<img src="${url}img/goodslist/${item.url}"/>
	// 					</div>
	// 					<div class="name">
	// 						${item.name}
	// 					</div>
	// 					<div class="money">
	// 						<p class="price">￥${item.price} x ${item.qty}</p>
	// 						<p class="delete">删除</p>
	// 					</div>
	// 				</li>
	// 				`
	// 				allPrice += item.price*item.qty;
	// 				sum += item.qty*1;
	// 		})
	// 		str += `</ul>`;
	// 		$("#shoppingCar").html(str);
	// 		$(".goodsQty").html(sum);
	// 		$(".top_car_pay_xia").html(`
	// 					<span>共${sum}件商品&nbsp;&nbsp;<strong>￥${allPrice}</strong></span><button>去结算</button>
	// 			`);
	// }
});


// 头部购物车  删除商品   同步数据库
$(function(){
	$(document).on("click",".delete",function(){
		var goodsId = $(this).parents("li").attr("data-id");
		$.ajax({
			url:"../api/deleteCar.php",
			data:{id:goodsId},
			dataType:"json",
			success:function(data){
				buildCar(data);
				buildShoppingCar();	
			}
		})
	})
});


// 读取数据库购物车内容   购物车页面
$(function(){
	buildShoppingCar();	
	// 放上面 点击删除的时候再次触发  重新写html
	// function buildShoppingCar(){
	// 	$.ajax({
	// 	url:"../api/shoppingCar.php",
	// 	dataType:"json",
	// 	success:function(data){
	// 		// console.log(data)

	// 		var str ="";

	// 		data.forEach(function(item){
	// 			var w = randomNumber(250,1000);
	// 			str += `
	// 				<li data-id="${item.id}">
	// 					<div class="choose">
	// 						<input type="checkbox" class="check"/>
	// 					</div>
	// 					<div class="goodsName">
	// 						<img src="../img/goodslist/${item.url}" title="${item.name}"/>
	// 						<h5>${item.name}</h5>
	// 					</div>
	// 					<div class="goodsPrice list_price">￥${item.price}</div>
	// 					<div class="goodsNum list_num">
	// 						<button class="lessBtn">-</button>
	// 						<input type="text" value="${item.qty}"/>
	// 						<button class="addBtn">+</button>
	// 					</div>
	// 					<div class="allPrice list_totle">￥${item.price*item.qty}</div>
	// 					<div class="weight list_W">${w}g</div>
	// 					<div class="doing">
	// 						<span>移入收藏</span>
	// 						<span class="delete">删除</span>
	// 					</div>
	// 				</li>
	// 			`
	// 		})
	// 		$("#goodsCar").html(str);


	// 	}

	// })
	// }
	
});

// 购物车页面数量加减
$(function(){
	// 加
	$("#goodsCar").on("click",".addBtn",function(){
		var goodsId = $(this).parents("li").attr("data-id");
		console.log(goodsId)
		var num = $(this).siblings("input").val();
		var newNum = num*1+1;
		$(this).siblings("input").val(newNum);
		$.ajax({
			url:"../api/shoppingCar.php",
			data:{id:goodsId,qty:1},
			dataType:"json",
			success:function(data){
				buildCar(data);
				buildShoppingCar();	
			}
		})
	});
	// 减
	$("#goodsCar").on("click",".lessBtn",function(){
		var goodsId = $(this).parents("li").attr("data-id");
		console.log(goodsId)
		var num = $(this).siblings("input").val();
		if(num>1){
			var newNum = num*1-1;
			$(this).siblings("input").val(newNum);
			$.ajax({
				url:"../api/shoppingCar.php",
				data:{id:goodsId,qty:-1},
				dataType:"json",
				success:function(data){
					buildCar(data);
					buildShoppingCar();	
				}
			})

		}
		
	})
});


function buildShoppingCar(){
		$.ajax({
		url:"../api/shoppingCar.php",
		dataType:"json",
		success:function(data){
			// console.log(data)

			var str ="";

			data.forEach(function(item){
				var w = 134;
				str += `
					<li data-id="${item.id}">
						<div class="choose">
							<input type="checkbox" class="check"/>
						</div>
						<div class="goodsName">
							<img src="../img/goodslist/${item.url}" title="${item.name}"/>
							<h5>${item.name}</h5>
						</div>
						<div class="goodsPrice list_price">￥${item.price}</div>
						<div class="goodsNum list_num">
							<button class="lessBtn">-</button>
							<input type="text" value="${item.qty}"/>
							<button class="addBtn">+</button>
						</div>
						<div class="allPrice list_totle">￥${item.price*item.qty}</div>
						<div class="weight list_W">${w*item.qty}g</div>
						<div class="doing">
							<span>移入收藏</span>
							<span class="delete">删除</span>
						</div>
					</li>
				`
			})
			$("#goodsCar").html(str);


		}

	})
	}


function buildCar(data){
        var href = location.href;
            href = href.charAt(href.length-1);
            var url = '';
            if(href!=="/"){
                url += "../";
            }
            
            var allPrice = 0;
            var sum = 0;
            var str = `<ul class="goodslist">`;
            data.forEach(function(item){
                str += `
                    <li data-id="${item.id}">
                        <div class="img">
                            <img src="${url}img/goodslist/${item.url}"/>
                        </div>
                        <div class="name">
                            ${item.name}
                        </div>
                        <div class="money">
                            <p class="price">￥${item.price} x ${item.qty}</p>
                            <p class="delete">删除</p>
                        </div>
                    </li>
                    `
                    allPrice += item.price*item.qty;
                    sum += item.qty*1;
            })
            str += `</ul>`;
            $("#shoppingCar").html(str);
            $(".goodsQty").html(sum);
            $(".top_car_pay_xia").html(`
                        <span>共${sum}件商品&nbsp;&nbsp;<strong>￥${allPrice}</strong></span><button>去结算</button>
                `);
            $(".goodsAllPrice").html("￥"+allPrice);
    }



console.log("bass");