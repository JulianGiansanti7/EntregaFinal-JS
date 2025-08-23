// Agregar Guitarras desde JSON

const guitarrasContainer = document.getElementById('guitarras_container');

fetch("./data/data.json")
.then(response => response.json())
.then( data => {
    const guitarras = data.guitarras

    guitarras.forEach( guitarra => {
        const guitarraElement = document.createElement("div")
        guitarraElement.innerHTML = `
        <div class="guitar__cards">
            <div class="guitar__cards--info">
                <a href="#" class="guitar-link">
                    <img src="${guitarra.img}" alt="${guitarra.tipo}" />
                    <h3 class="guitar-title"> ${guitarra.nombre} </h3>
                    <p class="guitar-price">Lista: U$${guitarra.precio}</p>
                </a>
            </div>
            <button id="btn" class="guitar-button">Agregar a Carrito</button>
        </div>
        `

        guitarrasContainer.appendChild(guitarraElement)
        guitarrasContainer.className = ("guitarras_container")
    });
}).catch( error => {
    console.error("Ha ocurrido un error... " + error)
});