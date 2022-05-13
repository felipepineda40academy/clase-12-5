//1. Obtener el form como una variable
let form_tag = document.getElementById("formulario");

//2.Agregar escuchador

form_tag.addEventListener ("submit", function(event){
    event.preventDefault();
    //3.Agarrar el valor de cada input y guardarlo como una variable
    var numero_de_noches = document.getElementById("email_input").value;
    var quiere_comidas = document.getElementById("input_contrasena").value;

    if (quiere_comidas=='si'){
        var costo_comidas = numero_de_noches*10;
        var total = parseInt(numero_de_noches)*20 + costo_comidas;
    }else{
        var total = parseInt(numero_de_noches)*20 
    }

    
    alert("El costo total es: "+total);
})

