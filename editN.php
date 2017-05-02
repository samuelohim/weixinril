<?php
	require_once('dbconnect.php');
	$id = $_POST['id'];

	 $sql = 'SELECT * FROM restaurants WHERE id = '.$id;
	if ($jg = mysqli_query($con, $sql))
	{
		$lie = mysqli_fetch_array($jg, MYSQLI_ASSOC);
		// $lie.push('con'=>$con);
		echo json_encode($lie);
	}	// echo 'ln 9 success';
	else
		echo mysqli_error($con);


?>