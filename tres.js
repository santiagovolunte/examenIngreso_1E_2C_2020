/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones, 
validando los datos ingresados. 
sexo del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el sexo de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar()
{
	let sexo;
	let lugar;
	let temporada;
	let contbariloche = 0;
	let contcataratas = 0;
	let contsalta = 0;
	let pasajeros;
	let maxpax;
	let respuesta;
	let flag = 0;
	let sexotitular;
	let personasinvierno = 0;
	let continvierno = 0;
	let promedioinvierno;
	let lugarmaselegido;

	do {
		do{
		sexo = prompt("Ingrese su sexo: ", "femenino/masculino");
		}while(!(sexo=="femenino" || sexo=="masculino") );
		do {
			lugar = prompt("Ingrese el lugar: ", "Bariloche/Cataratas/Salta")
		} while (!(lugar == "Bariloche" || lugar == "Cataratas" || lugar == "Salta"));
		do {
			temporada = (prompt("Ingrese la temporada en la que desea viajar: ", "otoño/invierno/verano/primavera"));
		} while (!(temporada == "otoño" || temporada == "invierno" || temporada == "verano" || temporada == "primavera"));
		do {
			pasajeros = parseInt(prompt("Ingrese la cantidad de pasajeros que viajan con usted: "));
		} while (isNaN(pasajeros));

		switch (lugar) {
			case "Bariloche":
				contbariloche++;
				break;
			case "Cataratas":
				contcataratas++;
				break;
			case "Salta":
				contsalta++;
				break;
		}
		if (flag == 0 || pasajeros > maxpax) {
			maxpax = pasajeros;
			sexotitular = sexo;
			flag = 1;
		}
		if (temporada == "invierno") {
			continvierno++;
			personasinvierno = personasinvierno + pasajeros;
		}

		respuesta = prompt("Desea ingresar otra estadía: ", "si/no");
	} while (respuesta == "si" || respuesta == "s");
	
	promedioinvierno = personasinvierno / continvierno;
	
	if (contbariloche > contcataratas && contbariloche > contsalta) {
		lugarmaselegido = "Bariloche";
	}
	else if (contsalta > contcataratas && contsalta > contbariloche) {
		lugarmaselegido = "Salta";
	}
	else {
		lugarmaselegido = "Cataratas";
	}

	document.write("El lugar más elegido es: "+ lugarmaselegido + "<br>");
	document.write("El sexo del titular que lleva más pasajeros es: "+ sexotitular + "<br>" );
	document.write("El promedio de personas por viaje, que viajan en invierno es de: "+ promedioinvierno + "<br>" );
}
