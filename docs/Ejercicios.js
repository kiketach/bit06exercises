"use strict";

// Programa que retorne el área de un cuadrado.
function elCuadrado(numero) {
  const lado = numero;
  //console.log(`El area de un cuadrado cuyos lados independientes son ${numero} centimetros, da como resultado: ${numero * numero} centimetros`);
}

// Programa que retorne el área de un triángulo.
function triangulo(base, altura) {
  let area = (base * altura) / 2;
  return area;
}

// Programa que retorne el resultado de convertir grados Fahrenheit a Celsius.
function grados(Fahrenheit) {
  let Celsius = ((Fahrenheit - 32) * 5) / 9;
  return Celsius;
}

//Programa que retorne el número de vocales que se encuentren en un string.
function countVocales(str) {
  let vocales = "aeiouAEIOU";
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (vocales.indexOf(str[i]) !== -1) {
      count++;
    }
  }
  return count;
}

/* Programa que imprima los números de 1 a 100, si el número es multiplo de 3 en
lugar del número imprimir Fizz, si es multiplo de 5 en lugar del número imprimir
Buzz, si es multiplo de 3 y de 5 imprimir FizzBuzz en lugar del número. */

function unoaCien() {
  let numero = "";

  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      numero += "FizzBuzz, ";
    } else if (i % 3 === 0) {
      numero += "Fizz, ";
    } else if (i % 5 === 0) {
      numero += "Buzz, ";
    } else {
      numero += i + ", ";
    }
  }

  return numero.concat(".");
}

/* Programa que retorne TRUE si dos objetos dados tienen las mismas propiedades
y los mismos valores, de otra forma retornar FALSE. */

const compareobjs = (obj1, obj2) => { 
  let objAK= Object.keys(obj1)
  let objA= Object.values(obj1)
  let objBK= Object.keys(obj2)
  let objB= Object.values(obj2)

  return objAK.includes(objBK) && objA.includes(objB)
  
  }
  console.log(compareobjs({carro:"rojo"},{carro:"rojo"}))

/* console.log(JSON.stringify({apellido: "Moran", nombre: "Jesus"}))
console.log(JSON.stringify([{apellido: "Moran", nombre: "Jesus"},{apellido: "Abril", nombre: "Enrique"}])) */

/* const compare = (obj1, obj2) => JSON.stringify(obj1) === JSON.stringify(obj2) */

/* function compare(obj1, obj2) {
  let Strobj1 = JSON.stringify(obj1);
  let Strobj2 = JSON.stringify(obj2);
  if (Strobj1 === Strobj2) {
    return true;
  } else {
    return false;
  }
} */

/* console.log(compare({apellido: "Moran", nombre: "Jesus"}, {nombre: "Jesus", apellido: "Moran"}));
console.log(compare({ a: "2" }, { a: "2" })); */
/* console.log(compare({ a: "2" }, { a: "2" }));
console.log(compare({ a: "2" }, { b: "2" , c: "3" }));
console.log(compare({nombre: "Jesus", apellido: "Moran"}, {nombre: "Jesus", apellido: "Moran"})); */
/* console.log(compare(JSON.stringify({a:"1"}),JSON.stringify({a:"2"}))) */
              /* JSON: Javascript Object Notacion (Formato de String) */

