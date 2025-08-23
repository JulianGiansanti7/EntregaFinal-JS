
// Formulario

const datos = {
    nombre: '',
    apellido: '',
    celular: '',
    email: '',
    mensaje: ''
};

const nombre = document.querySelector('#nombre');
const apellido = document.querySelector('#apellido');
const celular = document.querySelector('#celular');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.contact_form__container--form');

nombre.addEventListener('input', leerTexto);
apellido.addEventListener('input', leerTexto);
celular.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

formulario.addEventListener('submit', function(e){
    e.preventDefault();

    //Validar Form...

    const {nombre, apellido, celular, email, mensaje} = datos;

    if (nombre === '' || apellido === '' || celular === '' || email === '' || mensaje === ''){
        mostrarAlerta('Todos los campos deben completarse' , true);
        return;
    } else {
        mostrarAlerta('Formulario Enviado Correctamente');
    }
})

function leerTexto (e){
    datos[e.target.id] = e.target.value;
}

function mostrarAlerta(mensaje, error = null){
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;
    
    if (error){
        alerta.classList.add('error');
    } else {
        alerta.classList.add('correcto');
    }

    formulario.appendChild(alerta);

    setTimeout(() => {
        alerta.remove();
    }, 3000);
}