/**
 * Created by Administrator on 2017/10/13.
 */
//�ֲ�
    var content=document.getElementsByClassName('content')[2];
    var lb_content=document.getElementsByClassName('lunbo_content')[0];
    var img_ele=lb_content.getElementsByTagName('img');
    var img_len=img_ele.length;
    var lb_left=document.getElementById('lb_left');
    var lb_right=document.getElementById('lb_right');

    lb_content.style.height=383*img_len+'px';

    for(var i=0; i<img_len;i++){
        img_ele[i].style.height=383+'px';
    }


    var xiabiao=0;
    function gundong(){
        if(xiabiao>=img_len){
            xiabiao=0;
        }
        lb_content.style.marginTop=-xiabiao*383+'px';
        xiabiao++;
    }

    var timer=null;
    function kaiqi(){
        if(timer===null){
            timer=setInterval(gundong,2000);
        }
    }
    kaiqi();

    lb_right.onclick=function(){
        gundong();
    };
    lb_left.onclick=function(){
        clearInterval(timer);
        timer=null;
        if(xiabiao<=1){
            return;
        }
        xiabiao=xiabiao-2;
        gundong();
    };

    lb_left.onmouseout=function(){
        kaiqi();
    };


//tab�л�
window.onload = function(){
    var ka =document.getElementsByClassName('ka')[0];
    var li = ka.getElementsByTagName('li');
    var div11 =document.getElementsByClassName('div11');
    for(i=0;i<li.length;i++){
        li[i].index = i;
        li[i].onclick = function(){
            for(j=0;j<li.length;j++){
                li[j].className = '';
                //һ�������none��һ˲���������
                div11[j].style.display='none';
                //div11[j].style.height='0px';
            }
            this.className='active';
            //��block��ʱ�����Ͼͻ���֣����Զ�����ִ��
            //js  display����Ԫ�ص���ʾ������   ���еĹ��ɺͶ���Ч�����ᱻ����
            div11[this.index].style.display='block';
            //div11[this.index].style.height='100%';
        }
    }
};

//���Ϲ���
function fengzhuang(box1,box2){
    var box_2 = document.getElementsByClassName(box1)[0];
    var table = document.getElementById(box2);
    var box = table.cloneNode(true);
    box_2.appendChild(box);
    var A = 0;
    function gundong2(){
        //console.log(content.clientHeight);
        if(table.clientHeight==-A){
            A = 0;
        }
        A--;
        box_2.style.top=A+'px';
    }
    setInterval(gundong2,10);
}
fengzhuang('box_2','table');
fengzhuang('box_3','table3');
fengzhuang('box_4','table4');
