/**
 * Created by Administrator on 2017/7/24.
 */

window.onload = function(){
    if(window.name == ''){
        window.name = 0;
        $('.loadingTop'). addClass('slideOutUp');
        $('.loadingMiddle'). addClass('middle');
        $('.loadingBottom'). addClass('slideOutDown');
    }else{
        //window.name = window.name * 1 + 1;
        //alert('你已刷新页面' + window.name +'次');
        $('.loadingTop, .loadingMiddle, .loadingBottom').remove();
    }
};


