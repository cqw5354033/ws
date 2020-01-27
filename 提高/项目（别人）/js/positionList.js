$(document).ready(function(){
	//如果用户登录了展示用户信息 如果没有登录 展示登录按钮
	
	//请求首页列表的数据
	$.ajax({
		url:'./data/positionList.json',
		datatype:'json',
		type:'get',
		success:function(data){
			console.log(data);
			var str='';
			$.each(data,function(i,v){
				str+='<a href="./position.html?pid='+v.id+'"><dl>'+
			           '<dt><img src="'+v.imageUrl+'" alt=""></dt>'+
			           '<dd>'+
			               '<p class="p1">'+v.companyName+'['+v.cityName+'] '+v.industryName+' '+v.scaleName+'</p>'+
			               '<p class="p2">'+v.salaryName+'</p>'+
			               '<p class="p3">'+v.date+'</p>'+
			           '</dd>'+
       				  '</dl></a>';
			});
			
			$('.plist').html(str);
		},
		error:function(error){
			console.log('请求错误：错误的状态码是：'+error.readyState);
			console.log('错误的提示信息是:'+error.statusText);
			console.log('http请求错误码：'+error.status);
		}


	});
});