const { CarritoCompra } = require("../index");

let nuevoCarrito;
let resultado;
let producto;
let productos;

beforeEach( () => {
    nuevoCarrito = new CarritoCompra()
    resultado = {
        array: []
    }

producto = {
    nombre: "Producto A",
    precio: 10
};

productos = [
    {    
        nombre: "Producto A",
        precio: 10
    },
    {    
        nombre: "Producto B",
        precio: 20
    },
    {    
        nombre: "Producto C",
        precio: 60
    },
    {    
        nombre: "Producto D",
        precio: 30
    },
]
});

function llenarCarrito() {
    productos.forEach((producto) => nuevoCarrito.agregarProducto(producto))
};


describe("La clase carrito compra", () => {
    it("La clase carritoCompra debe ser una clase", () => {
        expect(CarritoCompra).toBeInstanceOf(Function)
    });
    it("Una instancia de carritoCompra sea un carritoCompra", () => {
        expect(nuevoCarrito).toBeInstanceOf(CarritoCompra)
    });
});

describe("La clase debe teneros siguientes métodos", () => {
    expect(CarritoCompra.prototype.constructor).toBeDefined()
    expect(CarritoCompra.prototype.agregarProducto).toBeDefined()
    expect(CarritoCompra.prototype.calcularTotal).toBeDefined()
    expect(CarritoCompra.prototype.aplicarDescuento).toBeDefined()
});


describe("Constructor", () => {
    it("El contructor debe inicializar el carrito con un array vacío", () => {
        expect(nuevoCarrito.array).toEqual([])
    })
});

describe("AgregarProducto", () => {

    it("El método agregarProducto recibe un objeto representando un producto y lo agrega al carrito", () => {
        nuevoCarrito.agregarProducto(producto)
        expect(nuevoCarrito.array).toContainEqual(producto)
    })
})

describe("calcularTotal", () => {

    it("El método calcularTotal debe calcular el total de la compra sumando los precios de todos los productos en el carrito", () => {
        llenarCarrito()
        expect(nuevoCarrito.calcularTotal()).toBe(120)
    })
});

describe("aplicarDescuento", () => {
    it("El método aplicarDescuento() aplica un descuento al total de la compra según el porcentaje especificado", () => {
        llenarCarrito();
        expect(nuevoCarrito.aplicarDescuento(0)).toBe(120)
        expect(nuevoCarrito.aplicarDescuento(10)).toBe(108)
        expect(nuevoCarrito.aplicarDescuento(50)).toBe(60)
        expect(nuevoCarrito.aplicarDescuento(100)).toBe(0)
    })
});


