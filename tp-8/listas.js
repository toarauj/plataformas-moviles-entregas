var  listaNumerosEjemplo  =  [ 2 , 4 , 6 , - 1 , 5 , - 4 , 0 ] ;

/**
* 01 - invertirLista
*
* Recibe
* - `listaDeNumeros`: una lista (array) de números.
*
*Retorno:
* - una lista de números con los mismos elementos pero en orden inverso al que fueron recibidos.
*
* Ejemplos:
* - invertirLista([2,3,4]) revierte [4,3,2]
*/
function  invertirLista ( listaDeNumeros )  {
    devolver  listaDeNumeros . contrarrestar ( ) ;
}
consola .log ( "invertirLista([2,3,4]): " , invertirLista ( [ 2 , 3 , 4 ] ) ) ; 

/**
* 02 - calcularPromedio
*
* Recibe
* - `listaDeNumeros`: una lista (array) de números.
*
*Retorno:
* - un número, con el valor calculado de promedio para los números en la lista recibida.
*
* Ejemplos:
* - calcularPromedio([2,3,4]) retorna 3
*/
function  calcularPromedio ( listaDeNumeros ) {
    sea  ​​total  =  0 ;
    longitud  =  listaDeNumeros . length ;
    para ( sea  i = 0 ; i < longitud ; i ++ ) {
        total  =  total  +  listaDeNumeros [ i ] ;
    }
    promedio  =  total  /  longitud ;
    devolver  promedio ;
}
consola . log ( "calcularPromedio([2,3,4]): " ,  calcularPromedio ( [ 2 , 3 , 4 ] ) ) ;
console.log ( " calcularPromedio(listaNumerosEjemplo): " , calcularPromedio ( listaNumerosEjemplo ) ) ; 

/**
* 03 - crearListaDeNumeros
*
* Recibe
* - `inicio`: un número, con el valor inicial de la lista
* - `fin`: un número, con el valor final de la lista
*
*Retorno:
* - una lista (array) con valores numéricos en secuencia, desde `inicio` hasta `fin`.
*
* Ejemplos:
* - crearListaDeNumeros(1,5) retorna [1,2,3,4,5]
* - crearListaDeNumeros(3,6) retorna [3,4,5,6]
* - crearListaDeNumeros(2,2) retorna [2]
*/
función  crearListaDeNumeros ( inicio ,  fin )  {
    deja  nuevaLista  =  [ ] ;
    para ( sea  i = inicio ; i <= fin ; i ++ ) {
        nuevaLista . push ( i ) ;
    }
    devolver  nuevaLista ;
}
consola . log ( "crearListaDeNumeros(2,5): " ,  crearListaDeNumeros ( 2 , 5 ) ) ;
consola . log ( "crearListaDeNumeros(-5,5): " ,  crearListaDeNumeros ( -5 , 5 ) ) ;

/**
* 04 - ordenarDeMayorAMenor
*
* Recibe
* - `listaDeNumeros`: una lista (array) de números.
*
*Retorno:
* - una lista de números con los mismos elementos pero en orden decreciente (de mayor a menor).
*
* Ejemplos:
* -ordenDeMayorAMenor([2,-1,4]) retorna [4,2,-1]
*/
función  ordenarDeMayorAMenor ( listaDeNumeros )  {
    función  comparar ( a ,  b )  {
        devuelve  b  -  a ;
    }
    devolver  listaDeNumeros . ordenar ( comparar ) ;
}
consola . log ( "ordenarDeMayorAMenor([2,3,4]): " ,  ordenarDeMayorAMenor ( [ 2 , 3 , 4 ] ) ) ;
consola . log ( "ordenarDeMayorAMenor(listaNumerosEjemplo): " ,  ordenarDeMayorAMenor ( listaNumerosEjemplo ) ) ;

