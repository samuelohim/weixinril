<?php
	require_once('dbconnect.php');


		$wid = $_POST['wid'];

		$riq = $_POST['riq'];
		$yue = $_POST['yue'];
		$nin = $_POST['nin'];
		$dianyou = $_POST['dianyou'];
		$dianhua = $_POST['dianhua'];
		$zht = $_POST['xsh'];
		$fzh = $_POST['fzh'];
		$lexing = $_POST['lx'];
		$zou = $_POST['zou'];
//  

	if (mysqli_query($con, "INSERT INTO yuyue (wid, riq, yue, nin, zht, dianyou, dianhua, 
												fzh, zou, leixing) 
							VALUES ('$wid', '$riq', '$yue', '$nin', '$zht', '$dianyou', '$dianhua',
									 '$fzh', '$zou', '$lexing')"))
	{
		 	echo json_encode($_POST);	
	}
	else
		die(mysqli_error($con));


