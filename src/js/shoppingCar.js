



// // 读取数据库购物车内容   购物车页面
// $(function(){
// 	$.ajax({
// 		url:"../api/shoppingCar.php",
// 		dataType:"json",
// 		success:function(data){
// 			// console.log(data)

// 			var str ="";

// 			data.forEach(function(item){
// 				var w = randomNumber(250,1000);
// 				str += `
// 					<li data-id="${item.id}">
// 						<div class="choose">
// 							<input type="checkbox" class="check"/>
// 						</div>
// 						<div class="goodsName">
// 							<img src="../img/goodslist/${item.url}" title="${item.name}"/>
// 							<h5>${item.name}</h5>
// 						</div>
// 						<div class="goodsPrice list_price">￥${item.price}</div>
// 						<div class="goodsNum list_num">
// 							<button class="lessBtn">-</button>
// 							<input type="text" value="${item.qty}"/>
// 							<button class="addBtn">+</button>
// 						</div>
// 						<div class="allPrice list_totle">￥${item.price*item.qty}</div>
// 						<div class="weight list_W">${w}g</div>
// 						<div class="doing">
// 							<span>移入收藏</span>
// 							<span class="delete">删除</span>
// 						</div>
// 					</li>
// 				`
// 			})
// 			$("#goodsCar").html(str);


// 		}

// 	})
// });