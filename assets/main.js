var ElementBar = document.querySelector(".fa-bars");
var ElementBgr = document.querySelector(".bgr");
console.log(ElementBar);
ElementBar.onclick = function(){
    console.log("click");
    var ElementMainLeft = document.querySelector(".main__left");
    ElementMainLeft.style.display = "block";
    ElementBgr.style.display = "block";
}

ElementBgr.onclick = function(){
    console.log("click");
    var ElementMainLeft = document.querySelector(".main__left");
    ElementMainLeft.style.display = "none"
    ElementBgr.style.display = "none";
}