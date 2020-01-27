$(document).ready(function(){
	//获取url中的get参数  //getUrlParam定义在common.js中
	var url=window.location.href;	 //获取url
	var urlObj=getUrlParam(url);   //{pid:p3,uid:p1}

	//详情页面请求要带上  职位的id
	$.ajax({
		url:'./data/position.json?pid='+urlObj.pid,
		datatype:'json',
		type:'get',
		success:function(data){
			//第一部分
			var str1='';
			str1+='<p>'+data.name+' <span>'+data.salaryName+'</span></p>'+
      				'<p>'+data.cityName+'  '+data.experience+' '+data.education+'</p>'+
      				'<p>'+data.benefit+'</p>';
      		$('.content1').html(str1);
      		//第二部分   注意点击跳转到公司详情页面要带上公司的id
      		var str2='';
      		str2+='<a href="./company.html?cid='+data.companyId+'"><img src="'+data.imageUrl+'" alt="">'+
      				'<p>'+data.companyName+'</p>'+
      			   '<p>'+data.industryName+'/A轮/'+data.scaleName+'</p></a>';
      		$('.content2').html(str2);
      		var str3='';
      		//把服务器返回的换行符 替换成<br/>
      		data.description=data.description.replace(/\n/,'<br/>');
      		//第三部分
      		str3+='<h3>职位描述</h3>'+
        			'<div class="zhiz">'+
          			'<p>'+data.description+'</p>'+
        		   '</div>';
            $('.content3').html(str3);
		},
		error:function(error){
			console.log('请求错误：错误的状态码是：'+error.readyState);
			console.log('错误的提示信息是:'+error.statusText);
			console.log('http请求错误码：'+error.status);
		}
	});

});