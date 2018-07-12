function mostrar()
{
    var edad
    edad=document.getElementById("edad").value;
    parseInt(edad);
    if(edad >=18){
        alert("usted es mayor")
    }
    if(edad >=13 && edad <=17 ){
        alert("es adolecente")
    
    }
    if(edad<13){
        alert("usted es menor")

    }
    //tomo la edad  




}//FIN DE LA FUNCIÓN