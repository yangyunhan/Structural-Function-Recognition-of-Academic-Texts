/**
 * Created by yunhan on 2017/9/17.
 */
$(document).ready(function () {
    function getContent() {
        $.ajax({
            url:encodeURI('searchButtonServlet'),
            type:"POST",
            dataType:"text",
            data:{value:arguments[0]},
            contentType:"application/x-www-form-urlencoded;charset=UTF-8",
            cache:false,
            async:false,
            success:function (result,len) {//result是数组，每10条一组
                $waiting.css('display','none');
                $results.css('display','block');
                var data = $.parseJSON(result[0]);//模板中的json对象，10条一组
                $('#RecResult').text(Template(data));//检索结果
                $("#results-num").text(len).css('display','inline-block');//检索结果数量展示
                Height('.all-site-wrap');//导航栏高度自适应
                //分页
                Page({
                    num:len/10,//页码数
                    startnum:1,
                    elem:$('#page2'),//指定的元素
                    callback:function (n) {
                        console.log(n);
                        var data = $.parseJSON(result[n-1]);//第n-1页
                        $("#RecResult").text(Template(data));
                        Height('.all-site-wrap');
                    }
                });
            },
            error:function () {
                $waiting.css('display','none');
                $results.text('Ah, there is an error!').css({
                    'display':'block',
                    'text-align':'center',
                    'font-size':'18px',
                    'font-weight':'500',
                    'width':'80%',
                    'margin-top':'50px'
                });
            }
        });

    }
    $("input[name='search']").val("").focus();
    var $waiting = $("#search-loading");//等待
    var $results = $("#search-results");//检索结果
    var $searchTerm = $("#searchTerm");//检索词
    var $searchInput = $("#controlBarSearch");//输入框
    if($searchInput.val()!=""){//清空输入框内容
        $searchInput.value="";
    }
    $('#searchFieldButton').click(function (event) {//单击检索按钮
        $waiting.css('display','block');//等待显示
        $results.css('display','none');//内容清空
        $searchTerm.text($searchInput.val());//检索结果中的检索词展示
        event.preventDefault();
        getContent($searchInput.val());//根据检索词请求数据
    });
});