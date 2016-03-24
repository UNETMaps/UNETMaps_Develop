  $(document).ready(function() {
    $("#new-caracteristica").click(function() {        
        var intId = $("#divCaracteristica div").length;
        var fieldWrapper = $("<div id=\"field" + intId + "\"<div/>");        
        var ftype = $("<div class=\"input-field col s12\" style=\"margin-left: 10px;\" ><select id=\"caracteristicas\" name=\"caracteristicas\"><option value=\"\" disabled selected>Seleccione una Caracteristica</option><option value=\"1\">Cantidad Laboratorios</option><option value=\"2\">Cantidad Aulas</option><option value=\"3\">Otros..</option></select></div>");        
        var fName = $("<div id=\"valor\" class=\"input-field col s6\" style=\"margin-left: 10px;\" ><input id=\"valor-caracteristica\" name=\"valor-caracteristica\" type=\"text\" class=\"validate\"><label for=\"valor-caracteristica\">Valor</label></div>");        
        fieldWrapper.append(ftype);
        fieldWrapper.append(fName);
        $("#divCaracteristica").append(fieldWrapper);
        $('select').material_select();
    });
});