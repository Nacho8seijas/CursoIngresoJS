function mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	
	var respuesta= true;
	var numero;
	var acumNegativos = 0;
	var acumPositivos = 0;
	var contNegativos = 0;
	var contPositivos = 0;
	var contCeros = 0;
	var contPares = 0;
	var promPositivos;
	var promNegativos;
	var diferencia;
	var max;
	var flag=false;//flag = false =flag = 0

	while(respuesta==true)
	{
		numero=prompt("Ingrese un numero");
		numero=parseInt(numero);
		if(numero > 0)
		{
			acumPositivos = acumPositivos + numero;
			contPositivos = contPositivos + 1;
		}
		else
		{
			if(numero < 0)
			{
				acumNegativos = acumNegativos+ numero;
				contNegativos = contNegativos + 1;
		}
		else{
			contCeros = contCeros + 1;
		}


		respuesta= confirm("desea continuar ? ");
		}
		if((numero%2)==0 && numero != 0)
		{
		contPares++;
		}
		if(flag == false)
		{
			
		}
	}

	{
		respuesta= confirm("desea continuar ? ");
		}
		diferencia =acumPositivos + acumNegativos;
		
	document.write("1. suma negativos:" + acumNegativos + "<Br>");
	document.write("2. suma positivos" + acumPositivos + "<Br>");
	document.write("3. Cantidad negativos:" + contNegativos + "<Br>");
	document.write("4. Cantidad positivos" + contPositivos + "<Br>");
	document.write("5. Cantida de ceros" + contCeros + "<br>");
	document.write("6. Cantidad Pares" + contPares + "<br>");
	if( contPositivos !=0)
		{
		promPositivos = acumPositivos/contPositivos;
		document.write("7. promedio de positivos " + promPositivos +"<br>");

		}
		if( contNegativos !=0)
		{
		promNegativos = acumNegativos/contNegativos;
		document.write("8. promedio de Negativos " + promNegativos +"<br>");
		}



}//FIN DE LA FUNCIÓN