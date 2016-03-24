function crearCampos(cantidad){
        var div = document.getElementById("campos_dinamicos");
        while(div.firstChild)div.removeChild(div.firstChild);
        for(var i = 1, cantidad = Number(cantidad); i <= cantidad; i++){        
            $("#campos_dinamicos").append("<h6><a class='col s12' style='margin-left: 40px; margin-top:5px;'>Cargar Descripcion Piso " + i + ": </a></h6>");
            $("#campos_dinamicos").append("<div id='descripcion' class='input-field col s6' style='width: 350px; margin-left: 50px;'><input id='desc-piso' name='desc-piso' type='text' class='validate'><label for='desc-piso'>Nombre del Piso</label></div>");
            $("#campos_dinamicos").append("<div class='file-field input-field' style='width: 350px; margin-left: 50px;'><div class='btn'><span>Croquis Piso</span><input type='file'></div><div class='file-path-wrapper'><input class='file-path validate' type='text'></div></div>");
            
        }
    }