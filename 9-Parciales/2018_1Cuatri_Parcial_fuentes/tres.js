function mostrar()
{
    var precio;
    var descuento;
    var precioFinal
    precio=prompt("ingrese el precio");
    descuento=prompt("ingrese el descuento");
    precioFinal=precio*(descuento/100)
    document.getElementById("elPrecioFinal").value=precioFinal;

}
