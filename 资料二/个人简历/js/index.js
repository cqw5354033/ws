/**
 * Created by Administrator on 2017/7/25.
 */
$(function(){
    $(function(){
        $("[data-toggle='tooltip']").tooltip();
        $("[data-toggle='popover']").popover();
    });
    $('.navbar-nav a, .toAbout').click(function(){ //�������󶨵���¼�
        $('body,html').animate({          //��body ��Ӷ���Ч��
            scrollTop : $(this.hash).offset().top
        },500);
        return false;
    });
    //�������� activate.bs.scrollspy �¼�
    $('.navbar').on('activate.bs.scrollspy ', function(){
        //�����һ��li�� active�������   //ѡ��
        if( $('.navbar-nav li').eq(0).hasClass('active')){
            //�������ı������ó���
            $(this).css({
                background : 'none'
            });
            //���򵼺����ı������ó� 'rgba(0,0,0,.5)'
        } else{
            $(this).css({
                background :  'rgba(0,0,0,.5)'
            })
        }
    })
});
