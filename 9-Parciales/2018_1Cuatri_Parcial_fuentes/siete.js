function mostrar()
{
    var edad;
    var Sexo;
    var contMenores=0;
    var contMayores=0;
    var contHombres=0;
    var contMujeres=0;
    var nombreMayor
    var sexoMasViejo
    var promedioEdad
    var promedioMujeres
    var promedioHombres

    sexo=prompt("ingrese su sexo M/F");
    edad=prompt("ingrese su edad" );
    edad=parseInt(edad);


    while(Sexo != "M" || Sexo !="F" );
    {
        sexo=prompt("ingrese un sexo valido");
    }
    
            if(sexo == "M")
            contHombres++
        else{
            contMujeres++
        }
        
           
        
    
        
     
        while(edad < 0 || edad > 100 || isNaN(edad));
    {
        edad=prompt("ingrese una edad valida");
        edad=parseInt(edad);
    }
        
        if(edad>17)
        {
            contMayores++
        }
    document.write("Edad" + edad);
    document.write("Mayores"+ contMayores);
    document.write("")
    document.write("sexo");
//for(var cont;<10;++) 
    
    
    
        
        

    
    
        
       
    


    
 
}

