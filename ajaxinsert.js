$(document).ready(function(){
	$('#sub').click(function(){
		alert('ln 3');

		$.post($('#myf').attr('action'), 
			$('#myf :input').serializeArray(), 
			function(allEchos){
				if (allEchos)
				{
					alert('ln 10 = '+allEchos);
					$('#myf :input').val('');
					var shchu = $.parseJSON(allEchos);
					console.log('ln 13 = '+shchu);
						$('table.listing').append('<tr>\
								<td>'+shchu['wid']+'</td>\
								<td>'+shchu['riq']+'</td>\
								<td>'+shchu['yue']+'</td>\
							</tr>');
				}
				del();
		});
	
			

	});

	$('#myf').submit(function(){
		return false;

	});


});