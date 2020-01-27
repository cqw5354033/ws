/**
 * Created by Administrator on 2017/10/20.
 */
window.onload=function(){
    var data=['image/icon.png','image/1-1.jpg','image/1.jpg','image/2.jpg','image/3.jpg',
        'image/4.jpg','image/5.jpg','image/6.jpg','image/7.jpg','image/8.jpg',
        'image/1-2.jpg','image/1-3.jpg','image/1-4.jpg','image/1-5.jpg','image/1-9.jpg',
        'image/2-1.jpg','image/2-2.jpg','image/2-3.jpg','image/2-4.jpg','image/2-5.jpg',
        'image/2-6.jpg','image/2-7.jpg','image/2-8.jpg','image/2-9.jpg','image/3-1.jpg'];

    //动态追加dom元素
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

    //在鼠标滚动的过程中不断判断是否追加数据
    window.onscroll=function(){
        if(panduan()){
            loaddate();     //加载新的数据
            paixu();        //再排序
        }
    };

    //判断是否需要加载新的数据
    function panduan(){
        var boxs=document.getElementsByClassName('box');
        var last_box=boxs[boxs.length-1];
        var lb_top=last_box.offsetTop;      //最后一个盒子到顶部的高度
        var llq_obj=document.documentElement;   //浏览器高度
        var xsh=document.body.scrollTop;    //向上滚动的高度
        var db_h=llq_obj.clientHeight+xsh;  //底部的高度
        if(lb_top<db_h){
            return true;
        }else{
            return false;
        }
    }



    //排列box的位置
    function paixu(){
        var list=document.getElementsByClassName('list')[0];
        var boxs=list.getElementsByClassName('box');
        var box=boxs[0];
        var box_w=box.clientWidth;//盒子的宽度

        var cul_num=Math.floor(list.clientWidth/box_w);

        var arr=[];
        for(var i=0;i<boxs.length;i++){
            if(i<cul_num){
                //处理第一排的盒子
                boxs[i].style.position='absolute';
                boxs[i].style.top='0';
                boxs[i].style.left=box_w*i+'px';
                arr[i]=boxs[i].clientHeight;
            }else{
                //第一排之外的盒子
                var min_num=Math.min.apply(null,arr);   //找到数组的最小值
                var min_a=getIndex(arr,min_num);
                boxs[i].style.position='absolute';
                boxs[i].style.left=box_w*min_a+'px';
                boxs[i].style.top=min_num+'px';
                //更新列的高度
                arr[min_a]+=boxs[i].clientHeight;
            }
        }

    }

    //获取元素的索引
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