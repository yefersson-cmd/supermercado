// // como definir variables
// //  var nombre = "juan";
// //  let apellido;
// //  apellido = "  chaverra  ";
// //  console.log(apellido);
// //  const pi = 3.1416;
// //  const nuemro =12;
// //  let casado = false; /* booleano -> verdadero o falso */
// //  let numeros  = [1,2,3,4,5,6,7]; /* esto es un array */
// //  const producto  = {id:1, nombre: "laptop", precio: 12000000}; /* esto es un objeto */

// //  /* string y sus metodos */

// //  const totalNombre = nombre.length;
// //  console.log (totalNombre)
// //  const incluido = nombre.includes (" w ");
// //  const remplazado = nombre.replace (" an", "chocolatozo");
// //  const repetido = apellido.repeat (10);
// //  const sinEspacios = apellido.trim () /* elimina los espacios */
// //  const sinEspaciosinicio = apellido.trimStart ();
// //  const sinEspaciosfinal = apellido.trimEnd ();
// //  console.log (sinEspacios);

// // numero y operaciones matematicas

// let numero = 4;
// let numero2 = "5";
// let numero3 = 2;
// let numero4 = "4";
// let result = numero / numero3; // +-*/
// console.log(typeof(numero));
// console.log(typeof(numero2));
// console.log(result);
// console.log(numero2);

// // operadores de compracion
// // > >= ; <  <= ; ==  === != !==;

// console.log(numero > numero3); //mayor que
// console.log(numero >= numero4);// mayor o igual que
// console.log(numero < numero3); // menor que
// console.log(numero <= numero3); // menor o igual que
// console.log(numero == numero4); // compara si son iguales
// console.log(numero === numero4); // compara estricto; compara valor y tipo de datos
// console.log(numero != numero4 ); // comprador estricto
// console.log(numero !== numero4  ); // comprador estricto

// // operadores logicos
// // and &&, or ||, nor !=
// // and todas las condiciones deben ser verdaderas
// //or al menos algunas debe ser verdera
// // condiciones

// let edad = 12;
// let saldo = 20;
// let tarjeta = true;

// if (edad != 18) {
//     // concatenacion o unir variable con texto
//     console.log("Eres menor de edad, no puedes ingresar "); // concatenacion normal

// } else {
//     console.log(`Soy mayor de edad, tengo ${edad} años y puedo salir `); //template string    
// }

// // incrementadores y decrementadores

// let numero6 = 1;
// numero6 ++;
// console.log(numero6);
// numero6--;
// console.log(numero6);

// // la libreria MATH

// numero =  Math.floor(12.77); // redondea hacia abajo
// console.log(numero);
// numero = Math.ceil (12.77); // redondea hacia arriba
// console.log(numero);
// numero = Math.sqrt(25); // raiz cuadrada
// console.log(numero);
// numero = Math.pow (3,3); // potencia
// console.log(numero);
// let numeroAle = Math.round ( Math.random () *20)   ; // aleatorio
// console.log(numeroAle);

// // orden de las operaciones matematicas

// let messi =  5+ (5+(3*6)/2) - 4 / 2; //pemdas
// console.log(messi);


// // bulcles
// // bucle for


// // for (let i = 0; i < array.length; i++) { //length recorre la longitud del array
// //     console.log(i);

// // }

// // 7*6*5*4*3*2*1 = 5040


// // let factorial = 1;
// // for ( let i =1; i <= 7; i++) {
//     //     factorial *= i; // variable acumuladora
//     //     console.log(factorial);
//     // }


// // let facto =parseInt(prompt ("ingresa un numero "));
// // for (i = facto; i<=facto; i--) {
// //     facto *=i;
// //     console.log(facto);
// //     if (facto ==0) {
// //         break
// //     }

// // }

// // bucle while

// let i = 0;
// while (i <= 10) {
//     console.log(` imprimiendo la variable ${i}`);
//     i++;
// }

// let soltero = true;

// while (soltero) {
//     console.log("vive sabroso ");
//     soltero = true;

// }


// //metodos de array
// // metodos que agregan

// array.push (10); //agrega al final del array
// console.log(array);
// array.unshift (0) // agrega un elemento al inicio del array

// //metodos que eliminan

// // array.pop (); //elimina al final del array
// // array.shift (); //elimina del inicio del array
// // console.log(array);

// // for (let i = 0; i < 10; i++) {
// //     let num = 0;
// //     num = Math.round (Math.random()*20);
// //     array.push(num)
// // }

// // console.log(array);

// //objetos

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9,]
//  const productos = [
//     { nombre: "pc", precio: 12000, marca: "HP" },
//     { nombre: "desktop", precio: 1000, marca: "HP" },
//     { nombre: "Smartphone", precio: 20000, marca: "xiaomi" },
//     { nombre: "smartTv", precio: 50000, marca: "Lg" },
// ]
// // array de objetos

// const produc = { nombre: "celular", precio: 154000, marca: "Nokia"}

// produc.precio = 500000;
// produc.id = 1;
// // console.log(produc);

// Object.seal ();// sella tambien el objeto pero tambien permite modificar las propiedades
// produc.marca = "tamagochi"
// Object.freeze (produc);// el freese congela el objeto y no permite modificarlo
// produc.color = "negro";

// // console.log(produc);

// // funciones
// // hay 2 formas de declrar funciones en js
// // funciones declaradas y funciones expresion



// saludo (); //variable no definida
// //funcion declarada
// function saludo () {
//     console.log("chaverrita 12");
// }

// const saludo2 = function  () { //esta es una funcion expresion
//     console.log("desde una funcion expresion ");
   
