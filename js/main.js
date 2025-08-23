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
                    <img src="${guitarra.img}" alt="${guitarra.tipo}" />
                    <h3 class="guitar-title"> ${guitarra.nombre} </h3>
                    <p class="guitar-price">Lista: U$${guitarra.precio}</p>
            </div>
            <button class="guitar-button" data-id="${guitarra.id}">Agregar a Carrito</button>
        </div>
        `

        guitarrasContainer.appendChild(guitarraElement)
        guitarrasContainer.className = ("guitarras_container")
        
        const btn = guitarraElement.querySelector('.guitar-button');
        btn.addEventListener('click', () => {

            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            
            const index = cart.findIndex(item => item.id === guitarra.id);

            if (index >= 0) {
                cart[index].qty += 1;
                } else {
                    cart.push({
                        id: guitarra.id,         
                        nombre: guitarra.nombre,
                        precio: guitarra.precio,
                        img: guitarra.img,
                        qty: 1
                    });
                }

            localStorage.setItem('cart', JSON.stringify(cart));
            
            Swal.fire({
                title: '¡Agregado al carrito!',
                text: `${guitarra.nombre} fue añadido correctamente.`,
                icon: 'success',
                timer: 5000,
                position: 'top-end',
                toast: true
            });
});
    });
}).catch( error => {
    console.error("Ha ocurrido un error... " + error)
})