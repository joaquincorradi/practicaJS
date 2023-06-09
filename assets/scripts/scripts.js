function calcPrecio() {
  var nombre = document.getElementById("nombre").value;
  var apellido = document.getElementById("apellido").value;
  var marca = document.getElementById("marca").value;

  var talle40 = document.getElementById("talle-40").checked;
  var talle41 = document.getElementById("talle-41").checked;
  var talle42 = document.getElementById("talle-42").checked;

  var precio = 0;

  if (talle40) {
    precio += 10;
  }
  if (talle41) {
    precio += 20;
  }
  if (talle42) {
    precio += 30;
  }

  if (marca == "nike") {
    precio += 400;
  }
  if (marca == "adidas") {
    precio += 300;
  }
  if (marca == "puma") {
    precio += 200;
  }

  document.getElementById("resultado").innerHTML =
    "El precio para el pedido de " +
    nombre +
    " " +
    apellido +
    " es de $" +
    precio;
}

function borrar() {
  document.getElementById("nombre").value = "";
  document.getElementById("apellido").value = "";
  document.getElementById("marca").value = "";
  document.getElementById("resultado").innerHTML = "";
  document.getElementById("talle-40").checked = false;
  document.getElementById("talle-41").checked = false;
  document.getElementById("talle-42").checked = false;
}
