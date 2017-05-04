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
					$.getJSON('guanliZhangHu.php', function(echos){
						$.each(echos, function(){
							
						 $('table.table-striped.listing').find('.listingtbody').append('\
						 					<tr id = \''+this['id']+'\'>\
												<td class = \'xm1\' >管理员1:'+this['xm1']+'</td>\
												<td class = \'dianyou\'>\
													<span class="glyphicon glyphicon-envelope"></span>&nbsp;\
													<span id = \'zht\'>'+this['dianyou1']+'</span>\
													</td>\
												<td class = \'settings\'><button class=\"btn btn-danger\">\
																			<span class = \'glyphicon glyphicon-trash\'></span>\
																		</button>\
																		<button class=\"btn btn-warning\">\
																			<span class = \'glyphicon glyphicon-wrench\'></span>\
																		</button></td>\
												</tr>\
						 					<tr id = \''+this['id']+'\'>\
												<td class = \'xm2\' >管理员2:'+this['xm2']+'</td>\
												<td class = \'dianyou\'>\
													<span class="glyphicon glyphicon-envelope"></span>&nbsp;\
													<span id = \'zht\'>'+this['dianyou2']+'</span>\
													</td>\
												<td class = \'settings\'><button class=\"btn btn-danger\">\
																			<span class = \'glyphicon glyphicon-trash\'></span>\
																		</button>\
																		<button class=\"btn btn-warning\">\
																			<span class = \'glyphicon glyphicon-wrench\'></span>\
																		</button></td>\
												</tr>\
							');

						 	$('form#myf').find('table.table-bordered').find('#gongsim').attr('placeholder', '公司: '+this['gongsim']);
						 	$('#dizhi').attr('placeholder', '地址: '+this['dizhi']);
						 	$('#anjin').attr('placeholder', '按金: '+this['anjin']);
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