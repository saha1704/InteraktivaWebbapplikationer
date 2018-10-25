 /*
 document.getElementById=("searchButton").onclick= function(){findprogram()};

 function findprogram(){
    
    var x, userinput, ul, li, pg, i, time, returnmessage;
    x = document.getElementById("searchtext");
    userinput = x.value.toUpperCase();
    ul = document.getElementsByClassName("guide");
    li = ul.getElementsByTagName("li");


    for ( i = 0; i < li.length; i++){
        pg = li[i].getElementsByClassName("programtitle")[0];
        if (pg.innerHTML.toUpperCase().indexOf(userinput) > -1) {
            time = li[i].getElementsByClassName("time")
            returnmessage = pg + " " + time;
            alert(returnmessage);
        }
    }
    
}*/