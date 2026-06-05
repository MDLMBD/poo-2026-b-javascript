//declaracion de variables
const estudiantes = [
  { id: 1, nombre: "Ana Lopez",    nota: 90 },
  { id: 2, nombre: "Carlos Ruiz",  nota: 55 },
  { id: 3, nombre: "Maria Torres", nota: 78 },
  { id: 4, nombre: "Luis Mendez",  nota: 45 },
  { id: 5, nombre: "Sofia Rios",   nota: 88 },
  { id: 6, nombre: "Pedro Soto",   nota: 62 },
];

//estudiante solo
const estudiantex = {
    id : 7,
    nombre: "Lucia Gomez",
    nota:    95
}   

//referencias al DOM
const seccionEstudiantes = document.getElementById("lista-estudiantes")

//Funciones
const crearTarjeta = (unEstudiante) => {

    const estado = unEstudiante.nota > 60 ? "Aprobado" : "Reprobado"
    const clase = unEstudiante.nota > 60 ? "aprobado" : "reprobado"

    const tarjeta = `
        <div class = "tarjeta ${clase}">
            <h2>${unEstudiante.nombre}</h2>
            <p>Nota: ${unEstudiante.nota}</p>
            <p>${estado}</p>
        </div>
    `
    return tarjeta

}

const renderizarLista = (ListaARenderizar) => {

    const listaTarjetas = ListaARenderizar.map(
        (unEstudiante) => {
            const tarjeta = crearTarjeta(unEstudiante)
            return tarjeta
        
        }
    )

    seccionEstudiantes.innerHTML = (listaTarjetas.join(""))

}

//Eventos


//Llamadas a funciones
renderizarLista(estudiantes)