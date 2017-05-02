function edit(){
	$('.edt').click(function(){
		var id = $(this).attr('id');

		$('.edituidiv').fadeIn(500);

		$('.edituidiv table.tedit').attr('class', id);
		
		$.post('editN.php', 
				{id: id},
				function(data){
					// alert(data); return;
					 var job = JSON.parse(data);

			 		 $('.edituidiv table.'+job.id+' input.name').attr('placeholder', job.name);

			 		 		$('.edituidiv table.'+job.id+' input.name').attr('value', job.name);
			 		 
			 		 $('.edituidiv table.'+job.id+' input.address').attr('placeholder', job.address);
				 		 $('.edituidiv table.'+job.id+' input.address').attr('value', job.address);
			 		 $('.edituidiv table.'+job.id+' input.phone').attr('placeholder', job.phone);
			 		 	 $('.edituidiv table.'+job.id+' input.phone').attr('value', job.phone);
			 		 $('.edituidiv table.'+job.id+' input.id').attr('value', job.id);				 
				//  alert('con ='+job.con); return;
					

				});

					

	});


}