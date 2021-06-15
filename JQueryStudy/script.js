//HIDE TEXT FUNTION
$(document).ready(function(){
    $("button.magicButton").click(function(){
        $("p.text").toggle();
    });
});

//HIDE IMG1 FUNCTION
$(function(){
    $("h1").click(function(){
        $("img.friends").toggle(1000);
    });
});

//FADE EFFET IMG2 FUNCTION
$(function(){
    $("p.img2").click(function(){
        $("img.friends2").fadeToggle(1000);
    });
});

//INCREASE HEIGHT AND WIDTH IMG3 FUNCTION
$(function(){
    $("button.animationButton").click(function(){
        $("img.friends3").animate({
            height: '+=100px',
            width: '+=80px'
        }, 1000);
    });
});

//SLIDE UP AND DOWN FUNCTION (CALLBACK)
$(function(){
    $("button.slideButton").click(function(){
        $("img.friends4").slideUp(2000).slideDown(1500);
    });
});

//FADE BUTTON FUNCTION
$("button")
    .mouseover(function(){
        $(this).fadeTo("slow", 0.5);
    })
    .mouseout(function(){
        $(this).fadeTo("fast", 1);
    });








//COMENTÁRIOS JQUERY

//Use dot "." to select the class in JQ
//Use # to select the id in JQ
//You can use, for example, "p.one" to select the class "one" of the paragraph
//You can use "p:first" to select the first paragraph only
//Mouse Effects: click, mouseenter, mouseleave, dblclick
//Keyboard Events: keypress, keydown, keyup
//Form: submit, change, focus
//Document: load, resize, scroll

