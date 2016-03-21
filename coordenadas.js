$(function() {
    $("#coordenadas").click(function(e) {
        var offset = $(this).offset();
        var relativeX = (e.pageX - offset.left);
        var relativeY = (e.pageY - offset.top);

        localStorage.setItem("coordenadaX",relativeX);
        var posicionX = localStorage.getItem("coordenadaX");

        localStorage.setItem("coordenadaY",relativeY);
        var posicionY = localStorage.getItem("coordenadaY");
        
        alert("Coordenada X: " + relativeX + "Coodernada Y: " + relativeY);

        //limpiando campos
        relativeX.value ="";
        relativeY.value = "";

    });
});