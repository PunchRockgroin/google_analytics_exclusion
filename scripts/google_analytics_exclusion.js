(function($) {
  Drupal.behaviors.gae = {
    attach: function (context, settings) {
      if (typeof _gaq !== 'undefined'){
								var gaeExclude = $.cookie('gaeExclude');
								if (typeof gaeExclude === 'undefined' || gaeExclude === null) {
										$.getJSON("http://ip-api.com/json/?callback=?", function(data) {
												console.log(data.query);
												if( ($.inArray(data.query, settings.gae.gaExclusionIPv4s) !== -1) ) {
																// $.cookie('DRUPAL_VISITOR_IS', 'employee');
																$.cookie('gaeExclude', settings.gae.gaExclusionKey, { expires: 30 });
																_gaq.push(['_setVar', settings.gae.gaExclusionKey]);
												}else{
																	$.cookie('gaeExclude', 'anon', { expires: 30 });
												}
										});
								}else if(gaeExclude === settings.gae.gaExclusionKey){
												_gaq.push(['_setVar', settings.gae.gaExclusionKey]);
								}		
						}
    }
  };
})(jQuery);