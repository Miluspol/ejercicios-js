//ejercicio 1= sumar (a,b)

//let numUno = Number (prompt ("¿Cúal es el primer número?"));
//let numDos = Number (prompt ("¿Cúal es el seundo número?"));


//function sumar(numUno, numDos){
//    let resultado = numUno + numDos;
//    let msj = `El resultado de la suma es: ${resultado}`;
//    return msj;
//}

//console.log(sumar(numUno, numDos))

// ejercicio 2 = restar (a,b)

//let numUno = Number (prompt ("¿Cúal es el primer número?"));
//let numDos = Number (prompt ("¿Cúal es el seundo número?"));
//
//
//function restar(numUno, numDos){
//    let resultado = numUno - numDos;
//    let msj = `El resultado de la resta es: ${resultado}`;
//    return msj;
//}
//
//console.log(restar(numUno, numDos))


// ejercicio 3 = multiplicar (a,b)

//let numUno = Number (prompt ("¿Cúal es el primer número?"));
//let numDos = Number (prompt ("¿Cúal es el seundo número?"));


//function multiplicar(numUno, numDos){
//    let resultado = numUno * numDos;
//    let msj = `El resultado de la multiplicación  es: ${resultado}`;
//    return msj;
//}

//console.log(multiplicar(numUno, numDos))

// ejercicio 4 = dividir (a,b)

//let numUno = Number (prompt ("¿Cúal es el primer número?"));
//let numDos = Number (prompt ("¿Cúal es el seundo número?"));


//function dividir(numUno, numDos){
//    let resultado = numUno / numDos;
//    let msj = `El resultado de la división es: ${resultado}`;
//    return msj;
//}

//console.log(dividir(numUno, numDos));

// ejercicio 5 = esImpar (número)

//let num = Number (prompt("Dime un número"));

// if(num % 2 ==0 ){
//    console.log ("False")
//}else{
//    console.log //("True")
//}

// ejercicio 6 = calcularAreaDeTriangulo (base, altura)


//let base = Number (prompt ("dime la base del triángulo"));
//let altura = Number (prompt("dime la altura del triángulo"));

//function calcularAreaDeTriangulo(base, altura){
//    let area= (base*altura)/2;
//    let msj = `El área del triangulo es: ${area}`;
//    return msj;
//}

//console.log(calcularAreaDeTriangulo(base,altura))

// ejercicio 7= gritar (str)

//let msj = prompt("escribe el msj");

//function gritar(msj){
//    let grito = `¡${msj}!`;
//    return grito;
//}

//console.log (gritar(msj))


//ejercicio 8 = obtenerNombreCompleto(nombre, apellido)

//let nombre = prompt("¿Cúal es tu nombre?");
//let apellido = prompt("¿Cúal es tu apellido?");

//function obtenerNombreCompleto(nombre, apellido){
//   let msj= `tu nombre completo es: ${nombre} ${apellido}`;
//   return msj;
//}

//console.log(obtenerNombreCompleto(nombre, apellido));


// ejercicio 9 = saludar(nombre)


//let nombre = prompt("¿Cúal es tu nombre");

//function saludar(nombre){
//    let msj = `Hola ${nombre}, ¿cómo estas?`;
//    return msj;
//}

//console.log (saludar(nombre))


// ejercicio 10 = saludarGritando(nombre, apellido)


// let nombre = prompt("¿Cúal es tu nombre?");
// let apellido = prompt("¿Cúal es tu apellido?");

// function saludarGritando(nombre, apellido){
//    let msj= `¡HOLA ${nombre} ${apellido} UN GUSTO CONOCERTE!`;
//    return msj;
// }

// console.log(saludarGritando(nombre, apellido));

// 1- Crear una función obtenerDiasMes que tome como argumento un string mes 
// y devuelva un número dependiendo de la cantidad de días que tenga ese mes


//let mes = (prompt("¿cuál es el mes?"))

// const obtenerDiasMes = function(mes){
//    if(mes === "enero" || mes === "marzo" || mes === "mayo" || mes === "julio" || mes === "agoste" || mes === "octubre" || mes === "diciembre"){
//       console.log(`El mes de ${mes} tiene 31 días`)
//    } else if(mes === "febrero"){
//       console.log(`El mes de ${mes} tiene 28 días`)
//    } else if(mes === "abril" || mes === "junio" || mes === "septiembre" || mes === "noviembtre"){
//       console.log(`El mes de ${mes} tiene 30 días`)
//    } else {
//       console.log(`El dato ingresado es incorrecto`)
//    }
   
// }

// obtenerDiasMes("enero")
// obtenerDiasMes("febrero")
// obtenerDiasMes("octubre")
// obtenerDiasMes("junio")
// obtenerDiasMes("helado")

// 2- Crear una función esPositivoONegativo que acepte como argumento un numero y devuelva 
// el string positivo si el numero es positivo, o el string negativo si el numero es negativo

// const esPositivoONegativo = function(num){
//    if(num > 0){
//       console.log(`El número ${num} es positivo`)
//    } else if(num < 0){
//       console.log(`El número ${num} es negativo`)
//    } else if(num === 0){
//       console.log(`El número es 0`)
//    } else{
//       console.log(`El dato ingresado es incorrecto`)
//    }
// }

// esPositivoONegativo(5) 
// esPositivoONegativo(-9) 
// esPositivoONegativo(13.5) 
// esPositivoONegativo(10) 
// esPositivoONegativo(-6) 
// esPositivoONegativo("helado") 

// 3- Crear una función esParOImpar que acepte como argumento un numero y devuelva el string 
// par si el numero es par, o el string impar si el numero es impar

// const esParOImpar = function(num){
//    if(num % 2 === 0){
//       console.log(`El número ${num} es par`)
//    } else if(num % 2 === 1 ){
//       console.log(`El número ${num} es impar`)
//    } else{
//       console.log("El dato inresado es incorrecto")
//    }
// }

// esParOImpar(10)
// esParOImpar(5)
// esParOImpar(7)
// esParOImpar(36)
// esParOImpar(-12)
// esParOImpar("azul")


// 4- Crear una función puedeGraduarse que tome como argumentos dos números asistencia y materiasAprobadas 
// y un booleano tesisAprobada, y devuelva true si una persona puede gruadarse o false si no. 
// Una persona puede graduarse si tiene un 75% de asistencia o más, 50 materias aprobadas o más y la tesis aprobada.

let asistencia = Number(prompt("¿Cúantas asistencias tienes?"))
let materiasAprobadas = Number(prompt("¿Cúantas materias aprovaste?"))
let tesisAprobada = (prompt("¿Tienes la Tesis Aprovada?. Responder SI o No"))

const puedeGraduarse = function(asistencia,materiasAprobadas,tesisAprobada){
   if(asistencia >= 75 && materiasAprobadas >= 50 && tesisAprobada === "si"){
      console.log(`¡Felicitaciones, te has raduado!`)
   } else if(asistencia < 75 && materiasAprobadas < 50 && tesisAprobada === "no"){
      console.log(`Aún no has aprovado, pero no te desanimes, sigue adelante`)
   } else{
      console.log("Los datos inresados no corresponen")
   }
   return puedeGraduarse
}


puedeGraduarse(asistencia,materiasAprobadas,tesisAprobada )