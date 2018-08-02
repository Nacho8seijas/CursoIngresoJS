function mostrar()
 {
    var numero;
    var i;
    var contPrimos=0;
    i=parseInt(i);
    numero=prompt("Ingrese un numero");
    numero=parseInt(numero);
    for(i=2;i<numero;i++)
    if(numero%i==0)
    {
        alert("No Es primo");
        break;
    }else{
        alert(" es primo");
        break;
    }
    



}//FIN DE LA FUNCIÓN