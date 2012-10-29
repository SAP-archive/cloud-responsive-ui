// jquery ready function is execute after the DOM is ready
$(document).ready(function() {

    // if the DOM is ready, see if all is set up correctly
    // by calling our fake-server
    $.ajax({
        url: '/api/v1/content',
        success: function(result) {
            // if we're successful, we append SUCCESS to the DOM
            $('body').append('<h3>SUCCESS: All seems to be set up correctly!</h3>' + '<br />' + JSON.stringify(result));
        },
        error: function() {
            // else ERROR
            $('body').append('<h3>ERROR: Something seems to be set up wrongly!</h3>');
        }
    });

});
