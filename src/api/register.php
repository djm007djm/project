<?php  

	require("connect.php");
  $username = $_POST["username"];
	$password = $_POST["password"];


    // $sql = "SELECT * FROM `user` WHERE username = '$username'";

    // //获取查询结果集
    // $result = $conn -> query($sql);

    // //使用查询结果集
    // //得到数组
    // $row = $result -> fetch_all(MYSQLI_ASSOC);
    // // echo json_encode($row);
    // if($row){   
    //     echo "用户名已被注册。";
    // }




  $sql = "INSERT INTO `user`(`username`, `password`) VALUES ('$username','$password')";

	
  $conn -> query($sql);


 
  echo "注册成功";
  









?>