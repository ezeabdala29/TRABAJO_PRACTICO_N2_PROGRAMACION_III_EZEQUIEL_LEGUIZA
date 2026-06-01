const elementos = [
    { nombre: "Manzana", categoria: "fruta" },
    { nombre: "Banana", categoria: "fruta" },
    { nombre: "Naranja", categoria: "fruta" },
    { nombre: "Minecraft", categoria: "juego" },
    { nombre: "Hollow Knight", categoria: "juego" },
    { nombre: "Celeste", categoria: "juego" },
    { nombre: "FIFA 25", categoria: "juego" }
]

const grid = document.getElementById("gridListado")

const mostrarElementos = (lista) => {
    grid.innerHTML = ""
    lista.forEach((item) => {
        const tarjeta = document.createElement("div")
        tarjeta.className = "tarjeta"
        tarjeta.innerHTML = "<b>" + item.nombre + "</b><br><small>" + item.categoria + "</small>"
        grid.appendChild(tarjeta)
    })
}

mostrarElementos(elementos)

document.getElementById("btnTodos").addEventListener("click", () => {
    mostrarElementos(elementos)
})

document.getElementById("btnFrutas").addEventListener("click", () => {
    const frutas = elementos.filter((item) => item.categoria == "fruta")
    mostrarElementos(frutas)
})

document.getElementById("btnJuegos").addEventListener("click", () => {
    const juegos = elementos.filter((item) => item.categoria == "juego")
    mostrarElementos(juegos)
})