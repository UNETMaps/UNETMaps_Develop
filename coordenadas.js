$(function() {
    $("#coordenadas").click(function(e) {
        var offset = $(this).offset();
        var relativeX = (e.pageX - offset.left);
        var relativeY = (e.pageY - offset.top);

        localStorage.setItem("coordenadaX",relativeX);
        var posicionX = localStorage.getItem("coordenadaX");

        localStorage.setItem("coordenadaY",relativeY);
        var posicionY = localStorage.getItem("coordenadaY");
        
        //alert("Coordenada X: " + relativeX + "Coodernada Y: " + relativeY);

        swal({
          title: "¿Esta Seguro?",
          text: "Esta es la posicion del Nuevo Edificio!!",
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#DD6B55",
          confirmButtonText: "Si, es!",
          closeOnConfirm: false
        },
        function(){
          swal("Confirmado!", "La posicion del Edificio ha sido guardada!", "success");
        });
                //limpiando campos
        relativeX.value ="";
        relativeY.value = "";

    });
});