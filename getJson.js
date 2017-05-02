$(document).ready(function(){

	showRecord();

//	confirmEdit();

});

function done(){
	setTimeout(function(){
	   update();
	   done();
	}, 3888888);

}


function showRecord(){
		$('table.listing').find('tbody.listingtbody').empty();

					$.getJSON("retrievedb.php", function(echos){
						$.each(echos, function(){
							
						 $('table.table-striped.listing').find('.listingtbody').append('<tr id = \''+this['id']+'\'>\
												<td class = \'wid\'>'+this['wid']+'</td>\
												<td class = \'riq\'><span id = \'ri\'>'+this['riq']+'-</span>\
																	<span id = \'yue\'>'+this['yue']+'-</span>\
																	<span id = \'nin\'>'+this['nin']+'</span></td>\
												<td class = \'shijian\'><span id = \'zht\'>'+this['zht']+':</span>\
																	<span id = \'fzh\'>'+this['fzh']+'</span>\
																	<span id = \'zou\'>'+this['zou']+'</span></td>\
												<td class = \'shijian\'><span id = \'leixing\'>'+this['leixing']+'</span></td>\
												<td class = \'settings\'><button class=\"btn btn-danger\">\
																			<span class = \'glyphicon glyphicon-trash\'></span>\
																		</button>\
																		\
																		<button class=\"btn btn-success\">\
																			<span class = \'glyphicon glyphicon-zoom-in\'></span>\
																		</button>\
																		\
																		<button class=\"btn btn-warning\">\
																			<span class = \'glyphicon glyphicon-wrench\'></span>\
																		</button></td>\
												</tr>\
							');
						});
			        })
			        .error(function(jqXHR, textStatus, errorThrown){
			        	console.log('error: '+textStatus+'\n');
			        	console.log('error: '+jqXHR.responseText+'\n');
			        	console.log('error: '+errorThrown+'\n');
			        })
			        .success(function(){
			        	console.log('success');
			        });
	//	$.getJSON('rt.php', function(echos){
	//		alert('21');
	//		$('table.table-striped.listing').find('.listingtbody').append('888');
			
		

		//	edit();
		//	del();
		//}
	//	);

	//	return;
}

function ConfirmEdit(){
		$('.confirmEdit').click(function(){

									// var id = $(this).attr('id');
		 							$.post('edit.php', 
										$('#f2 :input').serializeArray(),
										function(data){
											var job = JSON.parse(data);
											
												$('table.listing tr#'+job.id+' td.name').text(job.name);
												$('table.listing tr#'+job.id+' td.address').text(job.address);
												$('table.listing tr#'+job.id+' td.ph').text(job.phone);
											  			
										}
									);
									
							});
			
			$('#f2').submit(function(){
				$('.edituidiv').fadeOut(500);
				return false;
			});
}


function shanchu(){


	var len = $('.ph').length;

	alert('ln 37 ='+len);	
	 $('.ph').click(function(){
				alert('ln 50');
				 /*	var id = $(this).attr('id');

					$.post('del.php',
						{id: id},
						function(data){
							
						}
					);

				*/
		}); 

}