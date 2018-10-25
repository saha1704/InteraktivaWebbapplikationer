

function findprogram(mobile){
    
    var form, userinput, uls, items;

    if(mobile == true){
        form = document.getElementById("menusearchform")
        userinput = form.menusearchstring.value;
    }
    else{
        form = document.getElementById("searchform")
        userinput = form.searchstring.value;
    }
    
    uls = document.getElementsByClassName("guide");




    for (j = 0; j < uls.length; j++){
        items = uls[j].getElementsByTagName("li");

            /*for-loopen börjar med 1 som index eftersom första listobjektet alltid är en kanalbild*/

        for (i = 1; i < items.length; i++){
            var x = items[i].getElementsByClassName("programtitle");
            pgtitle = x[0].innerHTML;
    
                if(pgtitle.toUpperCase() == userinput.toUpperCase()){
                    var y = items[i].getElementsByClassName("time");
                    pgtime = y[0].innerHTML;
    
                    alert(pgtitle + " går klockan " + pgtime + " idag");
            }
    }
    
        

}

}