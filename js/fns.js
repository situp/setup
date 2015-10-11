$(document).ready(function(){
    $('.feature-title').click(function() {
        $target =  $(this).parent();
        if($target.hasClass('feature_on')) $target.removeClass('feature_on');
        else $target.addClass('feature_on');
    });

    $('a.fancybox').fancybox();
});