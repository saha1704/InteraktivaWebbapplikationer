$(document).ready(function(){
    $("#menuicon").click(function(){
        $(mobilemenulist).show(150);
    });

    $("#exitmenuicon").click(function(){
        $(mobilemenulist).hide();
    });


});

/*Kanaler visa och gömma tablåer*/

$(document).ready(function(){
    $("#svt1").click(function(){
        $('.day').hide();
        $(svt1guide).show(150);
        
    });

    $("#tv3").click(function(){
        $('.day').hide();
        $(tv3guide).show(150);
    });

    $("#kanal5").click(function(){
        $('.day').hide();
        $(kanal5guide).show(150);
    });

    $("#tv6").click(function(){
        $('.day').hide();
        $(tv6guide).show(150);
    });


});

$(function(){

    var data = ["Rapport","Antikrundan","Jönssonligan","Svenska Hollywoodfruar", "Efterlyst","How I Met Your Mother","Arga snickaren","Breaking News med Filip & Fredrik", "Ex on the beach Sverige","The Simpsons","2 1/2 men","Erik och mackan"];
     $("#searchText").autocomplete({source: data, appendTo: ".search"}) 
     $("#menusearchtext").autocomplete({source: data, appendTo: "#searchmenu"}) 

    });
