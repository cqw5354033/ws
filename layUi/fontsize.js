

//缩放比例

if(navigator.userAgent.match(/(iPhone|iPod|Android|ios|iPad)/i)) {
    var version = parseFloat(RegExp.$1);
    if(version > 2.3) {
        var phoneScale = parseInt(window.screen.width) / 750;
        document.write('<meta name="viewport" content="width=750, minimum-scale = ' + phoneScale + ', maximum-scale = ' + phoneScale + ', target-densitydpi=device-dpi">');
    } else {
        document.write('<meta name="viewport" content="width=750, target-densitydpi=device-dpi">');
    }
} else {
    document.write('<meta name="viewport" content="width=750, user-scalable=no, target-densitydpi=device-dpi">');
}

/*window.onresize = function() {
    clearTimeout(t);
    var t = setTimeout(function(){
        location.reload();
    },300)

};*/
