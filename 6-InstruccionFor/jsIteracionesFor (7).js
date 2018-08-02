function mostrar()
{
    var numero;
    var i;
    var contDivisores=0;
    numero=prompt(" Ingrese un numero " );
    numero=parseInt(numero);
    for(i=0;i<numero;i++)
    if(numero%i==0)
    {
        contDivisores++
    }
     alert("divisores " + contDivisores);
// console.log(i);debajo del cont pero no fuera del signo 
        
    




}//FIN DE LA FUNCIÓN