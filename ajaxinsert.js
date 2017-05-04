$(document).ready(function(){
	$('#sub').click(function(){
		$.post($('#myf').attr('action'),

			$('#myf :input').serializeArray(),

					function(allEchos){
						if (allEchos)
						{
							$('#myf :input').val('');
							var shchu = $.parseJSON(allEchos);
								console.log('ln 13 = '+shchu);
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
		<td class = \'riq\'><span id = \'ri\'>'+shchu['riq']+'-</span>\
							<span id = \'yue\'>'+shchu['yue']+'-</span>\
							<span id = \'nin\'>'+shchu['nin']+'</span></td>\
		<td class = \'shijian\'><span id = \'zht\'>'+shchu['xsh']+':</span>\
							<span id = \'fzh\'>'+shchu['fzh']+'</span>\
							<span id = \'zou\'>'+shchu['zou']+'</span></td>\
		<td class = \'shijian\'><span id = \'leixing\'>'+shchu['lx']+'</span></td>\
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