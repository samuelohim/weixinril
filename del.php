<?php
	require_once('dbconnect.php');
	$id = $_POST['id'];

	$sql = 'DELETE FROM restaurants WHERE phone = '.$id;

	if (mysqli_query($con, $sql))
		echo 'success';
	else
		die(mysqli_error($con));

?>