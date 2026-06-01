let items = [
    { titulo: "Stranger Things", descripcion: "Serie de Netflix" },
    { titulo: "Minecraft", descripcion: "Videojuego de construccion" },
    { titulo: "Pizza", descripcion: "Mi comida favorita" },
    { titulo: "Patagonia", descripcion: "Lugar para visitar" },
    { titulo: "Gravity Fall", descripcion: "Serie animada" }
]

let grid = document.getElementById("gridDestacados")

items.forEach((item) => {
    let tarjeta = document.createElement("div")
    tarjeta.className = "tarjeta"
    tarjeta.innerHTML = "<b>" + item.titulo + "</b><br><small>" + item.descripcion + "</small>"

    tarjeta.addEventListener("click", () => {
        tarjeta.classList.toggle("seleccionada")
        actualizarContador()
    })

    grid.appendChild(tarjeta)
})

const actualizarContador = () => {
    let sel = document.querySelectorAll(".seleccionada")
    document.getElementById("info").textContent = "Seleccionadas: " + sel.length
}