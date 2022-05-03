//SaludoInicial//
let nombre = prompt("ingrese nombre");
let apellido = prompt("ingrese apellido");

function saludar(nombre, apellido) {
  alert(`Bienvenido/a ${nombre} ${apellido}`);
}

saludar(nombre, apellido);

let opcion;
alert("Seleccione Servicio:");

do {
  opcion = prompt(
    "1-Formateos \n 2-Instalacion Software \n 3-Mantenimiento \n 4-Ensambles"
  );
} while (opcion != "1" && opcion != "2" && opcion != "3" && opcion != "4");

if(opcion == "1" || "2" || "3" || "4"){
  alert("Ingresaste Correctamente!");
}

switch (opcion) {
  case "1":
    alert("El precio del Formateo es $2500");
    break;
  case "2":
    alert("El precio de la Instalacion Software es $1500");
    break;
  case "3":
    alert("El precio del Mantenimiento es $500");
    break;
  case "4":
    alert("El precio del Ensamble es $3500");
    break;
  default:
    console.log("error");
    break;
}

//usando arrays con objetos//

let productos = [
  {
    "nombre": "RTX 3080",
    "garantia": 2,
    "condicion": "nuevo",
    "stock": 20,
  },
  {
    "nombre": "GTX 1660 TI",
    "garantia": 2,
    "condicion": "nuevo",
    "stock": 20,
  },
  {
    "nombre": "I5 PENTIUM",
    "garantia": 7,
    "condicion": "reacondicionado",
    "stock": 1,
  },
  {
    "nombre": "I7 5000KL",
    "garantia": 7,
    "condicion": "nuevo",
    "stock": 5,
  },
];