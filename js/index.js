const meriendas = [
    "Garbanzos crocantes",
    "Polenta tostada",
    "Mug cake",
    "Rollitos de mani",
    "Pudin de chia",
    "Chips de manzana"
]

const contenedor = document.getElementById("listaMeriendas")

meriendas.forEach((item) => {
    const tarjeta = document.createElement("div")
    tarjeta.className = "tarjeta"
    tarjeta.textContent = item
    contenedor.appendChild(tarjeta)
})

document.getElementById("btnCantidad").addEventListener("click", () => {
    const info = document.getElementById("info")
    info.textContent = "Hay " + meriendas.length + " meriendas"
})