(function($) {
  Drupal.behaviors.gae = {
    attach: function (context, settings) {
      if (typeof _gaq !== 'undefined'){
                var gaeExclude = $.cookie('gaeExclude');
                var disableStr = 'ga-disable-' + settings.gae.gaProperty;
                if (typeof gaeExclude === 'undefined' || gaeExclude === null) {
                    $.getJSON("http://ip-api.com/json/?callback=?", function(data) {
                        if( ($.inArray(data.query, settings.gae.gaExclusionIPv4s) !== -1) ) {
                                window[disableStr] = true;
                                $.cookie('gaeExclude', settings.gae.gaExclusionKey, { expires: 3600 });
                                $.cookie(disableStr, true, { expires: 3600 });
                                _gaq.push(['_setVar', settings.gae.gaExclusionKey]);

                        }else{
                                  $.cookie('gaeExclude', 'anon', { expires: 30 });
                        }
                    });
                }else if(gaeExclude === settings.gae.gaExclusionKey){
                        window[disableStr] = true;
                        _gaq.push(['_setVar', settings.gae.gaExclusionKey]);

                }
            }
    }
  };
})(jQuery);
