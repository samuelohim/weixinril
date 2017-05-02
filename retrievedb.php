<?php
	require_once('dbconnect.php');


	$sql = 'SELECT * FROM yuyue';

	$jg = mysqli_query($con, $sql);
	$twoDimensionalArray = array();
	while ($lie = mysqli_fetch_array($jg, MYSQLI_ASSOC)){
		array_push($twoDimensionalArray, array( 'id' => $lie['id'],
												'wid' => $lie['wid'],
											    'riq' => $lie['riq'],
											    'yue' => $lie['yue'],
											    'nin' => $lie['nin'],
											    'zht' => $lie['zht'],
											    'fzh' => $lie['fzh'],
											    'zou' => $lie['zou'],
											    'dianhua' => $lie['dianhua'],
											    'dianyou' => $lie['dianyou'],
											    'leixing' => $lie['leixing'],
											    'liuyan' => $lie['liuyan']
		));

	}

	// echo json_encode($twoDimensionalArray);
	echo 'ln 27';
/*
	require_once('dbconnect.php');


	$sql = "SELECT * FROM restaurants";

	$jg = mysqli_query($con, $sql);
	$twoDimensionalArray = array();

	while($lie = mysqli_fetch_array($jg, MYSQLI_ASSOC)){
		array_push($twoDimensionalArray, array('name' => $lie['name'],
									'address' => $lie['address'],
									'phone' => $lie['phone']));

		

	}
	echo json_encode(array('shchu' => $twoDimensionalArray));
*/
?>