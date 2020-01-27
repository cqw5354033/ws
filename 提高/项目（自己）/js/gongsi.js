/**
 * Created by Administrator on 2017/11/16.
 */
$(function(){
    var url=window.location.href;
    var urlObj=getUrl(url);

    $.ajax({
        url:'data/company.json?pid='+urlObj.pid,
        datatype:'json',
        type:'get',
        success:function(date){
            console.log(date);

            var str1='';
            str1+='<img src="'+date.imageUrl+'" alt="" class="pull-left img-responsive"/>'+
                    '<div>'+
                        '<h3>'+date.name+'</h3>'+
                        '<p>'+date.industry+'/'+date.state+'/'+date.people+'</p>'+
                    '</div>';
            $('.muke').html(str1);


            var str2='';
            $.each(function(i,v){
                if(i==0){
                    str2 +='<a href="" class="active">'+v.name+'</a>';
                }else{
                    str2+='<a href="">'+v.name+'</a>';
                }
            });
            $('.work_in').html(str2);


            //拼凑tab切换的内容
            var str3='';
            $.each(date.positionClass,function(i,v){
                str3+='<div class="qian">';
                $.each(v.positionList,function(i2,v2){
                    //每一个v2 现在是一个具体的职位
                    console.log(v2);
                    str3+='<h3>'+v2.name+'</h3>'+
                            '<p class="pull-left">'+v2.createdDate+'</p>'+
                            '<a href="" class="pull-right">'+v2.salary+'</a>';
                });
                str3+='</div>';
            });
            $('.work').html(str3);
        },
        error:function(error){
            console.log('请求错误：错误的状态码是：'+error.readyState);
            console.log('错误的提示信息是:'+error.statusText);
            console.log('http请求错误码：'+error.status);
        }
    });

    //Tab切换
    $('.work_in a').live('click',function(){
        //当前标签为选中状态
        $('.work_in a').removeClass('cur');
        $(this).addClass('cur');
        //当前的内容为显示的状态
        $('.qian').hide();
        $('.qian').eq($(this).index()).fadeIn(700);
    })

});









