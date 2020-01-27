/**
 * Created by Administrator on 2017/11/16.
 */
//获取url参数的函数
function getUrl(name){
    name=name.substr(name.lastIndexOf('?')+1);
    if(name.indexOf('&')==-1){
        var fanhui={};
        var arr=name.split('=');
        fanhui[arr[0]]=arr[1];
        return fanhui;
    }else{
        var fanhui2={};
        var arr2=name.split('&');
        for(var i=0;i<arr2.length;i++){
            var arr3=arr2[i].split('=');
            fanhui2[arr3[0]]=arr3[1];
        }
        return fanhui2;
    }
}












