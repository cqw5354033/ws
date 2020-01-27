/**
 * Created by Administrator on 2017/8/16.
 */
window.onload = function () {
    var  aTop = document.getElementById('top');
    aTop.onclick = fnl;
    var  time;
    function fn(){
        var xx =document.body.scrollTop-- || document.documentElement.scrollTop;
        if(xx <= 0){
            clearInterval(time)
        }
    }
    function fnl(){
        time = setInterval(fn,1);
    }
};