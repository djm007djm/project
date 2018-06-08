<?php  

	require("connect.php");
	// $id = $_GET["id"];
	// 判断有没有传id过来
	$id = isset($_GET['id']) ? $_GET['id'] : '';
	$qty = isset($_GET['qty']) ? $_GET['qty'] : 1;


	if($id){//如果有点击传来id 就执行  
		$sql = "SELECT `id`, `name`, `url`, `price`, `qty` FROM `shoppingcar` WHERE id='$id'";
		$result = $conn -> query($sql);
		$has = $result -> fetch_all(MYSQLI_ASSOC);
		//判断购物车数据库是否已有
		if($has){
			//如果有更新数量
			$sum = $has[0]['qty'];
			$id = $has[0]['id'];
			$totle = $sum+$qty;
			$updata = "UPDATE `shoppingcar` SET `qty`='$totle' WHERE `id`='$id'";
			$conn->query($updata); 
		}else{
			//如果该商品在购物车数据库没有  去主页表找对应的商品信息
			$find = "SELECT `id`, `name`, `url`, `price`, `yuanjia` FROM `indexlist` WHERE id='$id'";
			$index = $conn -> query($find);
			$has1 = $index -> fetch_all(MYSQLI_ASSOC);
			if($has1){
				// 如果找到 把对应商品的资料 添加到购物车库
				$indexid = $has1[0]['id'];
				$indexname = $has1[0]['name'];
				$indexurl = $has1[0]['url'];
				$indexprice = $has1[0]['price'];
				$addIndex = "INSERT INTO `shoppingcar`(`id`, `name`, `url`, `price`, `qty`) VALUES ('$indexid','$indexname','$indexurl','$indexprice','1')";
				$conn -> query($addIndex);
			}else{
				//如果在主页表找不到  就去列表库找  把对应商品的资料 添加到购物车库
				$findlist = "SELECT * FROM `goodslist` WHERE id='$id'";
				$goodslist = $conn -> query($findlist);
				$last = $goodslist -> fetch_all(MYSQLI_ASSOC);

				$listid = $last[0]['id'];
				$listname = $last[0]['name'];
				$listurl = $last[0]['url'];
				$listprice = $last[0]['price'];
				$addList = "INSERT INTO `shoppingcar`(`id`, `name`, `url`, `price`, `qty`) VALUES ('$listid','$listname','$listurl','$listprice','1')";
				$conn -> query($addList);

			}

		}

	}



	


	$end = "SELECT `id`, `name`, `url`, `price`, `qty` FROM `shoppingcar` WHERE 1";
	$endResult = $conn -> query($end);
	$endArr = $endResult -> fetch_all(MYSQLI_ASSOC);
	echo json_encode($endArr,JSON_UNESCAPED_UNICODE);
    $conn->close();










?>