<?php
	// //接收ajax传过来的参数
	// $id=$_POST['id'];
	// //在数据库中把具体的信息查询出来
	// $xinxi='商品名称：手机；商品id:'.$id.';商品价格：2999；page的值为'.$_POST['page'];
	// //返回查询到的数据
	// echo $xinxi;
	//php中的数据  json是语言之间通用的格式
	$shuiguo=array('apple','banana','pear');
	echo json_encode($shuiguo);
?>