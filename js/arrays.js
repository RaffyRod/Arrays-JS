'use strict'

//arrays basico
var nombres = ["victor", "jaison", "mario"];

var lenguajes = new Array("php", "js", "java", "Go", "Python");

//console.log(lenguajes.lenguajes); 

//arrays avanzados

//.lenght me dice la medida del array o cantidad de valores

/*var elemento = parseInt(prompt("Que elemento del array quiere?", 0)); //parseInt = conversion a entero

if(elemento >= nombres.length){
    alert("introduce un numero correto menor que : "+ nombres.length );
}else{
    alert(nombres[elemento]);
}
*/

/*
//recorrer un array con un FOR
document.write("<h1>Lenguajes de Programacion del 2018</h1>");
document.write("<ul>");

for(var i = 0; i < lenguajes.length; i++){
    document.write("<li>"+lenguajes[i]+"<li>");
}
document.write("</ul>");

*/


//For Each para recorrer elementos de Array

document.write("<h1>Lenguajes de Programacion del 2018</h1>");
document.write("<ul>");

lenguajes.forEach((elemento, indice)=>{
    document.write("<li>"+indice+" - "+elemento+"<li>");

});
document.write("</ul>");




