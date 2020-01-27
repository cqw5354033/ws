$(document).ready(function(){
	//表单验证部分
 $.validator.setDefaults({
    submitHandler: function() {
      //表单验证通过后的执行逻辑
       $.ajax({
      url:'./data/login.json?phone='+$("input[name=phone]").val()+'&password='+$("input[name=password]").val(),
			datatype:'json',
			type:'get',
			success:function(data){
				if(data.name){
					//把用户的登录信息存储到本地
					localStorage.setItem('user_name',data.name);
					localStorage.setItem('user_id',data.id);
					localStorage.setItem('user_img',data.image);	
					alert('登录成功！');
					//window.location.href='./positionList.html';					
				}else{
					alert('登录失败，请检查登录信息！');
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
 //验证规则和提示文字的定义
    $("#loginForm").validate({
      rules:{
        phone:{
          required:true,
          isPhone:true,
        },
        password:{
          required:true,
          maxlength:12,
          minlength:6
        }       
      },
      messages:{
        phone:{
          required:'请填写'
        },
        password:{
          required:'请填写',
          maxlength:'最多12位',
          minlength:'最少6位'
        }
      }
    });

});