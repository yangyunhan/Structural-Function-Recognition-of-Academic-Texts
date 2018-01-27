/**
 * Created by yunhan on 2017/9/10.
 */
$(document).ready(function () {
    function getServlet(url,errorinfo,data) {
        $.ajax({
            url:encodeURI(url),
            type:"POST",
            dataType:"text",
            data:{value:data},
            contentType:"application/x-www-form-urlencoded;charset=UTF-8",
            cache:false,
            async:false,
            success:function (result) {
                var data = $.parseJSON(result);
                $('#RecResult').text(data);
            },
            error:function (data) {
                $("#recresult").text(errorinfo+" 返回数据失败！");
            }
        });
    }

    var $text = $(".tab_box>textarea");
    if($text.val()!=""){
        $("textarea").val('');
    }
    var $input_id = $text.eq(0).attr("id");
    alert($input_id);
    $("#btn_search1").click(function(){getServlet("HeaderServlet","Section Header Based Recognize",$("#input_value").val());});

    $(".tab_menu ul li").click(function () {
        var index = $(".tab_menu ul li").index($(this));
        $input_id = $text.eq(index).attr("id");
        if($input_id == 'input_value1'){
            if($text.val()!=""){$("textarea").val('');}
            alert();
            $("#btn_search1").click(function(){getServlet("HeaderServlet","Section Header Based Recognize",$("#input_value").val());});
        }else if($input_id == 'input_value2'){
            if($text.val()!=""){$("textarea").val('');}
            $("#btn_search2").click(function(){getServlet("SectionServlet","Section Content Based Recognize",$("#input_value").val());});
        }else if($input_id == 'input_value3'){
            if($text.val()!=""){$("textarea").val('');}
            $("#btn_search3").click(function(){getServlet("ParaServlet","Paragraph Based Recognize",$("#input_value").val());});
        }
    });
});