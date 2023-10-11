
 class Persona {
    constructor(nombre, apellido, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad ;
       this.nombreCompleto = () =>"Bienvenido"+ " " + nombreIngresado.toUpperCase() + " " + apellidoIngresado.toUpperCase() ;
      
    }
  
}


let nombreIngresado = prompt("Ingrese Nombre");

let apellidoIngresado = prompt("Ingrese Apellido");

alert("Hola " + nombreIngresado.toUpperCase() +" "+ apellidoIngresado.toUpperCase());


let edadIngresado = prompt ("Ingrese Edad");


while (edadIngresado < 18){
alert("No Puedes Comprar Las Entradas");
  
 nombreIngresado = prompt("Ingrese Nombre");

 apellidoIngresado = prompt("Ingrese Apellido");

 alert("Hola " + nombreIngresado.toUpperCase() +" "+ apellidoIngresado.toUpperCase());
 
 edadIngresado = prompt ("Ingrese Edad");
 
  

}
let info = prompt("Eliga el Sector a , b , c , vip");




let persona = new Persona (nombreIngresado, apellidoIngresado, edadIngresado);


console.log(persona.nombreCompleto());


 const sectores = ["z",5000, 10000, 15000];

 sectores.push(30000);



 switch (info) {
    case "a" :  
    console.log (("Las Entradas cuestan:" + sectores [1]));
    break

    case "b" :
    console.log (("Las Entradas cuestan:" + sectores [2] ));
    break

    case "c"  :
        console.log (("Las Entradas cuestan:" + sectores [3]));
    break

    case "vip":
        console.log(("El Vip cuesta : " + sectores [4]));

    break;

    default :

    alert("Sector agotado");


    break;

 } 
 

 




  