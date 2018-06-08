<?php  
	require("connect.php");
	$username = $_POST["username"];
	$password = $_POST["password"];


	$sql = "SELECT * FROM `user` WHERE username = '$username'";


	//获取查询结果集
    $result = $conn -> query($sql);

    //使用查询结果集
    //得到数组
  	$row = $result -> fetch_all(MYSQLI_ASSOC);
  	// echo json_encode($row);
  	if($row[0]["password"]===$password){
  		echo "帐号密码正确，登录成功。";
  	}else{
  		echo "帐号或密码错误，请重新输入";
  	};




  	// 关闭数据库，避免资源浪费
    $conn->close();



?>