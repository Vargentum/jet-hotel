/**
 * Created with JetBrains WebStorm.
 * User: vargentum
 * Date: 30.04.13
 * Time: 0:32
 * To change this template use File | Settings | File Templates.
 */
$('.b-subway__hotel').each(function(){
    var trigger = $(this).find('.b-hotel_popup__trigger');
    var popup = $(this).find('.b-hotel_popup');
    $(popup).hide();
    $(this).hover(
        function(){
            $(popup).fadeIn('fast').addClass('active');},
        function(){
            if($(popup).hasClass('active')){
                $(popup).stop(true,true);
            } else{
                $(popup).stop(true,true).delay(500).fadeOut('fast');
            }
        }
    );
});