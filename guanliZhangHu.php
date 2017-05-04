<?php
	require_once('dbconnect.php');


	$sql = 'SELECT * FROM guanliyuan';

	$jg = mysqli_query($con, $sql);
	$twoDimensionalArray = array();
	while ($lie = mysqli_fetch_array($jg, MYSQLI_ASSOC)){
		array_push($twoDimensionalArray, array( 'dianyou1' => $lie['dianyou1'],
												'dianyou2' => $lie['dianyou2'],
											    'xm1' => $lie['xm1'],
											    'xm2' => $lie['xm2'],
											    'gongsim' => $lie['gongsim'],
											    'dizhi' => $lie['dizhi'],
											    'anjin' => $lie['anjin']
											  )
				   );

	}

	 echo json_encode($twoDimensionalArray);
	//        echo 'ln 27';
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