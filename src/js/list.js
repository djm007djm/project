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
			idx = 0;
		}
	}

});



// 点击二级  传对应的class  放到bass
// $(function(){

// 	$("#nav .navTwo .item h3 a").click(function(){
// 		var href = location.href;
// 		var num = href.indexOf("?");
// 		href = href.slice(0,num);//去除问候以后的  从新赋值
// 		var lei = $(this).attr("class");

// 		// href = href + "?"+lei;
// 		href = "//localhost:12345/html/list.html?"+lei;
// 		$(this).attr("href",href);
// 	});	

// });




//获取goodslist  获取数据库的列表页
$(function(){
	var goodslist = document.querySelector("#goodslist");

	//接受数据
	//获取？以后的
	var goods = location.search;

	// 获取?后面  相对应的商品类别
	var lei = goods.slice(1);
	// console.log(lei);
	var newGoods = [];

	$.ajax({
		url:"../api/list.php",
		success :function(data){
			data = JSON.parse(data);
			// console.log(data);
			// 把相对应的商品遍历出来
			data.forEach(function(item){
				if(item['id'].charAt(0)===lei){
					newGoods.push(item);
				}
			})
			var totle = newGoods.length;
			var allPage = Math.ceil(totle/20);
			var newPage = 1;

			// 点击下一页
			$("#content .next").click(function(){
				newPage++;
				if(newPage>=allPage){
					newPage = allPage;
				};
				buildList();
			});
			// 点击下一页
			$("#content .prev").click(function(){
				newPage--;
				if(newPage<=1){
					newPage = 1;
				};
				buildList();
			});
			// 点击首页
			$("#content .homePage").click(function(){
				newPage = 1;

				buildList();
			});
			// 点击尾页
			$("#content .endPage").click(function(){
				newPage = allPage;

				buildList();
			});


			// 未点击页数时  默认第一页
			buildList();


			


			//   分页栏
			function buildList(){
					$("#content .output").html(`
						共<span>${totle}</span>件商品<span>${newPage}</span>/<span>${allPage}</span>页
					`);
					var firstGoods = newGoods.slice((newPage-1)*20,20*newPage);

					priceBuild(firstGoods);


					// 价格排序
					var opinion = true;
					$("#price").click(function(){
						var sortArr = firstGoods.sort(function(a,b){return a["price"]-b["price"];})
						if(opinion){
							priceBuild(sortArr);
						}else if(!opinion){
							priceBuild(sortArr.reverse());
						}
						opinion = !opinion;
					})

			}
			
			// 封装生成list
			function priceBuild(arr){
				var str = arr.map(function(item){
						var price = item['price'];
						price = Number(price).toFixed(2);
						var number = randomNumber(50,500);
					return `
						<li data-id = ${item.id}>
							<a href="#">
								<img src="../img/goodslist/${item.url}" title="${item.name}"/>
							</a>
							<h6><i></i><a href="#">${item.name}</a></h6>
							<span class="price">${price}</span>
							<span class="number">已有<span>${number}</span>	人购买</span>
							<div class="buyCar">加入购物车</div>
						</li>
					`
				}).join('\n');
				goodslist.innerHTML = str;
			}


		}
	})

});



// 点击商品进入详情页面  生成的数据要用事情委托
$(function(){
	$("#goodslist").on("click","a",function(){
		var lei = $(this).parents("li").attr("data-id");

		var prefix = location.href.slice(0,28);

		// console.log(prefix)
		// console.log(location.href)
		var href = prefix + "detail.html?"+lei;
		$(this).attr("href",href);
	});	

});




// 生成的数据要用事情委托    点击加入购物车
$(function(){
	$("#goodslist").on("click",".buyCar",function(){
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