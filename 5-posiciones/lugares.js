/*
Salen de la oficina y de camino a los vestuarios conocen dos jugadores más.

Se presenta Nahitan Nández, mediocampista, que comenta que no tiene apodo.
Y a su lado, te estrecha la mano el mediocampista Federico Valverde, conocido como "Pajarito".

Ya es dificil llevar registro de todos los nombres nuevos.

Escriba un programa que:
- guarde en una colección
  - que acepte una fecha de nacimiento en formato string
  - y que devuelva la cantidad de años cumplidos
- imprima en consola un mensaje en el formato: {nombre} "{apodo}" {apellido} (edad).

Tip: consulten los métodos de la clase Date
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date
*/

const fecha = new Date().getFullYear()
const nacimientoDeNandez = Date('1995-12-28').getFullYear()

const jugador = {
  nombre: 'Nahitan',
  apellido: 'Nández',
  apodo: 'Lucho',
  edad: fecha - nacimientoDeNandez,
  posicion: 'mediocampista'
}



const edad = (nacimiento, fecha) => {
  resultado = fecha - nacimiento
  return resultado
}

console.log ('Su edad es de ' + edad(nacimiento, fecha) + ' años.')