// 公司详情页面js
$(document).ready(function(){
	//解析url 拿到参数的对象
	var url=window.location.href;
	var urlObj=getUrlParam(url);
	//发送ajax请求 解析数据
	$.ajax({
		url:'./data/company.json?cid='+urlObj.cid,
		dataType:'json',
		type:'get',
		success:function(data){
			console.log(data);
			//公司信息的内容拼凑
			var str1='';
			str1+='<img src="'+data.imageUrl+'" alt="">'+
					'<p>'+data.name+'</p>'+
					'<p>'+data.industry+'/'+data.state+'/'+data.people+'</p>';
			$('.content2').html(str1);

			//拼凑分类标签的字符串 第一个 标签为cur
			var str2='';
			$.each(data.positionClass,function(i,v){
				if(i==0){
					str2+='<span class="cur">'+v.name+'</span>';
				}else{
					str2+='<span>'+v.name+'</span>';
				}
			});
			$('.fenlie p').html(str2);
			//拼凑tab切换的内容  
			var str3='';
			$.each(data.positionClass,function(i,v){
				//v  是每一个分类的对象 v.positionList 是每分类下的职位列表、
				str3+='<div class="tab_cont">';				
				$.each(v.positionList,function(i2,v2){
					//每一个v2 现在是一个具体的职位
					 console.log(v2);
					 str3+='<a href="./position.html?pid='+v2.id+'"><dl>'+
			   	  				'<dt>'+v2.name+'</dt>'+
			   	  				'<dd>'+v2.createdDate+'</dd>'+
			   	  				'<dd class="gongz">'+v2.salary+'</dd>'+
   	  						'</dl></a>';
				})
				str3+='</div>';
			});
			$('.tab_contL').html(str3);
		},
		error:function(error){
			console.log('请求错误：错误的状态码是：'+error.readyState);
			console.log('错误的提示信息是:'+error.statusText);
			console.log('http请求错误码：'+error.status);
		}
	});


	//tab切换的效果   因为span是ajax 请求回来的属于未来的元素  所以用live绑定
	$('.fenlie p span').live('click',function(){
		//当前标签为选中状态
		$('.fenlie p span').removeClass('cur');
		$(this).addClass('cur');
		//当前的内容为显示的状态
		$('.tab_cont').hide();
		$('.tab_cont').eq($(this).index()).fadeIn(700);
	})

	
});