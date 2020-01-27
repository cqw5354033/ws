/**
 * Created by Administrator on 2017/11/20.
 */

$(function(){
    //����֤����
    $.validator.setDefaults({
        submitHandler: function() {
            $.ajax({
                url:'./data/login.json?phone='+$("input[name=phone]").val()+''+ $("input[name=password]").val()+' ',
                datatype:'json',
                type:'get',
                success:function(data){
                    if(data.name){
                        //���û���¼��Ϣ���浽����
                        localStorage.setItem('user_name',data.name);
                        localStorage.setItem('user_id',data.id);
                        localStorage.setItem('user_img',data.image);
                        alert('��½�ɹ�');
                        //window.location.href="./liebiao.html";
                    }else{
                        alert('��¼ʧ��');
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


    //��֤�������ʾ���ֵĶ���
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
            }
        }
    });

});