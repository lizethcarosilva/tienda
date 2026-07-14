const Producto = require("./producto");
const { formatearPrecio, calcularDescuento } = require("./utilidades");

class Carrito {
  constructor(usuario) {
    this.usuario = usuario;
    this.items = [];
  }

  agregar(producto, cantidad) {
    if (!producto.hayStock(cantidad)) {
      return "sin stock";
    }

    this.items.push({
      producto: producto,
      cantidad: cantidad
    });

    return "Producto agregado: " + producto.nombre;
  }

  subtotal() {
    let suma = 0;

    for (let item of this.items) {
      suma = suma + item.producto.precio * item.cantidad;
    }

    return suma;
  }

  total() {
    const sub = this.subtotal();

    if (this.usuario.esVip) {
      return calcularDescuento(sub, 10);
    }

    return sub;
  }

  recibo() {
    let texto = this.usuario.saludo() + "\n";
    texto = texto + "--- Recibo ---\n";

    for (let item of this.items) {
      const linea =
        item.producto.nombre +
        " x" +
        item.cantidad +
        " = " +
        formatearPrecio(item.producto.precio * item.cantidad);
      texto = texto + linea + "\n";
    }

    texto = texto + "Total: " + formatearPrecio(this.total());
    return texto;
  }
}

module.exports = Carrito;
