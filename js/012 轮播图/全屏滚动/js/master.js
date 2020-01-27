window.onload=function(){
	//获取浏览器宽度 每次滚动的距离应该是浏览器的宽度
	var c_width=document.body.clientWidth?document.body.clientWidth:document.documentElement.clientWidth;
	//动态设置内层盒子的宽度 内层盒子的宽度 等于图片宽度的和
	var lb_content=document.getElementsByClassName('lunbo_content')[0];
	var img_ele=lb_content.getElementsByTagName('img');
	var img_len=img_ele.length;
	lb_content.style.width=c_width*img_len+'px';
	//图片的宽度等于页面的宽度
	for(var i=0;i<img_len;i++){
		img_ele[i].style.width=c_width+'px';
	}

    var curindex=0;//滚动开始的下标
    //滚动的基本函数
    function gundong(){
    	//如果超过了图片的数量则归零
    	if(curindex>=img_len){
    		curindex=0;
    	}
    	lb_content.style.marginLeft=-curindex*c_width+'px';
    	curindex++;
    }
    //设置定时器是否能开启的状态
    var timer=null;
    function kaiqi(){
    	if(timer===null){
    	  timer=setInterval(gundong,2000);
    	}
    }
    kaiqi();
    //鼠标点击滚动的实现
    var lb_left=document.getElementById('lb_left');
    var lb_right=document.getElementById('lb_right');
    lb_right.onclick=function(){
    	gundong();
    };
    lb_left.onclick=function(){
    	clearInterval(timer);
    	timer=null;//设置成允许开启的状态
    	if (curindex<=1) {
    		return;
    	}
    	curindex=curindex-2;
    	gundong();
    };
    lb_left.onmouseout=function(){
    	kaiqi();
    }
    
};