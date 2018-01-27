/**
 * Created by yunhan on 2017/8/28.
 */
$(document).ready(function () {
    //左侧fixed
    var $winWidth = $(window).width(),$setFixedLeft = ($winWidth-1140)/2,$setFixedRight = 65;
    var options1 = {
        target:'.function-list',
        scrollY:100,
        changedStyle:{
            position:'fixed',
            /*left:$setFixedLeft,*/
            right:$setFixedRight,
            top:100
        },
        defaultStyle:{
            position:'absolute',
            /*left:0,*/
            right:0,
            top:0
        }
    };
    $(window).scroll(options1,function () {
        if($(document).scrollTop()>options1.scrollY){
            $(options1.target).css(options1.changedStyle);
        }else {
            $(options1.target).css(options1.defaultStyle);
        }
    });
});
