<?php  

	require("connect.php");
	$id = $_GET["id"];

	$sql = "DELETE FROM `shoppingcar` WHERE id='$id'";

	$conn -> query($sql);


	$has = "SELECT `id`, `name`, `url`, `price`, `qty` FROM `shoppingcar` WHERE 1";


	$result = $conn -> query($has);

	$output = $result -> fetch_all(MYSQLI_ASSOC);

	echo json_encode($output,JSON_UNESCAPED_UNICODE);

	$conn->close();








?>