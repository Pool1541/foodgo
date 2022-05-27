const FORMULARIO = document.getElementById('formulario');
const CONTAINER = document.querySelector('.container__form');
const DISPLAY_EXITO = document.querySelector('.exito');


FORMULARIO.addEventListener('submit', async e => {
    e.preventDefault();

    try{
        const respuesta = await fetch('https://sheet.best/api/sheets/b73e04c7-7e9d-44e3-994d-da9a7d9c81be', {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                "Nombre" : FORMULARIO.nombre.value,
                "Correo" : FORMULARIO.correo.value,
                "Telefono" : FORMULARIO.telefono.value,
                "Comentario" : FORMULARIO.comentario.value
            })
        });
        const contenido = await respuesta.json();
        console.log(contenido[0])
    } catch(e){
        console.log('Error : ', e);
    }

    CONTAINER.classList.remove('activo');
    DISPLAY_EXITO.classList.add('activo');
})