// }
// saludo2 ()
// //funciones expresion flacha =>

// const saludo3 = () => {
//     console.log(`desde una funcion flecha`);

// }

// //funcion autoejecutable o IFI

// (()=> {
//     console.log(`desde una funcion flecha autoejecutable`);
// })();

//array de odjetos

// const carrito =[
//     {nombre: "laptop",precio:7000,marca:"lenovo"},
//     {nombre: "tablet",precio:7000,marca:"hp"},
//     {nombre: "celular",precio:15000,marca:"samsung"},
//     {nombre: "impresora",precio:5000,marca:"redmi"},
//     {nombre: "telefono",precio:5000,marca:"lg"},
//     {nombre: "computadora",precio:3000,marca:"lenovo"},
// ]

// for (let i = 0; i < 10; i++) {
//     console.log("imprimiendo la varibale"+ i );


// }
// carrito.forEach((producto)=>{
//     //un json es un formato de transferencia de datos

// }
// )// el map tambien devuelve un dato qu puede ser un booleano, permite hacer operracines  

// const result = carrito.map ((producto)=>{
//     return producto.precio - (producto.precio * 0.10)//es el significado de un dato 
// }   //lo que usted ponga debajo del return no se va a ejecutar   
// )   //tampoco fuera de las funciones
//     // aqui return esta explicito
// console.log(result);


// // el reduce es como una suma sirve para hacer operaciones matematicas tambien devuelve una array 

// const total= carrito.reduce((total,producto)=>total+=producto.precio,0
    
// );

// console.log(total);

// // el find es encontrar un elemento 

// const  encontrado = carrito.find(producto=>producto.nombre =="computadora");
// console.log(encontrado);

// // el some busca algo o algo parecido 


// const  alguno = carrito.some(producto=>producto.marca =="hp");
// console.log(alguno);

// /// every evalua si todos los elementos cumplen una condicion 

// const personas =[
//     {nombre: "yefersson", edad: 36},
//     {nombre: "messi", edad: 18},
//     {nombre:"ronaldinho", edad: 25},
//     {nombre:"Neymar", edad: 66},
// ]
// const mayores =personas.every((persona)=> persona.edad == 18);
// console.log(mayores
// );


// // el findidex encuentra el indice de un elemento
// const index = personas.findIndex((personas)=>personas.nombre =="ronaldinho");
// console.log(index);

//los collbacks
// es una funcion que resive como parametro una funcion


// const estudiantes =["mateo ", "dilan","evelyn "];

// const nombre = prompt("ingresa tu nombre")
// const agregarAlumno = (nombre,callbcks)=>{
//     estudiantes.push(nombre)
//     callbcks(nombre);
// }

// const saludo = (nombre)=>{
//     console.log("bienvenido a las clases de javascript" + nombre );
// }

// agregarAlumno(nombre,saludo);


//temporizadores en javascript , tambien son funciones asincronas 
//setTimeout ejecuta un codigo cuando se acaba un tiempo 

// setTimeout(()=>{
// console.log("me ejecuto cada determinado tiempo");

// },2000)//dos mil milsegundos

// setInterval(()=>{
//     console.log("me ejecuto cada cierto tiempo ");
// },3000)

// ///clearInterval,clearsetTimeout

// clearInterval(intervalo);


//promesas 
//las promesas son funciones asincronas 
//codigos de estado 100 informativos
// 200satifctorios
//300 redirecciones
//400 errores del cliente eje404
// 500 errores del servidor
 

//estado de una promesa
//pendiente,aceptada,rechazada 






//  const paises =["colombia","españa","usa","mexico"]
 
//  const promesa =(()=>{
//     return new Promise((resolve,reject)=>{
//         const encontrado = paises.find(pais=>pais=="colombia");
//         setTimeout( ()=>{
//             if(encontrado){
//             resolve("se encontro el pais"+ encontrado)
//         }else{
//             reject("no se encontro el pais ")
//           }
//         },5000)

//     })
// })
//  promesa().then(result=>console.log(result))
//           .catch(error=>console.error(error));

//el fetch
// es tambien una promesa
// es una api nativa de javascript para consumir apis

const url= "https://jsonplaceholder.typicode.com/posts";

const getData =()=>{
    fetch(url)
    .then(result=>console.log(result))
    .then(response=>response.json())
    .catch(error=>console.error())
}

// getData();

// funciones asincronas que hemos vistos
//promesas el fetch
// los temporizadores como el setIterval
// ahora vamos a ver la asinc-await
// asinc significa asincrono y lleva siempre la await
// funcion de exprexion se puede declarar de cualquier parte 

// getDatos();
// async function getDatos(){
//     const responce = await fetch(url);
//     const result = await responce.json();
//     console.log(result);
// }


// //metodo http get de fetch que viene por defecto
// (async () => {
//     //intenta hacer algo 
//     try {
//         const responce = await fetch(url);
//         const result = await responce.json();
//         console.log(result);
//     } catch (error) {
//         throw new error("no se pudo hacer la peticion" + error)
//         //captura el error
        
//     }
// })();
(async () => {
    //intenta hacer algo 
    try {
        const responce = await fetch(`https://jsonplaceholder.typicode.com/posts`,{
            method: 'post',
            Headers:{
                'Conten-Type' :'application/json'
                
            },
            body :JSON.stringify({
                userdId : 1 
            })

        });
        console.log(`este es el codigo de estado de la promesa ${responce.status}`);
        const result = await responce.json();
        console.log(result);
    } catch (error) {
        throw new error("no se pudo hacer la peticion" + error)
        //captura el error
        
    }
})();




