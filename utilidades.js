function formatearPrecio(precio) {
  return "$" + precio.toLocaleString("es-CO");
}

function esEmailValido(email) {
  if (email.includes("@") && email.includes(".")) {
    return true;
  } else {
    return false;
  }
}

function calcularDescuento(precio, porcentaje) {
  const descuento = precio * (porcentaje / 100);
  return precio - descuento;
}

module.exports = {
  formatearPrecio,
  esEmailValido,
  calcularDescuento
};
