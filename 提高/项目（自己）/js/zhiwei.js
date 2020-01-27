/**
 * Created by Administrator on 2017/11/16.
 */
$(function(){
    var url=window.location.href;
    var urlObj=getUrl(url);

    $.ajax({
        url:'./data/position.json?pid='+urlObj.pid,
        datatype:'json',
        type:'get',
        success:function(date){
            console.log(date);
            //第一部分
            var str1='';
            str1 +='<p>'+date.name+'<span>'+date.salaryName+'</span></p>'+
                    '<p>'+date.cityName+'  '+date.experience+' '+date.education+'</p>'+
                    '<p>'+date.benefit+'</p>';
            $('.content1').html(str1);

            //第二部分
            var str2='';
            str2 += '<a href="./gongsi.html?cid='+date.companyId+'"> ' +
                        '<img src="'+date.imageUrl+'" alt="" class="pull-left">'+
                        '<p>'+date.companyName+'</p>'+
                        '<p>'+date.industryName+'/A轮/'+date.scaleName+'</p>'+
                    '</a>';
            $('.content2').html(str2);

            //第三部分
            var str3='';
            str3 += '<h3>职位描述</h3>';
            $('.content3').html(str3);

            //第四部分
            date.description=date.description.replace(/\n/,'<br>');
            var str4='';
            str4 += '<div>'+date.description+'</div>';

            $('.content4').html(str4);

        },
        error:function(error){
            console.log('请求错误：错误的状态码是：'+error.readyState);
            console.log('错误的提示信息是:'+error.statusText);
            console.log('http请求错误码：'+error.status);
        }
    });
});







