$('#frm_search').hide();
$('#wrap').width('100%');
$('.search-results').width('100%');
$('.search-results').prepend('<h1 style="color:#16a085;">You are using PucAdd 1.1</h1><h3 style="color:#27ae60;">Now you can simply click a card to add it to your Haves list.<br/>Use your browser\'s zoom controls to make the cards even smaller if you\'d like!</h3><p><a href="https://github.com/tomreece/pucadd" target="_blank">https://github.com/tomreece/pucadd</a></p>');

var resizeAndRebind = function () {
    $('.card-image img').css('max-width', 160);
    $('.card-image img').css('cursor', 'pointer');
    $('.card-image').height(220);
    $('.search-results .card-image').css('min-width', 0);
    $('.overlay').hide();
    $('div[id^=cardID-').unbind('click');
    $('div[id^=cardID-').click(function(e) {
        var id = e.currentTarget.id.replace('cardID-', '');
        addCardToList('have', id, 0);
        return false;
    });
}

resizeAndRebind();

$('.card-results').infinitescroll('update', {
    loading: {
        finished: function () {
            $('#infscr-loading').hide();
            resizeAndRebind();
        }
    }
});