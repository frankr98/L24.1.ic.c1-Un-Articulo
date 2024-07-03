export default class Cl_IProducto {
    leerCodigo() {
        return prompt("Ingresar Codigo");
    }

    leerCosto() {
        return prompt("Ingresar Costo");

    }

    leerTipo() {
        return prompt("Ingresar el Tipo 1: dama, 2: caballero, 3: niño)");
    }

    reporteProducto(c, p, d, pf) {
        return `
        <br> Codigo: ${c}
        <br> Precio Base de Venta :$ ${p}
        <br> Descuento :$ ${d}
        <br> Precio Final :$ ${pf}
        `
    }

}