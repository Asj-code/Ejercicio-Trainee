let Auto = require("./clases");
let Moto = require("./clases");

//Nuevas instancias de las clases Auto y Moto
peugeotUno = new Auto("Peugeot", 206, 4, 200000);
honda = new Moto("Honda", "Titan", 125, 60000);
peugeotDos = new Auto("Peugeot", 208, 5, 250000);
yamaha = new Moto("Yamaha", "YBR", 160, 80550);

//Lista necesaria para recorrer los objetos
let listaDeVehiculos = [peugeotUno, honda, peugeotDos, yamaha];

//Muestro los valores de las instancias por consola
listaDeVehiculos.forEach(vehiculo => {
  console.log(vehiculo.muestraVehiculo());
});


//Recorro la lista y obtengo el objeto de mayor precio 
let precioMasAlto = 0;
let vehiculoMasCaro = {};
for (let i = 0; i < listaDeVehiculos.length; i++) {
  const element = listaDeVehiculos[i];

  if (element.get_int_precio() > precioMasAlto) {
    precioMasAlto = element.get_int_precio();
    vehiculoMasCaro = element;
  }
}
console.log(`Vehiculo más caro: ${vehiculoMasCaro.marca} ${vehiculoMasCaro.modelo}`);

//Recorro la lista y obtengo el objeto de menor precio 
let precioMasBajo = 100000000000;
let vehiculoMasBarato = {};
for (let i = 0; i < listaDeVehiculos.length; i++) {
  const element = listaDeVehiculos[i];

  if (element.get_int_precio() < precioMasBajo) {
    precioMasBajo = element.get_int_precio();
    vehiculoMasBarato = element;
  }
}
console.log(`Vehiculo más caro: ${vehiculoMasBarato.marca} ${vehiculoMasBarato.modelo}`);


//Recorro la lista de objetos y obtengo el objeto que contenga la letra "Y" en el modelo
let caracterEspecial = "Y";
for (let i = 0; i < listaDeVehiculos.length; i++) {
  const element = listaDeVehiculos[i];

  if (element.marca.includes(caracterEspecial)) {
    console.log(`Vehículo que contiene en el modelo la letra ‘Y’:  ${element.marca} ${element.modelo} ${element.precio}`);
  }
}

//Ordeno los objetos dentro de la lista de mayor a menor precio
let listaOrdenadaVehiculos = listaDeVehiculos.sort((a, b) => {
  const precioA = a.get_int_precio();
  const precioB = b.get_int_precio();

  if (precioB < precioA) {
    return -1;
  }

  if (precioB > precioA) {
    return 1;
  }

  return 0;
});

//Muestro por consola una lista ordenada de objetos de mayor a menor según el precio
console.log("Vehículos ordenados por precio de mayor a menor:");

listaOrdenadaVehiculos.forEach(vehiculo => {
  console.log(vehiculo.marca + " " + vehiculo.modelo);
});