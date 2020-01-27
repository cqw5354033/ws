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


            //ƴ��tab�л�������
            var str3='';
            $.each(date.positionClass,function(i,v){
                str3+='<div class="qian">';
                $.each(v.positionList,function(i2,v2){
                    //ÿһ��v2 ������һ�������ְλ
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
            console.log('������󣺴����״̬���ǣ�'+error.readyState);
            console.log('�������ʾ��Ϣ��:'+error.statusText);
            console.log('http��������룺'+error.status);
        }
    });

    //Tab�л�
    $('.work_in a').live('click',function(){
        //��ǰ��ǩΪѡ��״̬
        $('.work_in a').removeClass('cur');
        $(this).addClass('cur');
        //��ǰ������Ϊ��ʾ��״̬
        $('.qian').hide();
        $('.qian').eq($(this).index()).fadeIn(700);
    })

});









