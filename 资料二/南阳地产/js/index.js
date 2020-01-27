$(function  () {
    $('#banner').carousel({
        interval : 3000     //控制时间
    });
//				点击导航实现滚屏效果
    $('.navbar-nav a,[href="#top"]').click(function () {
        $('body,html').animate({
            scrollTop : $(this.hash).offset().top
        },500);
        return false
    });
    $('[data-toggle="tooltip"]').tooltip();
    $('.fix a:eq(0)').on('mouseover', function () {
        $(this).html('电话')
    }).on('mouseout', function () {
        $(this).html('<i class="glyphicon glyphicon-earphone"></i>')
    });
    $('.fix a:eq(1)').on('mouseover', function () {
        $(this).html('TOP')
    }).on('mouseout', function () {
        $(this).html('<i class="glyphicon glyphicon-hand-up"></i>')
    })
});