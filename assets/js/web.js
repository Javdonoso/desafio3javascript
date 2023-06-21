let color = "";

document.addEventListener('keydown', function (event) {
    if (event.key === 'a'|| event.key === 'A') {
        color = "skyblue";
    } else if (event.key=== 's' || event.key === 'S'){
        color = "purple";
    } else if (event.key === 'd' || event.key === 'D') {
        color = "orange";
    } else {
        color = "";
    }

    mostrarMensaje(color, event.key);
});

function mostrarMensaje(color, tecla) {
    let msg = document.getElementById("msg");

    if (color == "") {
        msg.innerHTML = 'Seleccionó la tecla inválida: <strong>' + tecla + '</strong>, intentelo nuevamente.';
        
    } else {
        msg.innerHTML = 'Seleccionó la tecla "<strong>' + tecla + '</strong>", ahora haga click en los cuadros inferiores para convertirlos al color: <div class="cuadrado" style="background-color:' + color + '"></div>';
    }
}

function cambiaColor(elemento, color = "green") {
    elemento.style.backgroundColor = color;
}
  
caja1 = document.getElementById("caja1");
caja1.addEventListener("click", function() {
    cambiaColor(this, color);
});

caja2 = document.getElementById("caja2");
caja2.addEventListener("click", function() {
    cambiaColor(this, color);
});

caja3 = document.getElementById("caja3");
caja3.addEventListener("click", function() {
    cambiaColor(this, color);
});

caja4 = document.getElementById("caja4");
caja4.addEventListener("click", function() {
    cambiaColor(this, color);
});