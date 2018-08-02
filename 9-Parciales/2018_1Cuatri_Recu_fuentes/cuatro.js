function mostrar()
{
    var resultado;
    var numero1=prompt("ingrese un numero");
    var numero2=prompt("ingrese otro numero");
    numero1=parseInt(numero1);
    numero2=parseInt(numero2);
    if(numero1==numero2)
    {
        alert(numero1 +"y"+ numero2);
    }else if(numero1>numero2)
    {
        alert(numero1/numero2)
    }else
    {
        resultado=numero1+numero2;
        alert(" la suma es " + resultado  + " es menor a 50");
    }

}
