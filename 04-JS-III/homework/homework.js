// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
    return array[array.length - 1];
 
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
 return array.interger +1

}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  elemento.push = ("pedro");{
  console.log (array)}
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  elemento.unshift = ("pedro");{
  console.log (array)}
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  palabras = ['Hello', 'world!'];
  return (palabras [0]+ " "+ palabras[1]+"!")
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  array.prototype.includes(elemento)



function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var lista = []
  for (var i= 0; i < lista.length; i++);
  lista[i] = lista[i] + numeros.interger[i]
  return lista
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var lista = []
  for (var i= 0; i < lista.length; i++);
  lista[i] = lista[i] + resultadosTest.interger[i]
  return lista / i
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
 let a=match.Max(numeros.interger)
 console.log(a);

}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
var result =0
  for(var i =0; i<arguments.length; i++){
 result = arguments[i]* a
  if ( arguments.length[i]===0);
  console.log(0);
  console.log(arguments[i]);
}
return result

function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
 let mayor=0;
 mayor= arreglo.forEach(arreglo => {arreglo > 18 
 });
 console.log(mayor);
   
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  for (var i = 0; i < nuemerodedia.length; i++);
  if (i=== 1 || i=== 7);
  console.log("es fin de semana");
  console.log ("es dia laboral");
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var array=[]
  for(var n= 0; n < array.length; n++)
   if (array[n][0] === 9); {
   }  
   console.log(true);
   console.log(false);
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
    var a = arreglo[0]
  for(var i = 0 ; i < arreglo.length; i++);
    if (arreglo[i] === a);
    a= arreglo[i]
      console.log(true);
      console.log(false);
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var array2=[]
  for(var i= 0; i < array.length; i++);
    if (array[i]=== "Enero" || array[i]=== "Marzo"|| array[i]=== "Noviembre" );
    array2 [i] = array[i];
      for(var a= 0; a < 4 ; a++);
        if (array2[a] === "Enero" );
          else if (array2[a] === "marzo");
            else (array2[a] === "noviembre")
            return  a }{
            return "No se encontraron los meses pedidos";
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var nuevoarray= []
  for(var i= 0; array.length; i++);
   if (array [i] > 100 );
    nuevoarray [i] = array [i];
    console.log(nuevoarray);
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var array= []
  for(var i=0; i< 10; i++){ 
    array[i]= numero[i] + 2 ;
    console.log(array);
      if (array [i]=== i);{
        break;
        console.log ("se interrumpió la ejecucion");
}
function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var array= []
  for(var i=0; i< 10; i++){ 
    array[i]= numero[i] + 2 ;
    if (i < 5);{
    console.log(array);
    continue;
    }
  }
    console.log(array);
  
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
}
