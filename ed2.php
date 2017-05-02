<?php
	//  require_once('dbconnect.php');
	$con = mysqli_connect('localhost', 'root', '123123123', 'yummy');

	 $id = $_POST['id'];

	//	$name = $_POST['name'];
	//	$address = $_POST['address'];
	//	$phone = $_POST['phone'];
	 echo "id = ".$id;
/*
$sql = 'UPDATE restaurants SET name = '.$name.', address = '.$address.', phone = '.$phone.' WHERE id = '.$id;
//$sql = 'UPDATE restaurants SET name = '.$name.', address = '.$address.', phone = '.$phone.' WHERE id = '.$id;

if (mysqli_query($con, $sql))
{
	$sqlll = 'SELECT * FROM restaurants WHERE id = '.$id;
	if ($jg = mysqli_query($con, $sqlll))
	{
	
		$lie = mysqli_fetch_array($jg, MYSQLI_ASSOC);
		
		echo json_encode($lie);
	}
	else
		echo mysqli_error($con);
}
else
	echo mysqli_error($con);
*/

?>