//declaracion de variables
const estudiantes = [
];

//referencias al DOM
const seccionEstudiantes = document.getElementById("lista-estudiantes")
const botonTodos = document.getElementById("btn-todos")
const botonAprobados = document.getElementById("btn-aprobados")
const botonReprobados = document.getElementById("btn-reprobados")
const botonPromedio = document.getElementById("btn-promedio")
const seccionPromedio = document.getElementById("resultado-promedio")
const nombreEstudiante = document.getElementById("input-nombre")
const notaEstudiante = document.getElementById("input-nota")
const botonAgregar = document.getElementById("btn-agregar")

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

const toFixedTrunc = (num, decimales) => {
    const factor = Math.pow(10, decimales)

    const truncado = Math.trunc(num * factor) / factor

    return truncado.toFixed(decimales)
}

//Eventos
botonTodos.addEventListener('click', () => {
    seccionPromedio.style.display = "none"
    renderizarLista(estudiantes)
})

botonAprobados.addEventListener('click', () => {
    const aprobados = estudiantes.filter(
        (unEstudianteX) => {
            return unEstudianteX.nota > 60
        }
    )
    seccionPromedio.style.display = "none"
    renderizarLista(aprobados)
})

botonReprobados.addEventListener('click', () => {
    const reprobados = estudiantes.filter(
        (unEstudianteX) => {
            return unEstudianteX.nota < 61
        }
    )
    seccionPromedio.style.display = "none"
    renderizarLista(reprobados)
})

botonPromedio.addEventListener('click', () => {
    const Adicion = estudiantes.reduce(
    (variablePersistente, unEstudianteX) => {
        return variablePersistente + unEstudianteX.nota
    }
    ,
    0
    )

    const promedio = Adicion/estudiantes.length

    seccionPromedio.innerHTML = "Promedio general: " + toFixedTrunc(promedio, 2)

    seccionPromedio.style.display = "block"
})

botonAgregar.addEventListener('click', () => {
    const nombre = nombreEstudiante.value.trim()
    const nota = parseInt(notaEstudiante.value.trim())

    if(nombre == "" || isNaN(nota) || nota < 0 || nota >100){
        alert("ERROR: Nombre o nota inválido")
        return
    }

    const nuevoEstudiante = {
        id: estudiantes.length + 1,
        nombre,
        nota
    }

    estudiantes.push(nuevoEstudiante)
    renderizarLista(estudiantes)

    nombreEstudiante.value = ""
    notaEstudiante.value = ""

})

//Llamadas a funciones
