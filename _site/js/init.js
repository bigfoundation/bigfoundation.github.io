(function($) {
    $(function() {

        $('.button-collapse').sideNav();
        $('.carousel').carousel();

        $('.pushpin').each(function() {
            var $this = $(this);
            var $target = $('#' + $(this).attr('data-target'));

            if (document.documentElement.clientWidth < 600) {
                $this.pushpin({
                    top: $target.offset().top,
                    bottom: $target.offset().top + $target.outerHeight() - $this.height()
                });
            }

        });

        $.get( "https://lk.big.foundation/smartContract", function( data ) {
            var percent = (data.result.collected/data.result.softCap * 100).toFixed(2)+"%";
            $('#wallets').text(data.result.createdWallets);
            $('#queue').text(data.result.queue);
            $('#buyed').text(parseInt(data.result.buyTokens,10));
            $('#supply').text(parseInt(data.result.tokensSupply,10));
            $('#collected').text(data.result.collected);
            $('#cap').text(data.result.softCap);
            $('#progress').css("width", percent);
            $('#percent').text(percent);
        }, "json" );

    }); // end of document ready
})(jQuery); // end of jQuery name space