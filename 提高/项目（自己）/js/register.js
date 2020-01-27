/**
 * Created by Administrator on 2017/11/20.
 */

$(document).ready(function(){
    //点击发送短信的效果
    var num=60;
    var timer=null;
    function jishi(){
        if(timer !== null){
            return;
        }
        timer=setInterval(function(){
            if(num=0){
                clearInterval(timer);
                num=60;
                $('.input[type=button]').html('发送短信');
                timer=null;
                return;
            }
            num--;
            $('.input[type=button]').html(num+'s');
        },1000);
    }

    //点击按钮的逻辑
    $('.input[type=button]').click(function(){
        $.ajax({
            url:'./data/register.json?phone='+$('input[name=phone]').val(),
            datatype:'json',
            type:'get',
            success:function(data){
                if(data.state==1){
                    jishi();
                }else{
                    alert("发送失败");
                }
            },
            error:function(error){
                alert('异常请重试！');
                console.log('请求错误：错误的状态码是：'+error.readyState);
                console.log('错误的提示信息是:'+error.statusText);
                console.log('http请求错误码：'+error.status);
            }
        });
    });

    //表单验证部分
    $.validator.setDefaults({
        submitHandler: function() {
            //表单验证通过后的执行逻辑 把用户的信息发送给regist.json
            $.ajax({
                url:'./data/regist.json?phone='+$("input[name=phone]").val()+'&password='+$("input[name=password]").val()+'&code='+$(".input2 input[type=text]").val(),
                datatype:'json',
                type:'get',
                success:function(data){
                    //data.name 存在  用户注册成功
                    if(data.name){
                        if(confirm("注册成功，是否跳转到登录页面？")){
                            window.location.href='./login.html';
                        }
                    }else{
                        alert("注册失败");
                    }
                },
                error:function(error){
                    alert('异常请重试！');
                    console.log('请求错误：错误的状态码是：'+error.readyState);
                    console.log('错误的提示信息是:'+error.statusText);
                    console.log('http请求错误码：'+error.status);
                }
            });
        }
    });

    //添加一条验证手机号码的验证规则
    jQuery.validator.addMethod("isPhone", function(value, element) {
        var tel = /^1[3|4|5|8][0-9]\d{4,8}$/;
        return this.optional(element) || (tel.test(value));
    }, "手机号错误");

    //验证提示和提示文字的定义
    $('.content').validate({
        rules:{     //验证规则
            phone:{
                required:true,
                isPhone:true
            },
            password:{
                required:true,
                maxlength:12,
                minlength:6
            },
            code:{
                required:true,
                maxlength:4,
                minlength:4
            }
        },
        messages:{  //提示文字
            phone:{
                required:'请填写'
            },
            password:{
                required:'请填写',
                maxlength:'最多12位',
                minlength:'最少6位'
            },
            code:{
                required:'请填写'
            }
        }
    });

});