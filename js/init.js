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

    }); // end of document ready
})(jQuery); // end of jQuery name space