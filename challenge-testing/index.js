class CarritoCompra {
    constructor () {
        this.array = [];
    }

agregarProducto (producto) {
    this.array.push(producto);
};

calcularTotal () {
    return this.array.reduce( (acum, producto) => acum = acum + producto.precio, 0)
};

aplicarDescuento (descuento) {
    const total = this.calcularTotal();
    return total - (total * descuento) / 100
};
};

module.exports = {
    CarritoCompra
}