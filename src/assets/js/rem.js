(function(doc, win){
    var docEle = doc.documentElement,
    resizeEvent = 'orientationchange' in window ? 'orientationchange' : 'resize';        
    var recalCulate = function(){
        var width = docEle.clientWidth;
        if(width > 750 ){
            width = 750;
        }
        var rem = Math.round(100 * (width / 750))
        docEle.style.fontSize = rem + 'px'; 
    };
    recalCulate();
    if(!doc.addEventListener){
        return false
    };
    win.addEventListener(resizeEvent, recalCulate, false);
})(document, window)
