function mostrar()
 {
    var numero;
    var contPrimos=0;
    i=parseInt(i);
    numero=prompt("Ingrese un numero");
    numero=parseInt(numero);
    for(var i=2;i<numero;i++)
    if(numero%i==0)
    {

    }else{
        for(var i=1;i<numero;i++)
        if(numero--%numero--==0 && numero%i==0)
        {
        contPrimos++
        }
        }
    alert(" Primos " + contPrimos);
    



}//FIN DE LA FUNCIÓN