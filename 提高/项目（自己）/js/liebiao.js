/**
 * Created by Administrator on 2017/11/16.
 */
$(function(){
    $.ajax({
        url:"./data/positionList.json",
        datatype:"json",
        type:"get",
        success:function(date){
            console.log(date);
            var str='';
            $.each(date,function(i,v){
                str+='<a href="./zhiwei.html?pid='+ v.id+'">' +
                        '<dl class="clearfix">'+
                            '<dt><img src="'+ v.imageUrl+'" alt="" class="pull-left"></dt>'+
                            '<dd>'+
                                '<p class="p1">'+ v.companyName+'['+ v.cityName+'] '+ v.industryName+' '+ v.scaleName+'</p>'+
                                '<p class="p2">'+ v.salaryName+'</p>'+
                                '<p class="p3">'+ v.date+'</p>'+
                            '</dd>'+
                        '</dl>' +
                    '</a>';
            });
            $('.container').html(str);
        },
        error:function(error){
            console.log('������󣺴����״̬���ǣ�'+error.readyState);
            console.log('�������ʾ��Ϣ��:'+error.statusText);
            console.log('http��������룺'+error.status);
        }

    });
});