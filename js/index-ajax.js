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
            error:function (data) {
                alert("Section Header Based Recognize 返回数据失败！");
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
            error : function(data) {
                alert("Section Content Based Recognize 返回数据失败！");
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
                alert("Paragraph Based Recognize 返回数据失败！");
            }
        });
    }
    var $text = $(".tab_box>textarea");
    if($text.val()!=""){
        //只能用textarea作为标签
        $("textarea").val('');
        //alert($text.val());
    }
    var $input_id = $text.eq(0).attr("id");
    $("#btn-search").click(function (event){
        alert('我是默认点击1处理前');
        var data = $text.val();
        if(data!=""){getServlet1($("#input_value1").val());}
        else if(data==""){alert("请填写数据内容！");}
        alert('我是默认点击1处理后');
    });
    $(".tab_menu ul li").click(function () {
        var index = $(".tab_menu ul li").index($(this));

        $input_id = $text.eq(index).attr("id");
        if($input_id == 'input_value1'){
            alert('我是第一个文本框');
            if($text.val()!=""){$("textarea").val('');}
            $("#btn-search").click(function (event){
                alert('我是点击1处理前');
                var data = $text.val();
                if(data!=""){getServlet1($("#input_value1").val());}
                else if(data==""){alert("请填写数据内容！");}
                alert('我是点击1处理后');
            });
        }else if($input_id == 'input_value2'){
            alert('我是第二个文本框');
            if($text.val()!=""){$("textarea").val('');}
            $("#btn-search").click(function (event) {
                alert('我是点击2处理前');
                var data = $text.val();
                if(data!=""){getServlet2($("#input_value2").val());}
                else if(data==""){alert("请填写数据内容！");}
                alert('我是点击2处理后');
            });
        }else if($input_id == 'input_value3'){
            alert('我是第三个文本框');
            if($text.val()!=""){$("textarea").val('');}
            $("#btn-search").click(function (event) {
                alert('我是点击3处理前');
                var data = $text.val();
                if(data!=""){getServlet3($("#input_value3").val());}
                else if(data==""){alert("请填写数据内容！");}
                alert('我是点击3处理后');
            });
        }
    });
});