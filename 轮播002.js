window.onload = function(){
    var container = document.getElementById("container");
    var pic = document.getElementById("pic");
    var buttons = document.getElementById("buttons").getElementsByTagName("span");
    var next = document.getElementById("next");
    var prve = document.getElementById("prve");
    var index = 1;


    function offset(distances){
        var newStyle = parseInt(pic.style.left) + distances;
        var allTime = 520;
        var frequente = 10;
        var oneLenght = distances / (allTime / frequente);
        function slowOffSet () {
            if (( distances > 0 && parseInt(pic.style.left) < newStyle ) || ( distances < 0 && parseInt(pic.style.left) > newStyle )){
                pic.style.left = parseInt(pic.style.left) + oneLenght +"px";
                setTimeout( slowOffSet, frequente);
            }
            else{
                if (parseInt(pic.style.left)  < -3120) {
                    pic.style.left = "-520px";
                }
                else if (parseInt(pic.style.left)  > -520) {
                        pic.style.left = "-3120px";
                    
                }

            }
        }
        slowOffSet();
    }


    function showButtons() {
        for( var i = 0; i < buttons.length; i++) {
            if (buttons[i].className == "selected") {
                buttons[i].className = "";
                break;
            }
        }
        buttons[index-1].className = "selected";

    }


    next.onclick = function () { 
        offset(-520);
        if (index == 6) {
            index = 1;
        }
        else{
            index++;
        }
        
        showButtons();  
        
        
    };

    prve.onclick = function () {
        offset(520);
        if (index == 1) {
            index = 6;
        }
        else{
            index--;
        }
        showButtons();
        
        
    }

    for (var j = 0; j < buttons.length; j++ ){
        buttons[j].onclick = function() {
            var newIndex = parseInt(this.getAttribute("index"));
            if (newIndex == index) {
                return;
            }
            else{
                var clickOffSet = -520 * (newIndex - index);
                offset(clickOffSet);
                index = newIndex;
                showButtons(); 
            }
           

        }
    }




};