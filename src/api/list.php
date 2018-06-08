<?php  


	// 连接数据库
	require("connect.php");

	//编写sql语句
	$sql = "SELECT `id`, `name`, `url`, `price` FROM `goodslist` WHERE 1";

	//获取查询结果集
	$result = $conn -> query($sql);

	//使用查询结果集  得到数组

	$row = $result -> fetch_all(MYSQLI_ASSOC);

	echo json_encode($row,JSON_UNESCAPED_UNICODE);




?>