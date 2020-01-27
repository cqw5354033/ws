$(document).ready(function () {
    var tabPic = $('.tabPic');
    var pic = $('.pic');
    var pic_li = $('.pic li');
    var pic_li_video = $('.pic li video');
    var index = 0;
    var screenH = $(document).height();
    var juli = 0;


    // 滑动效果：
    function slide() {
        //滑动开始
        //     多个事件按顺序实现
        pic[0].addEventListener('touchstart', function (evt) {
            evt = evt ? evt : window.event;

            // console.log(juli);
            startY = evt.touches[0].pageY;
        });
        //滑动过程中
        pic[0].addEventListener('touchmove', function (evt) {
            evt = evt ? evt : window.event;

            juli = evt.touches[0].pageY - startY;

            pic.css('top', '-' + (index * screenH - juli) + 'px');
        });
        //滑动结束
        pic[0].addEventListener('touchend', function (evt) {
            console.log(juli)
            if (juli > 0 && index > 0) {
                //用户向下滑动
                index--;
                pic_li_video.load();
            }
            else if (juli < 0 && index < $('.pic li').length - 1) {
                //用户向上滑动
                index++;
                pic_li_video.load();

            }
            // else if(juli==juli){
            //    return false;
            // }

            pic.animate({'top': '-' + index * screenH + 'px'});
        });


        window.addEventListener('touchend', e => {
                if (e.target && e.target.nodeName.toUpperCase() === 'A') {
                    e.stopPropagation();
                }
            },
            true,
        );
    }

    slide();



    // 点赞效果：
    function good() {
        // 封装一个通过标签名获取元素的函数
        function tagName$(name) {
            return document.getElementsByTagName(name);
        }

        //通过闭包的方式获取数据，并缓存
        // 通过闭包，外层函数与内层函数之间的语句只会执行一次
        function getvalue() {
            var value = 1;
            return function () {
                this.value = (value++) + "人觉得很赞";
            }
        }

        // 循环遍历获取按钮
        var button = tagName$("input");
        for (var i = 0; i < button.length; i++) {
            button[i].onclick = getvalue();
        }
    }

    good();
});