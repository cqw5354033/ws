/**
 * Created by Administrator on 2017/7/25.
 */
$(function(){
    $(function(){
        $("[data-toggle='tooltip']").tooltip();
        $("[data-toggle='popover']").popover();
    });
    $('.navbar-nav a, .toAbout').click(function(){ //给导航绑定点击事件
        $('body,html').animate({          //给body 添加动画效果
            scrollTop : $(this.hash).offset().top
        },500);
        return false;
    });
    //导航条绑定 activate.bs.scrollspy 事件
    $('.navbar').on('activate.bs.scrollspy ', function(){
        //如果第一个li有 active这个类名   //选中
        if( $('.navbar-nav li').eq(0).hasClass('active')){
            //导航条的背景设置成无
            $(this).css({
                background : 'none'
            });
            //否则导航条的背景设置成 'rgba(0,0,0,.5)'
        } else{
            $(this).css({
                background :  'rgba(0,0,0,.5)'
            })
        }
    })
});
