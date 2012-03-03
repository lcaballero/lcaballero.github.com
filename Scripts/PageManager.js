;(function ($) {

	$.ajax({
		url:"Writing/Performance-Tuning.html",
		method:"GET",
		data:{},
		success:function( result ) {
			console.info( result );
			result = $(result);
			console.info( result );
			$("#FullContent").append( $(result) );
		},
		error:function( result ) {
		}
	});

})(jQuery);