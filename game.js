const personaje =
    document.getElementById("personaje");

let posicionX = 45;

let teclas = {};


/* DETECTAR TECLAS */

document.addEventListener("keydown", function(event) {

    teclas[event.key.toLowerCase()] = true;

});


document.addEventListener("keyup", function(event) {

    teclas[event.key.toLowerCase()] = false;

});


/* MOVIMIENTO */

function actualizarPersonaje() {

    let moviendo = false;


    if (teclas["a"] || teclas["arrowleft"]) {

        posicionX -= 0.6;

        moviendo = true;

    }


    if (teclas["d"] || teclas["arrowright"]) {

        posicionX += 0.6;

        moviendo = true;

    }


    /* LIMITES */

    if (posicionX < 0)
        posicionX = 0;

    if (posicionX > 90)
        posicionX = 90;


    personaje.style.left =
        posicionX + "%";


    /* ANIMACIÓN */

    if (moviendo) {

        personaje.classList.add("caminando");

    } else {

        personaje.classList.remove("caminando");

    }


    requestAnimationFrame(actualizarPersonaje);

}


actualizarPersonaje();
