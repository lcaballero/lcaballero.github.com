; (function ($) {

	$.ajax({
		url:"Writing/Performance-Tuning.html",
		method:"GET",
		data:{},
		success:function( result ) {

			result = $(result);

			$("#writing-viewport").append( $(result) );

			$.renderBookmarks();

			$("body:first").removeClass("none");

		},
		error:function( result ) {
			console.info("oh snap -- error");
		}
	});

})(jQuery);