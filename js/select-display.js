/**
 * Created by yunhan on 2017/9/16.
 */
$(document).ready(function () {
    var $target = $("#display-order");
    $target.on('change',function () {
       if(this.value=="TITLE"){
           $('p[class^=TITLE]').css('display','none');
       }
        $('.'+this.value).css('display','block').siblings('p[class^=TITLE]').css('display','none');
        Height('.all-site-wrap');
    });
    /*var $target = $('option');
    $target.on('click',function () {
        //alert(this.value);
        if(this.value=="TITLE"){
            $('p[class^=TITLE]').css('display','none');
        }
        $('.'+this.value).css('display','block').siblings('p[class^=TITLE]').css('display','none');
    });*/
});