/*
1)De 5  personas que ingresan al hospital se deben tomar y 
validar los siguientes datos.
nombre ,peso, sexo y edad.
a)informar la cantidad de mujeres.
b)la edad promedio en total.
c)el hombre mas pesado.
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar() {


	let nombre;
	let sexo;
	let edad;
	let cantfem = 0
	let cantedad = 0;
	let contadoredad = 0;
	let promedioedad;
	let flag = 0;
	let peso;
	let maxpeso;
	let hombremaspesado;


	for (let i = 0; i < 5; i++) {
		nombre = prompt("Ingrese su nombre: ");

		do {
			peso = parseInt(prompt("Ingrese su peso: "));
		} while (isNaN(peso));

		do {
			sexo = prompt("Ingrese su sexo: ");
		} while (!(sexo == "femenino" || sexo == "masculino" || sexo == "f" || sexo == "m"));

		do {
			edad = parseInt(prompt("Ingrese su edad: "));
		} while (isNaN(edad));

		switch (sexo) {
			case "femenino":
			case "f":
				cantfem++;
				break;
		}
		if (edad > 0) {
			cantedad += edad;
			contadoredad++;
		}
		if ((sexo == "masculino" || sexo == "m") && (flag == 0 || peso > maxpeso)) {
			maxpeso = peso
			hombremaspesado = nombre
			flag = 1
		}
	}

	promedioedad = Math.round(cantedad / contadoredad);

	document.write("La cantidad de mujeres es: " + cantfem + "<br>");
	document.write("La edad promedio total es de " + promedioedad + " años" + "<br>");
	document.write("El hombre más pesado es " + hombremaspesado + "<br>");
}


