<?php
	require_once('dbconnect.php');


		$wid = $_POST['wid'];

		$riq = $_POST['riq'];
		$yue = $_POST['yue'];
		$nin = $_POST['nin'];
		$zht = $_POST['xsh'];
		$fzh = $_POST['fzh'];
		$zou = $_POST['zou'];
//  

	if (mysqli_query($con, "INSERT INTO yuyue (wid, riq, yue, nin, zht, 
												fzh, zou) 
							VALUES ('$wid', '$riq', '$yue', '$nin', '$zht',
									 '$fzh', '$zou')"))
	{
		 	echo json_encode($_POST);	
	}
	else
		die(mysqli_error($con));


