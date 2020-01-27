(function(win,doc){
    var docEl=doc.documentElement,
        deviceEvt='orientationchange' in window ? 'orientationchange' : 'resize';
    recalc = function(){
        var clientWidth= docEl.clientWidth > 750 ? 750 : docEl.clientWidth;
        if(!clientWidth) return;
        docEl.style.fontSize = 100 * (clientWidth / 750) + "px"
    }
    if(! win.addEventListener) return;
    win.addEventListener('deviceEvt',recalc,false)
    doc.addEventListener('DOMContentLoaded',recalc,false)
})(window,document);

$(document).ready(function () {
    var wid = $(window).width();
    var hei = 1340 * wid / 750;
    $('.content').css('height',hei+'px');
})
