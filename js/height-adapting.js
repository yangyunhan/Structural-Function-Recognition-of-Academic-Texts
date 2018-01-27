/**
 * Created by yunhan on 2017/9/9.
 */
function Height(height) {
    var $height = $(height);/*.all-site-wrap*/
    var len = $height.height();
    if(len>414){
        $(".main-nav").css("height",len+'px');/*len+40+'px'*/
    }else {
        $(".main-nav").css("height",414+'px');
    }
}
$(document).ready(function () {
    Height('.all-site-wrap');
});
