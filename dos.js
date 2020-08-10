/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
 validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más barato de los sólidos
*/function mostrar()
{
  let marca;
  let precio;
  let peso;
  let tipo;
  let liquidocaro;
  let solidoliv;
  let respuesta;
  let pesototal=0;
  let flag1=0;
  let marcacara;
  let flag2=0;
  let pesomin;


  do {
    marca = prompt("Ingrese la marca: ");
    precio = parseInt(prompt("Ingrese el precio: "));
    peso = parseInt(prompt("Ingrese el peso del producto en kg:"));
    tipo = prompt("Ingrese el tipo de producto: ");
    while (!(tipo == "solido" || tipo == "liquido")) {
      tipo = prompt("Vuelva a ingresar el tipo de producto, solo es valido solido o liquido: ");
    }

    pesototal+=peso;

if ( (tipo=="liquido") && ( flag1==0 || precio>liquidocaro)){
  liquidocaro=precio
  marcacara=marca;
  flag1=1
}
else if((tipo=="solido")&& flag2==0 || peso<pesomin){
pesomin=peso;
solidoliv=marca;
}
    respuesta = prompt("Desea ingresar otro producto: ");
  } while (respuesta == "Si" || respuesta == "s");

document.write("El peso total de la compra es de " + pesototal+"kg "+ "<br>");
document.write("El liquido más caro es: " + marcacara+ "<br>" );
document.write("El solido más liviano es: " + solidoliv+ "<br>" );
}




