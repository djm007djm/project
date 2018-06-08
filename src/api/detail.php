<?php  

	// 连接数据库
	require("connect.php");

	$id = $_GET["id"];
	// 编写sql语句
	$sql = "SELECT `id`, `name`, `url`, `price`, `yuanjia` FROM `indexlist` WHERE id='$id'";

	$sql1 = "SELECT `id`, `name`, `url`, `price` FROM `goodslist` WHERE id='$id'";


	//获取查询结果集
	$result = $conn -> query($sql);
	$result1 = $conn -> query($sql1);

	//使用查询结果集  得到数组

	$row = $result -> fetch_all(MYSQLI_ASSOC);
	$row1 = $result1 -> fetch_all(MYSQLI_ASSOC);
	
	$arr = array(
		'arr'=>$row,
		'arr1'=>$row1
	);


	echo json_encode($arr,JSON_UNESCAPED_UNICODE);













?>