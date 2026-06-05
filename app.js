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
const botonTodos = document.getElementById("btn-todos")
const botonAprobados = document.getElementById("btn-aprobados")
const botonReprobados = document.getElementById("btn-reprobados")
const botonPromedio = document.getElementById("btn-promedio")

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
botonTodos.addEventListener('click', () => {
    renderizarLista(estudiantes)
})

botonAprobados.addEventListener('click', () => {
    const aprobados = estudiantes.filter(
        (unEstudianteX) => {
            return unEstudianteX.nota > 60
        }
    )

    renderizarLista(aprobados)
})

botonReprobados.addEventListener('click', () => {
    const reprobados = estudiantes.filter(
        (unEstudianteX) => {
            return unEstudianteX.nota < 61
        }
    )

    renderizarLista(reprobados)
})

/*botonPromedio.addEventListener('click', () => {
    const Adicion = estudiantes.reduce(
    (variablePersistente, unEstudianteX) => {
        return variablePersistente + unEstudianteX.nota
    }
    ,
    0
    )

    const promedio = Adicion/estudiantes.forEach

    
})*/

//Llamadas a funciones
