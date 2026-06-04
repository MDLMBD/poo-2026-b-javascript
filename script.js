console.log("Hello World!");

const nombre = "Mateo";

let apellido = "Quintero";

console.log(nombre);
console.log(apellido);

// nombre = "Mad";
apellido = "Martinez";

console.log(nombre);
console.log(apellido);

//objetos de javascript
const persona = {

    nombre: "Mateo",
    apellidos: "Texto",
    edad: 18,
    apodos: [
        
        "hola", 
        "hola2", 
        "hola3", 
        "hola4"

    ]

};
persona.apellidos = "Quintero Martinez"
console.log(persona.apellidos)

console.log("=========================FIN Objetos==============================")

//funciones en javascript
//function saludar(nombre){

//    return "hola " + nombre

//

const saludar = nombre => 
    "hola " + nombre

const saludo = saludar(persona.apellidos)
console.log(saludo)

console.log("=========================FIN Objetos==============================")


console.log("=========================Listas==============================")

const listanumeros = [

    5, 10, 3, 8, 9

]

console.log(listanumeros)

listanumeros[3] = 7

console.log(listanumeros)

const numerosMultiplicados = listanumeros.map(
    (numeroEnElQueVoy) => {
        return numeroEnElQueVoy * 3
    }
)
console.log(numerosMultiplicados)
    
const numerosEnObjetos = listanumeros.map(
    (numeroEnElQueVoy) =>{

        return{
            valor: numeroEnElQueVoy
        }

    }
        
)
console.log(numerosEnObjetos)

//funcion filter

const numerosX = [90, 70, 30, 10, 50]
const numerosFiltrados = numerosX.filter(
    (numX) => {
        return numX > 50
    }

)
console.log(numerosFiltrados)

const personas = [

    {
        nombre: "Mateo",
        edad: 19
    },
    {
        nombre: "Neri",
        edad: 18
    },
    {
        nombre: "Sammy",
        edad: 18
    },
    {
        nombre: "Memo",
        edad: 20
    }

]

const personsMayor = personas.filter(
    mayor => mayor.edad > 17
)

console.log(personsMayor)

//funcion reduce

const numerosRed = [3, 6, 9, 12, 16]
const sumaNumero = numerosRed.reduce(
    (variablePersistente, elemento) => 
        variablePersistente + elemento
    ,
    0
)
console.log(sumaNumero)
