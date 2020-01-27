$(function () {
    // 点击获取验证码按钮
    $('#get_code').click(function () {
        //验证手机号码
        GetKey.ver();
    })
    // 点击领取按钮
    $('.btn_code').click(function () {
        //验证码
        GetKey.ver_();
    })
    // 复制按钮
    $('.btn_copy').click(function () {
        GetKey.copy();
    })
    //更换账号按钮
    $('.btn_change').click(function () {
        $('.item_box3').hide();
        $('.item_box').show();
    })
});

GetKey = {
    // 保存电话
    num:'',
    //秒数
    countdown : 60,
    //验证号码
    ver : function(){
        if($('#num').val() == ''||$('#num').val().length!==11)
        {
            alert('请输入正确手机号码！')
        }else{
            GetKey.get()
        }
    },
    //验证号码
    ver_ : function(){
        if($('#num').val() == ''||$('#num').val().length!==11||$('#code').val()=='')
        {
            alert('手机或验证码为空！')
        }else{
            GetKey.sub()
        }
    },
    //倒计时
    settime : function(obj){
        //发送验证码倒计时
        // obj.val(countdown);
        if (GetKey.countdown == 0) {
            obj.attr('disabled',false);
            obj.html("获取验证码");
            GetKey.countdown = 60;
            return;
        } else {
            obj.attr('disabled',true);
            obj.html("重新发送(" + GetKey.countdown + ")");
            GetKey.countdown--;
        }
        setTimeout(function() {
                GetKey.settime(obj) }
            ,1000)
    },
    //获取验证码
    get:function () {
        GetKey.num = $('#num').val();
        var url = $('#get_code').attr('cmcc-ajax');
        msisdn = GetKey.num ;
        $.ajax({
            type: "post",
            url:url,
            async: false,
            dataType: 'json',
            data:
                {
                    msisdn:msisdn
                },
            error: function (e) {
                alert(e.responseText);
                console.log('err');
            },

            success: function (retval) {
                console.log(retval);
                // if (retval.err.length > 0) {
                //                 //     alert(retval.err);
                //                 //     return false;
                //                 // }
                // if (retval.status != 100) {
                //     util.dialog.confirm(data.message);
                // }
                if(retval.status == 9999){
                    $('.item_box').hide();
                    $('.item_box2').show();
                }
                if (retval.status == 2000){
                    GetKey.settime($('#get_code'));
                }
            }
        })
    },
    //提交按钮
    sub:function () {
        var code = $('#code').val();
        msisdn = GetKey.num;
        var url = $('.btn_code').attr('cmcc-ajax');
        $.ajax({
            type: "post",
            url:url,
            async: false,
            dataType: 'json',
            data:
                {
                    msisdn:msisdn,
                    smscode:code
                },
            error: function (e) {
                alert(e.responseText);
            },
            success: function (retval) {
                if (retval.status == 2000){
                  $(".item_box").hide();
                  $('.btn_select').html(retval.key);
                  $(".item_box2").show();
                }
                if(retval.status == 9999){
                    alert('请输入正确验证码')
                }
            }
        })
    },
    //复制按钮
    copy:function () {
        var Url2 = $('.btn_select').html();
        var oInput = document.createElement('input');
        oInput.value = Url2;
        document.body.appendChild(oInput);
        oInput.select(); // 选择对象
        document.execCommand("Copy"); // 执行浏览器复制命令
        oInput.className = 'oInput';
        oInput.style.display='none';
        $('.btn_copy').html('复制成功！');
        $('.btn_copy').css('color','#01b2e9');
        // $('.btn_copy').animate({'color':'green'},1000)
    }
};