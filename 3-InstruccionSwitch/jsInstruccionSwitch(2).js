function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

switch(mesDelAño)
{
    case "Enero":
    case "Febrero":
    case "Diciembre":
    case "Septiembre":
    case "Octubre":
    case "Noviembre":
        alert("Ya pasamos el invierno, ahora hace calor");
    break;
    case "Marzo":
    case "Abril":
    case "Mayo":
    case "Febrero":
        alert("Falta para el invierno");
    break;
   case "Junio":
   case "Julio":
   case "Agosto":
    alert(" Abrigaate que haace frio");
   break;
}




}//FIN DE LA FUNCIÓN