$(document).ready(function(){
	$('#sub').click(function(){
		$.post($('#myf').attr('action'),		// $('#myf').attr('action'), $.post(action, $('#myf :input').serializeArray(), function(){});

												// $.post(action, serializeArray(), function(){$.parseJSON(echos)});

			   $('#myf :input').serializeArray(),

				function(allEchos){
					if (allEchos)
					{
						console.log('ln 10 '+allEchos);
						
							$('#myf :input').val('');
							try{
								var shchu = $.parseJSON(allEchos);
							}
							catch(e){
								console.log('ln 13 = '+e);
							}
							renderWebView(shchu);
						
					}
					del();
				}

			 );
	});

	$('#myf').submit(function(){
		return false;

	});

});
//------------------------------------- Functions ----------------------------------------------------------------------
function renderWebView(shchu){
	$('table.listing').append('<tr id = \''+shchu['id']+'\'>\
		<td class = \'wid\'>'+shchu['wid']+'</td>\
												<td class = \'riq\'>\
														<div class = \'shijian\'>\
															<span class="glyphicon glyphicon-time"></span>&nbsp;\
															<span id = \'zht\'>'+shchu['xsh']+':</span>\
																	<span id = \'fzh\'>'+shchu['fzh']+'</span>\
																	<span id = \'zou\'>'+shchu['zou']+'</span>\
														</div>\
														<div><span class="glyphicon glyphicon-calendar"></span>&nbsp;\
																	<span id = \'ri\'>'+shchu['riq']+'-</span>\
																	<span id = \'yue\'>'+shchu['yue']+'-</span>\
																	<span id = \'nin\'>'+shchu['nin']+'</span></div>\
												</td>\
		<td class = \'leixing\'><span id = \'leixing\'>'+shchu['lx']+'</span></td>\
		<td class = \'settings\'>\
				<button class=\"btn btn-danger\">\
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
		</tr>');
}