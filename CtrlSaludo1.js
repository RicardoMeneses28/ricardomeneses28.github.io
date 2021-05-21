"use strict";
var forma = document.getElementById("forma"),
    salida = document.getElementById("salida");
function saluda(){
  var boleta= forma["boleta"].value.trim();
  var nombre= forma["nombre"].value.trim();
  var grupo= forma["grupo"].value.trim();
  var  materia= forma["materia"].value.trim();
  var  fecha= forma["fecha"].value.trim();
      
  salida.textContent =" "+ boleta+" "+
          " "+nombre+" "+grupo+" "+materia+" "+fecha;   
}
