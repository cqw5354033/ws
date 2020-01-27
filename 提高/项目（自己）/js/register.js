/**
 * Created by Administrator on 2017/11/20.
 */

$(document).ready(function(){
    //������Ͷ��ŵ�Ч��
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
                $('.input[type=button]').html('���Ͷ���');
                timer=null;
                return;
            }
            num--;
            $('.input[type=button]').html(num+'s');
        },1000);
    }

    //�����ť���߼�
    $('.input[type=button]').click(function(){
        $.ajax({
            url:'./data/register.json?phone='+$('input[name=phone]').val(),
            datatype:'json',
            type:'get',
            success:function(data){
                if(data.state==1){
                    jishi();
                }else{
                    alert("����ʧ��");
                }
            },
            error:function(error){
                alert('�쳣�����ԣ�');
                console.log('������󣺴����״̬���ǣ�'+error.readyState);
                console.log('�������ʾ��Ϣ��:'+error.statusText);
                console.log('http��������룺'+error.status);
            }
        });
    });

    //����֤����
    $.validator.setDefaults({
        submitHandler: function() {
            //����֤ͨ�����ִ���߼� ���û�����Ϣ���͸�regist.json
            $.ajax({
                url:'./data/regist.json?phone='+$("input[name=phone]").val()+'&password='+$("input[name=password]").val()+'&code='+$(".input2 input[type=text]").val(),
                datatype:'json',
                type:'get',
                success:function(data){
                    //data.name ����  �û�ע��ɹ�
                    if(data.name){
                        if(confirm("ע��ɹ����Ƿ���ת����¼ҳ�棿")){
                            window.location.href='./login.html';
                        }
                    }else{
                        alert("ע��ʧ��");
                    }
                },
                error:function(error){
                    alert('�쳣�����ԣ�');
                    console.log('������󣺴����״̬���ǣ�'+error.readyState);
                    console.log('�������ʾ��Ϣ��:'+error.statusText);
                    console.log('http��������룺'+error.status);
                }
            });
        }
    });

    //���һ����֤�ֻ��������֤����
    jQuery.validator.addMethod("isPhone", function(value, element) {
        var tel = /^1[3|4|5|8][0-9]\d{4,8}$/;
        return this.optional(element) || (tel.test(value));
    }, "�ֻ��Ŵ���");

    //��֤��ʾ����ʾ���ֵĶ���
    $('.content').validate({
        rules:{     //��֤����
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
        messages:{  //��ʾ����
            phone:{
                required:'����д'
            },
            password:{
                required:'����д',
                maxlength:'���12λ',
                minlength:'����6λ'
            },
            code:{
                required:'����д'
            }
        }
    });

});