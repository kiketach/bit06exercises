'use strict';

// Programa que retorne el área de un cuadrado.
function elCuadrado(numero) {
    const lado = numero
    //console.log(`El area de un cuadrado cuyos lados independientes son ${numero} centimetros, da como resultado: ${numero * numero} centimetros`);
  }
 

// Programa que retorne el área de un triángulo.
function triangulo(base,altura) {
   let area = (base * altura) / 2;
    return area
    };

    
// Programa que retorne el resultado de convertir grados Fahrenheit a Celsius.
function grados(Fahrenheit) {
    let Celsius = (Fahrenheit - 32) * 5/9;
     return Celsius
     };


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
  
  
/*   / Programa que retorne en un solo arreglo los elementos de 2 arreglos dados. */
// Programa que retorne un arreglo de números desde 1 hasta un número dado.