class Producto {
  constructor(nombre, precio, categoria, stock) {
    this.nombre = nombre;
    this.precio = precio;
    this.categoria = categoria;
    this.stock = stock;
  }

  hayStock(cantidad) {
    if (cantidad <= this.stock) {
      return true;
    } else {
      return false;
    }
  }

  ficha() {
    return this.nombre + " - $" + this.precio + " - " + this.categoria + " - stock: " + this.stock;
  }
}

module.exports = Producto;
