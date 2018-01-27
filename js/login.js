/**
 * Created by yunhan on 2017/9/10.
 */
$(document).ready(function () {
    $("input[type='text'],input[type='password']").focus(function () {
        $(this).parent().addClass('active');
        if($(this).parents(".ir-input-wrapper").next(".help-block").length>0){
            $(this).parents(".ir-input-wrapper").next(".help-block").remove();
        }
        if($(this).parents(".ir-input-inline").next(".help-block").length>0){
            $(this).parents(".ir-input-inline").next(".help-block").remove();
        }
    }).blur(function () {
        $(this).parent().removeClass('active');
    });

    $("#loginBtn").click(function () {
        var $isValid = validate($(".ir-login-form"),{
            username:{
                parent:".ir-input-wrapper",
                validators:{
                    notEmpty:{
                        message:"请输入用户名"
                    }
                }
            },
            password:{
                parent:".ir-input-wrapper",
                validators:{
                    notEmpty:{
                        message:"请输入登录密码"
                    }
                }
            },
            validateCode:{
                parent:".ir-input-inline",
                validators:{
                    notEmpty:{
                        message:"请输入验证码"
                    }
                }
            }
        });
        return $isValid;
    });
});



