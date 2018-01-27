/**
 * Created by yunhan on 2017/9/8.
 */
$(document).ready(function () {
    var $div_li = $("div.tab_menu ul li");
    $div_li.click(function () {
        $(this).addClass("selected").siblings().removeClass("selected");
        var index = $div_li.index(this);
        $("div.tab_box>textarea").eq(index).show().removeClass("hide").siblings().hide();
        $("div.tab_button>button").eq(index).show().removeClass("hide").siblings().hide();
    }).hover(function () {
        $(this).addClass("hover");
    },function () {
        $(this).removeClass("hover");
    });
});