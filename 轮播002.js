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
    if (parseInt(pic.style.left)  < -3120) {
        pic.style.left = "-520px";
    }
    
};
 prve.onclick = function () {
    offset(520);
    if (parseInt(pic.style.left)  > -520) {
        pic.style.left = "-3120px";
    }
     
 }




};