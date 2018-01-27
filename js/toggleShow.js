/**
 * Created by yunhan on 2017/9/18.
 */
$(document).ready(function () {
    function toggleShow(trigger,target,cls,event) {
        $(".header-login").on(event,trigger,function (e) {
            alert('click');
            e.stopPropagation();
            if($(target).css('visibility')=='hidden'
                ||$(target).css('display')=='none'
                ||$(target).css('opacity')==0){
                $(target).addClass(cls);
            }else {
                $(target).removeClass(cls);
            }
        })
    }
    toggleShow('.user-logged','.dropdown','show');
});