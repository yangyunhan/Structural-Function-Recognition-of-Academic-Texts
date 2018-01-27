/**
 * Created by yunhan on 2017/9/10.
 */
$(document).ready(function () {
    function getServlet1() {
        $.ajax({
            url:encodeURI("HeaderServlet"),
            type:"POST",
            dataType:"text",
            data:{value:arguments[0]},
            contentType:"application/x-www-form-urlencoded;charset=UTF-8",
            cache:false,
            async:false,
            success:function (result) {
                var data = $.parseJSON(result);
                $('#RecResult').text(data);
            },
            error:function () {
                $('#RecResult').val('Section Header Based Recognize 返回数据失败！');
            }
        });
    }
    function getServlet2() {
        $.ajax({
            url:encodeURI("SectionServlet"),
            type : "POST",
            dataType : "text",
            data:{value:arguments[0]},
            contentType: "application/x-www-form-urlencoded;charset=UTF-8",
            cache : false,
            async : false,
            success : function(result) {
                var data=$.parseJSON(result);
                $('#RecResult').text(data);
            },
            error : function() {
                $("#RecResult").val("Section Content Based Recognize 返回数据失败！");
            }
        });
    }
    function getServlet3() {
        $.ajax({
            url :encodeURI("ParaServlet"),
            type : "POST",
            dataType : "text",
            data:{value:arguments[0]},
            contentType: "application/x-www-form-urlencoded;charset=UTF-8",
            cache : false,
            async : false,
            success : function(result) {
                var data=$.parseJSON(result);
                $('#RecResult').text(data);
            },
            error : function(data) {
                $("#RecResult").val("Paragraph Based Recognize 返回数据失败！");
            }
        });
    }
    var $text = $(".tab_box>textarea");
    $('.tab_box').find("textarea").each(function () {
        if(this.value!=""){
            $("textarea").val('');
        }
    });

    var $input_id = $text.eq(0).attr("id");
    $("#btn-search1").click(function (){getServlet1($("#input_value1").val());});
    $(".tab_menu ul li").click(function () {
        var index = $(".tab_menu ul li").index($(this));
        $input_id = $text.eq(index).attr("id");
        if($input_id == 'input_value1'){
            $("#btn-search1").click(function () {getServlet1($("#input_value1").val());});
        }else if($input_id == 'input_value2'){
            $("#btn-search2").click(function () {getServlet2($("#input_value2").val());});
        }else if($input_id == 'input_value3'){
            $("#btn-search3").click(function () {getServlet3($("#input_value3").val());});
        }
    });
});