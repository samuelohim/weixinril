 function del(){

 	$('.del').click(function(){
		var id = $(this).attr('id');
		$.post('del.php',
			{id: id},
			function(data){
				if (data == 'success')
					showRecord();
				else
					alert(data);
			}
		);
	});

}