/**
* 05 - encontrarNumeroMayor
*
* Recibe
* - `listaDeNumeros`: una lista (array) de números.
*
*Retorno:
* - un numero, con el valor del numero mas grande contenido en la lista recibida.
*
* Ejemplos:
* - encontrarNumeroMayor([2,3,4]) retorna 4
*/
function  encontrarNumeroMayor ( listaDeNumeros )  {
    ordenarDeMayorAMenor ( listaDeNumeros ) ;
    retorna  ( listaDeNumeros [ 0 ] ) ;
}
consola . log ( "encontrarNumeroMayor([2,3,4]): " ,  encontrarNumeroMayor ( [ 2 , 3 , 4 ] ) ) ;
consola . log ( "encontrarNumeroMayor(listaNumerosEjemplo): " ,  encontrarNumeroMayor ( listaNumerosEjemplo ) ) ;

/**
* 06 - ordenarPalabrasPorLongitud
*
* Recibe
* - `listaDePalabras`: una lista (array) de palabras (string).
*
*Retorno:
* - una lista (array) de palabras (string), con los mismos valores que la lista recibida pero ordenada de manera creciente de acuerdo a su cantidad de caracteres.
*
* Ejemplos:
* - ordenarPalabrasPorLongitud(['abc', 'a', 'ab']) retorna ['a', 'ab', 'abc']
*/
function  ordenarPalabrasPorLongitud ( listaDePalabras )  {
    función  comparar ( a ,  b )  {
        devuelve  a.longitud - b.longitud ;​​ ​​ 
    }
    volver  listaDePalabras . ordenar ( comparar ) ;
}
consola . log ( "ordenarPalabrasPorLongitud(['abc', 'a', 'ab']): " ,  ordenarPalabrasPorLongitud ( [ 'abc' ,  'a' ,  'ab' ] ) ) ;
consola . log ( "ordenarPalabrasPorLongitud(['saludos', 'adios', 'hola','a','electro']): " ,  ordenarPalabrasPorLongitud ( [ 'saludos' ,  'adios' ,  'hola' , 'a' , ' electro' ] ) ) ;

/**
* 07 - encontrarPalabraMasCorta
*
* Recibe
* - `listaDePalabras`: una lista (array) de palabras (string).
*
*Retorno:
* - una palabra (string) que dentro del listado tiene la menor cantidad de caracteres de longitud. En caso de que haya varias palabras con la misma longitud, se puede devolver la primera encontrada.
*
* Ejemplos:
* - encontrarPalabraMasCorta(['abc', 'a', 'ab', 'c']) retorna 'a'
*/
función  encontrarPalabraMasCorta ( listaDePalabras )  {
    ordenarPalabrasPorLongitud ( listaDePalabras ) ;
    devolver  listaDePalabras [ 0 ] ;
}
console.log ( " encontrarPalabraMasCorta(['abc', 'a', 'ab']): " , encontrarPalabraMasCorta ( [ ' abc' , 'a' , 'ab' ] ) ) ;   
consola . log ( "encontrarPalabraMasCorta(['saludos', 'adios', 'hola','a','electro']): " ,  encontrarPalabraMasCorta ( [ 'saludos' ,  'adios' ,  'hola' , 'a' , ' electro' ] ) ) ;

/**
* 08 - filtrarSoloPositivos
*
* Recibe
* - `listaDeNumeros`: una lista (array) de números.
*
*Retorno:
* - una lista (matriz) de números, conteniendo sólo los valores positivos de la lista de números recibidos.
*
* Ejemplos:
* - filtrarSoloPositivos([1,-1,2]) retorna [1,2]
*/
función  filtrarSoloPositivos ( listaDeNumeros )  {
    soloPositivos  =  [ ] ;
    longitud  =  listaDeNumeros . length ;
    para ( sea  i = 0 ; i < longitud ; i ++ ) {
        si ( listaDeNumeros [ i ]  >  0 ) {
            soloPositivos .push ( listaDeNumeros [ i ] ) ;​
        }
    }
    devuelve  soloPositivos ;
}
consola . log ( "filtrarSoloPositivos([1,-1,0]): " ,  filtrarSoloPositivos ( [ 1 , - 1 , 0 ] ) ) ;
console.log ( " filtrarSoloPositivos(listaNumerosEjemplo): " , filtrarSoloPositivos ( listaNumerosEjemplo ) ) ; 

