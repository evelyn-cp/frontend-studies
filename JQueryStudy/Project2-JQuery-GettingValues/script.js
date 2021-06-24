/*$(function(){
    $(".btn1").click(function(){
        $("h1").text("I'm learning JQuery!");
    });
});*/

$(function(){
    $(".btn1").click(function(){
        $("h1").text(function(i, origi){
            return origi + " with Igneus!"
        });
    });
});

$(function(){
    $(".btn2").click(function(){
        $("h1").html("<i>I'm getting good at JQuery!</i>");
    });
});

$(function(){
    $(".btn3").click(function(){
        $("input").val("Paris");
    });
});

$(function(){
    $(".btn4").click(function(){
        $("a").text("Yahoo").attr({
            "href" : "http://yahoo.com",
            "title" : "Going to Yahoo website"
        
        });
        
    });
});


