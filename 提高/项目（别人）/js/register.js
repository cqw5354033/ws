$(document).ready(function(){

	//点击发送短信的效果
	var num=60;    //初始的时间
	var timer=null;   //定时器的容器
	//计时效果函数
	function jishi(){		
		//如果timer不等于null则返回 防止重复开启定时器
		if(timer!==null){
			return;
		}
		timer=setInterval(function(){
			if(num==0){
				clearInterval(timer);
				//初始化数据
				num=60;
				$('.yzm span').html('发送短信');
				timer=null;
				return;
			}
			num--;
			$('.yzm span').html(num+'s');

		},1000);
	}

	//点击按钮的逻辑
	$('.yzm span').click(function(){

		$.ajax({
			url:'./data/code.json?phone='+$('input[name=phone]').val(),
			datatype:'json',
			type:'get',
			success:function(data){
			//data.state==1 服务器告诉我们给用户发送验证码成功
				if(data.state==1){
					jishi();
				}else{
					alert('发送失败请重试！');
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
       		url:'./data/regist.json?phone='+$("input[name=phone]").val()+'&password='+$("input[name=password]").val()+'&code='+$('.yzm input').val(),
			datatype:'json',
			type:'get',
			success:function(data){
				//data.name 存在用户注册成功
				if(data.name){
					if(confirm('注册成功！跳转到登录页面？')){
						//跳转到登录页面
						window.location.href='./login.html';
					};
				}else{
					alert('注册失败，请检查您填写的信息！');
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
    $("#registForm").validate({
      rules:{
      	//phone是name的值
        phone:{
          required:true, //必填项
          isPhone:true,   //必须是一个手机号
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
      messages:{
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