/**
* 09 - contar Aprobados
*
* Recibe
* - `listaDeNotas`: una lista (array) de números con valores entre 1 y 10.
*
*Retorno:
* - un numero, con la cantidad de notas que superan el criterio de aprobación.
*
* Ejemplos:
* - contarAprobados([10,2,9]) retorna 2
*/
función  contarAprobados ( listaDeNotas )  {
    soloAprobados  =  [ ] ;
    longitud  =  listaDeNotas . longitud ;
    para ( sea  i = 0 ; i < longitud ; i ++ ) {
        si ( listaDeNotas [ i ]  >=  7 ) {
            soloAprobados . push ( listaDeNotas [ i ] ) ;
        }
    }
    devuelve  soloAprobados . length ;
}
consola . log ( "contarAprobados([10, 4, 6, 7, 1, 9]): " ,  contarAprobados ( [ 10 ,  4 ,  6 ,  7 ,  1 ,  9 ] ) ) ;

/**
* 10 - filtrarSoloVerdad
*
* Recibe
* - `listaDeValores`: una lista (array) de valores de distintos tipos.
*
*Retorno:
* - una lista (array) que contiene sólo los valores que se consideran 'truthy' por el lenguaje JavaScript
*
* Ejemplos:
* - filtrarSoloTruthy(["Hola", "", 0, 1]) responde ["Hola", 1]
*/
function  filtrarSoloTruthy ( listaDeValores )  {
    soloVerdad  =  [ ] ;
    longitud  =  listaDeValores . longitud ;
    para ( sea  i = 0 ; i < longitud ; i ++ ) {
        if ( listaDeValores [ i ] ) {
            soloVerdad . push ( listaDeValores [ i ] ) ;
        }
    }
    regresa  soloVerdad ;
}
consola . log ( "filtrarSoloTruthy(): " ,  filtrarSoloTruthy ( [ "Hola" ,  "" ,  null ,  1 ,  0 ,  - 1 ,  undefinido ,  [ ] ,  { } ] ) ) ;

/**
* 11 - enumerarLista
* Recibe
* - `listaDePalabras`: una lista (matriz) de palabras (cadenas).
*
*Retorno:
* - Una oración (string), donde se enumeran cada una de las palabras recibidas en la lista.
* - Bonus: una oración correctamente formada debería empezar en mayúscula, terminar con punto, y además el último elemento de enumeración debería estar separado con "y".
*
* Ejemplos:
* - enumerarLista(["Han", "Leia", "Luke", "Yoda"]) "Han, Leia, Luke y Yoda."
*/
función  enumerarLista ( listaDePalabras )  {
    oracion  =  "" ;
    longitud  =  listaDePalabras . length ;
    para ( sea  i = 0 ; i < longitud ; i ++ ) {
        si ( yo  ===  0 ) {
            oración  =  ` ${ listaDePalabras [ i ] } ,` ;
        } más  si ( i  ===  longitud - 1 ) {
            oracion  =  ` ${ oracion } y ${ listaDePalabras [ i ] } ` ;
        } más  si ( i  ===  longitud - 2 ) {
            oración  =  ` ${ oración }  ${ listaDePalabras [ i ] } ` ;
        }
        demás {
            oración  =  ` ${ oración }  ${ listaDePalabras [ i ] } ,` ;
        }
    }
    volver  oracion ;
}
consola . log ( "enumerarLista(): " ,  enumerarLista ( [ "Han" ,  "Leia" ,  "Luke" ,  "Yoda" ] ) ) ;
consola . log ( "enumerarLista(): " ,  enumerarLista ( [ "Marco" ,  "Tobías" ,  "Marcos" ,  "Camila" ] ) ) ;
