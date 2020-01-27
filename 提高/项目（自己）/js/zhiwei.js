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
            //��һ����
            var str1='';
            str1 +='<p>'+date.name+'<span>'+date.salaryName+'</span></p>'+
                    '<p>'+date.cityName+'  '+date.experience+' '+date.education+'</p>'+
                    '<p>'+date.benefit+'</p>';
            $('.content1').html(str1);

            //�ڶ�����
            var str2='';
            str2 += '<a href="./gongsi.html?cid='+date.companyId+'"> ' +
                        '<img src="'+date.imageUrl+'" alt="" class="pull-left">'+
                        '<p>'+date.companyName+'</p>'+
                        '<p>'+date.industryName+'/A��/'+date.scaleName+'</p>'+
                    '</a>';
            $('.content2').html(str2);

            //��������
            var str3='';
            str3 += '<h3>ְλ����</h3>';
            $('.content3').html(str3);

            //���Ĳ���
            date.description=date.description.replace(/\n/,'<br>');
            var str4='';
            str4 += '<div>'+date.description+'</div>';

            $('.content4').html(str4);

        },
        error:function(error){
            console.log('������󣺴����״̬���ǣ�'+error.readyState);
            console.log('�������ʾ��Ϣ��:'+error.statusText);
            console.log('http��������룺'+error.status);
        }
    });
});







