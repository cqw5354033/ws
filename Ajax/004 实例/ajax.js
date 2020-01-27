function ajax(method,url,param,async,callback) {
	//创建xml对象
	var ajax = null;
	try {
		ajax = new XMLHttpRequest();
	} catch (e) {
		ajax = new ActiveXObject('Microsoft.XMLHTTP');
	}

	if (method === 'get') {
		//ajax.open(请求方式，接口，是否异步)
		ajax.open('get', url + param, async);
		//向服务器发送请求
		ajax.send();
	}
	if (method === 'post') {
		ajax.open('post',url,async);
		//设置请求头的类型
		ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		ajax.send(param);
	}

	ajax.onreadystatechange = function() {
		//当状态改变时
		if (ajax.readyState === 4 && ajax.status === 200) {
			//业务逻辑
			callback(ajax.responseText);
		}
	}
}