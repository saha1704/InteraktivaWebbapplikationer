
 function findprogram(){
    
    var form, userinput, uls, lis = new Array, programs = new Array, pg, i, time, returnmessage,;
    form = document.getElementById("searchform")
    userinput = form.searchstring.value.toUpperCase();
/*     userinput = document.getElementById("searchtext").value.toUpperCase();
    
    uls = document.getElementsByClassName("guide");*/

    var ul = document.getElementById("rapport");
    var items = ul.getElementsByTagName("li");

    for (i = 0; i < items.length; i++){
        items[i].value

    }








        /*

    for (i = 0; i < uls.length; i++){
        var x = uls[i].getElementsByTagName("li");
        lis.push(x);
    }
     for ( i = 0; i < lis.length; i++){
        pg = lis[i].getElementsByClassName("programtitle")[0];
        if (pg.innerHTML.toUpperCase().indexOf(userinput) > -1) {
            time = lis[i].getElementsByClassName("time")
            returnmessage = pg + " " + time;
            alert(returnmessage);
        }
    } */
    
}