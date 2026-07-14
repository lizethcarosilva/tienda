const Producto = require("./producto");
const Usuario = require("./usuario");
const Carrito = require("./carrito");
const { esEmailValido } = require("./utilidades");

const usuario = new Usuario("Ana Perez", "ana.perez@email.com", true);

console.log("Email valido:", esEmailValido(usuario.email));

const laptop = new Producto("Laptop", 2500000, "Tecnologia", 5);
const mouse = new Producto("Mouse", 80000, "Accesorios", 2);
const teclado = new Producto("Teclado", 150000, "Accesorios", 10);

console.log(laptop.ficha());
console.log(mouse.ficha());

const carrito = new Carrito(usuario);

console.log(carrito.agregar(laptop, 1));
console.log(carrito.agregar(mouse, 1));
console.log(carrito.agregar(teclado, 2));
console.log(carrito.agregar(mouse, 5));

console.log(carrito.recibo());
