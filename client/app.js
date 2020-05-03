window.onresize = function(){
    $("#main").height(window.innerHeight - $("#navbar").height())
}

$("#main").height(window.innerHeight - $("#navbar").height())








function loaded(){
    document.querySelector("#main").style['animation-name'] = "load"
    document.querySelector("#loadingText").style.display = "none"
}