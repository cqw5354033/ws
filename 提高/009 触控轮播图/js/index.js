/**
 * Created by Administrator on 2017/12/12.
 */
$(document).ready(function(){
    var tabPic = $('.tabPic');
    var pic = $('.pic');
    var index = 0;
    var screenW = $(document).width();
    var timer = null;
    function gundong (){
        timer=setInterval(function(){
            index++;
            if(index == pic.find('li').length){
                index=0;
            }

            //处理焦点
            $('.desc li').removeClass('active');
            $('.desc li').eq(index).addClass('active');
            pic.animate({'left':'-'+index*screenW+'px'});
        },2000);
    }
    // gundong();

    //滑动开始
    //     多个事件按顺序实现
    pic[0].addEventListener('touchstart',function(evt){
        var evt = evt?evt:window.event;
        clearInterval(timer);
        startX = evt.touches[0].pageX;
    });
    //滑动过程中
    pic[0].addEventListener('touchmove',function(evt) {
        var evt = evt?evt:window.event;
        juli = evt.touches[0].pageX-startX;
        pic.css('left','-'+(index*screenW-juli)+'px');
    });
    //滑动结束
    pic[0].addEventListener('touchend',function(evt) {
        if(juli>screenW/2&&index>0){
            //用户向右滑动了半屏以上的距离
            index--;
        }
        if(juli<screenW/2&&index<$('.pic li').length-1){
            //用户向左滑动了半屏以上的距离
            index++;
        }
        //处理焦点
        $('.desc li').removeClass('active');
        $('.desc li').eq(index).addClass('active');

        // 一滚一屏
        pic.animate({'left':'-'+index*screenW+'px'});

        // gundong();

    });

});