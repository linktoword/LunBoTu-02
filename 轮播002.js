window.onload = function(){
var container = document.getElementById("container");
var pic = document.getElementById("pic");
var buttons = document.getElementById("buttons");
var next = document.getElementById("next");
var prve = document.getElementById("prve");


function offset(distances){
    newStyle = parseInt(pic.style.left) + distances;
    pic.style.left = newStyle +"px";
}

next.onclick = function () {
    offset(-520);
};
 prve.onclick = function () {
     offset(520);
 }






};