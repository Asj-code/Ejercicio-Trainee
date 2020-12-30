//Clase padre
class Vehiculo {
  constructor(marca, modelo, precio) {
    this.marca = marca;
    this.modelo = modelo;
    this.precio = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(precio);
  }
  muestraVehiculo() {
    return;
  }
  //Convierte el precio a un número entero
  get_int_precio() {
    let precioSimbol = this.precio;
    let precioSinSimbol = precioSimbol.substring(1);
    let precioEntero = parseInt(precioSinSimbol);
    return precioEntero;
  }
}

//Clase hijo
class Auto extends Vehiculo {
  constructor(marca, modelo, puertas, precio) {
    super(marca, modelo, precio);
    this.puertas = puertas;
  }
  //Sobreescribo el método
  muestraVehiculo() {
    return `Marca:${this.marca} , Modelo:${this.modelo} , Puertas:${this.puertas} ,Precio:${this.precio}`;
  }
}

//Clase hijo
class Moto extends Vehiculo {
  constructor(marca, modelo, cilindrada, precio) {
    super(marca, modelo, precio);
    this.cilindrada = cilindrada;
  }
  //Sobreescribo el método
  muestraVehiculo() {
    return `Marca:${this.marca} , Modelo:${this.modelo} , Cilindrada:${this.cilindrada}cc ,Precio: ${this.precio}`;
  }
}


module.exports = Auto;
module.exports = Moto;