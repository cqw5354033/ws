/**
 * Created by Administrator on 2017/11/13.
 */
$('.header span').click(function(){
    $('.header span').removeClass('cur');
    $(this).addClass('cur');
    $('.in1').hide();
    $('.in1').eq($(this).index()).fadeIn(1000);
});
$(function(){
   $('.form1').validate({
        errorElement:'em',
       errorPlacement:function(error, element){
           $(error).before(element);
       },

       rules:({
           username:{
               required:true,
               length:10
           }
       }),
       messages:({
           username:{
               required:'�ֻ�����δ��д',
               length:'11λ����'
           }
       })

   });
});

