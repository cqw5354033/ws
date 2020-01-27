//获取url参数的函数
	function getUrlParam(name) {
	    //截取？之后的字符串   http://localhost/lagou_1/position.html?pid=p3
	    name=name.substr(name.lastIndexOf('?')+1);  //pid=p3&uid=p1
	    //如果不含有&只有一个参数
	    if(name.indexOf('&')==-1){
	    	var result={};           
	    	var arr=name.split('=');   //['pid','p3']
	    	result[arr[0]]=arr[1];   //{pid:p3}
	    	return result;
	    }else{
	    	//含有多个参数
	    	var result={};            //pid=p3&uid=p1
	    	var arr=name.split('&');   //['pid=p3','uid=p1'] 
	    	for(var i=0;i<arr.length;i++){
	    		var arr2=arr[i].split('=');
	    		result[arr2[0]]=arr2[1];   //{pid:p3,uid:p1}
	    	}
	    	return result;
	    }
	}

$(document).ready(function(){
	//把页面宽度的十分之一作为html font-size的一个单位  让页面做到自适应
    $('html').css('fontSize',$(document).width()/10);
    //点击按钮返回功能
	$('.back').click(function(){
		window.history.back();
	});

	
});