<?php
	require_once('dbconnect.php');
	require_once('httpMailHeader.php');

		$wid = $_POST['wid'];

		$riq = $_POST['riq'];
		$yue = $_POST['yue'];
		$nin = $_POST['nin'];
		$dianyou = $_POST['dianyou'];
		$dianhua = $_POST['dianhua'];
		$zht = $_POST['xsh'];
		$fzh = $_POST['fzh'];
		$leixing = $_POST['lx'];
		$zou = $_POST['zou'];
//  
		
		$jg2 = mysqli_query($con, "SELECT * FROM guanliyuan") or die(mysqli_error($con));
		$lie2 = mysqli_fetch_array($jg2, MYSQLI_ASSOC); // $lie = mysqli_fetch_array($jg2, MYSQLI_ASSOC)
				($lie2['dianyou1']=='NULL')?$glDianyou1 ='':$glDianyou1 = $lie2['dianyou1'];
				($lie2['dianyou2']=='NULL')?$glDianyou2 ='':$glDianyou2 = $lie2['dianyou2'];
		$gongsim = $lie2['gongsim'];
		$zhuti = 'Re: '.$leixing." 预约官方确认信";
				include_once('xin.php');
		if (mysqli_query($con, "INSERT INTO yuyue (wid, riq, yue, nin, zht, dianyou, dianhua, 
												fzh, zou, leixing) 
							VALUES ('$wid', '$riq', '$yue', '$nin', '$zht', '$dianyou', '$dianhua',
									 '$fzh', '$zou', '$leixing')"))
		{ 
			 	$mail = mail($glDianyou1, $zhuti, $xin, $headers);
			// 	mail($glDianyou2, $zhuti, $xin, $headers);
			 	if (!$mail)
			 		echo "cannot be sent";
			 	else
			 		echo json_encode($_POST);
		}
		else
			die(mysqli_error($con));

?>