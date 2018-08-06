function mostrar()
{ 
    sexo=prompt("ingrese su sexo f/m");
    edad=prompt("ingrese su edad");
    nota=prompt("ingrese su nota");
    var edad;
    var sexo;
    var nota=0;
    var promedio;
    var acumMayor;
    var masJoven;
    var mujNota;
    var notaMax=0;
    var notaMin=0;
    
    
        while(sexo=="f"||sexo=="m")
        {
        if(sexo=="m" && edad>=18 && nota >=6)
        {
            acumMayor++
        }else if(sexo=="f") 
        {
            mujNota=nota
            
        }
        
        if(notaMax<nota || notaMin>nota)
        {
            notaMax=nota
            
            notaMin=nota
        }
        }
        

    
    document.write("promedio de notas" + promedio);
    document.write("mayores de 18 con nota mayor a 6" + acumMayor);
}




