/**
 * Created by Administrator on 2017/10/20.
 */
window.onload=function(){
    var data=['image/icon.png','image/1-1.jpg','image/1.jpg','image/2.jpg','image/3.jpg',
        'image/4.jpg','image/5.jpg','image/6.jpg','image/7.jpg','image/8.jpg',
        'image/1-2.jpg','image/1-3.jpg','image/1-4.jpg','image/1-5.jpg','image/1-9.jpg',
        'image/2-1.jpg','image/2-2.jpg','image/2-3.jpg','image/2-4.jpg','image/2-5.jpg',
        'image/2-6.jpg','image/2-7.jpg','image/2-8.jpg','image/2-9.jpg','image/3-1.jpg'];

    //��̬׷��domԪ��
    function loaddate(){
        var list=document.getElementsByClassName('list')[0];
        for(var i=0;i<data.length;i++){
            var img=document.createElement('img');
            img.src=data[i];
            var box1 = document.createElement('div');
            box1.className = 'box1';
            box1.appendChild(img);
            var box=document.createElement('div');
            box.className='box';
            box.appendChild(box1);
            list.appendChild(box);
        }
    }
    loaddate();

    paixu();

    //���������Ĺ����в����ж��Ƿ�׷������
    window.onscroll=function(){
        if(panduan()){
            loaddate();     //�����µ�����
            paixu();        //������
        }
    };

    //�ж��Ƿ���Ҫ�����µ�����
    function panduan(){
        var boxs=document.getElementsByClassName('box');
        var last_box=boxs[boxs.length-1];
        var lb_top=last_box.offsetTop;      //���һ�����ӵ������ĸ߶�
        var llq_obj=document.documentElement;   //������߶�
        var xsh=document.body.scrollTop;    //���Ϲ����ĸ߶�
        var db_h=llq_obj.clientHeight+xsh;  //�ײ��ĸ߶�
        if(lb_top<db_h){
            return true;
        }else{
            return false;
        }
    }



    //����box��λ��
    function paixu(){
        var list=document.getElementsByClassName('list')[0];
        var boxs=list.getElementsByClassName('box');
        var box=boxs[0];
        var box_w=box.clientWidth;//���ӵĿ��

        var cul_num=Math.floor(list.clientWidth/box_w);

        var arr=[];
        for(var i=0;i<boxs.length;i++){
            if(i<cul_num){
                //�����һ�ŵĺ���
                boxs[i].style.position='absolute';
                boxs[i].style.top='0';
                boxs[i].style.left=box_w*i+'px';
                arr[i]=boxs[i].clientHeight;
            }else{
                //��һ��֮��ĺ���
                var min_num=Math.min.apply(null,arr);   //�ҵ��������Сֵ
                var min_a=getIndex(arr,min_num);
                boxs[i].style.position='absolute';
                boxs[i].style.left=box_w*min_a+'px';
                boxs[i].style.top=min_num+'px';
                //�����еĸ߶�
                arr[min_a]+=boxs[i].clientHeight;
            }
        }

    }

    //��ȡԪ�ص�����
    var arr2=[2,3,4,5];
    function getIndex(a,b){
        for(var i=0;i< a.length;i++){
            if(a[i]==b){
                return i;
            }
        }
    }
    console.log(getIndex(arr2,2))
};