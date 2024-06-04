let urlBase = "https://api.openweathermap.org/data/2.5/weather"
let api_key = "e2663a56d2bb5fcbcf2607f6dfb87566"
let difKelvin = 273.15



/* The code snippet `document.getElementById("botonBusqueda").addEventListener("click", () => { ... })`
is adding an event listener to a button element with the id "botonBusqueda". When the button is
clicked, the following actions are performed: */
document.getElementById("botonBusqueda").addEventListener("click", () => {
    const ciudad = document.getElementById("ciudadEntrada").value
    if (ciudad){
        fetchDatosClima(ciudad)
    }
})



/**
 * Fetches weather data for a specified city using an API key and displays the data.
 * @param {string} ciudad - The city for which you want to fetch weather data.
 */
function fetchDatosClima(ciudad){
    fetch(`${urlBase}?q=${ciudad}&appid=${api_key}`)
    .then(data => data.json())
    .then(data => mostrarDatosClima(data))
}

/**
 * Displays weather data for a city on a webpage.
 * @param {object} data - An object containing weather information for a specific city.
 */
function mostrarDatosClima(data){
    console.log(data)
    const divDatosClima = document.getElementById("datosClima")
    divDatosClima.innerHTML = ''

    const ciudadNombre = data.name
    const temperatura = data.main.temp
    const descripcion = data.weather[0].description

    const ciudadTitulo = document.createElement("h2")
    ciudadTitulo.textContent = ciudadNombre
    ciudadTitulo.style.color = "#8a2be2"

    const temperaturaInfo = document.createElement("p")
    temperaturaInfo.textContent = `La temperatura actual es: ${Math.floor(temperatura - difKelvin)}ºC`
    temperaturaInfo.style.animation = "parpadeo-rapido 0.3s infinite alternate"

    const descripcionInfo = document.createElement("p")
    descripcionInfo.textContent = `La descripción meteorológica es: ${descripcion}`
    descripcionInfo.style.color = "#b298e2"


    divDatosClima.appendChild(ciudadTitulo)
    divDatosClima.appendChild(temperaturaInfo)
    divDatosClima.appendChild(descripcionInfo)
}