$(window).load(function() {
    $("#sliding").twentytwenty();
  
    // Mesure your images and divide by 2.
    var imgWidth = $("#sliding img").width()/2;

    // On the container, apply a left offset of 50% (screen center) - minus half image width.
    $("#sliding").css({"position":"relative","left":"calc(50% - "+ imgWidth+ "px)"});
});