//diferencia entre var y let 
var a =7;
var b =12;

if(a == 7){
    let a = 4; //el alcance es dentro del bloque if 
    var b = 1; // el alcance es dentro de la funcion
    console.log("dentro del if: " + a +"-"+b);
}
console.log("fuera del if: " + a +"-"+b);


function varTest(){
    var x = 31;
    if (true){
        var x = 71;//nuevo valor
        console.log(x);
    }
    console.log(x);//71
}


function letTest(){
    let x = 31;
    if (true){
        let x = 71;//asinga nuevo valor 
        console.log(x);//71
    }
    console.log(x);//31, el let mantiene el valor inicial
}

varTest();
letTest();


//objeto:definir una variable con sus caracteristicas
const persona = {
    Nombre: "Jenni",
    Apellido: "Yañez",
    Edad: 21,
    Carrera: "IPM"
};

document.getElementById("persona").innerHTML = persona.Nombre + persona.Apellido + "tiene" + persona.Edad +" años"+ ", estudia "+ persona.Carrera;
const persona2 = document.getElementById("persona");
persona2.innerHTML = persona.Nombre + " tiene" + persona.Edad +" años"+ ", estudia "+ persona.Carrera;;

const autos = {
    Marca: "Nissan",
    Modelo: "Ford",
    Fecha: 2017,
    Color: "rojo"
};

document.getElementById("autos").innerHTML =  "modelo: "+ autos["Modelo"] + " es del año: " + autos["Fecha"];


const carros= ["BMW", "volvo", "sabaru", "ford"];
let text ="";
for (let i = 0; i < carros.length; i++)
{  
   
    text += carros [i] + "<br>";
    
}

document.getElementById('carros').innerHTML = text; 

let numero = "";
let i = 0;

while (i <= 10)
{
    numero += "<br >el numero es" + i++;
    //i++;
}
document.getElementById('numero').innerHTML = numero;


let dia;
switch (new Date().getDay()) {
    case 0:
        dia = "Domingo";        
        break;
    case 1:
        dia = "Lunes";
        break;
    case 2:
        dia = "Martes";        
        break;
    case 3:
        dia = "Miercoles";
        break;
    case 4:
        dia = "Jueves";        
        break;
    case 5:
         dia = "Viernes";
        break;
    case 6:
         dia = "Sabado";        
         break;

   
}

document.getElementById('fecha').innerHTML = "el dia de hoy es: " + dia; 