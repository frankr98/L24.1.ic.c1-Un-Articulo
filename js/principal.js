/** Análisis
 * se conocen los siguientes datos de un producto
 * código costo tipo (1: dama, 2: caballero, 3: niño)
 * se sabe que la ven del producto resulta de incrementar un 30 % del costo del mismo.
 * el precio final del producto tiene un 10 % de descuento si es para niños.
 * se requiere un programa que muestre el código, el precio base de venta el descuento y el precio final del producto.
 */

import Cl_Producto from "./Cl_Producto.js";
import Cl_IProducto from "./Cl_IProducto.js";

let IProd = new Cl_IProducto(),

    c = IProd.leerCodigo(),
    ct = IProd.leerCosto(),
    t = IProd.leerTipo(),

    prod = new Cl_Producto(c, ct, t),

    salida = document.getElementById("salida")

    salida.innerHTML = IProd.reporteProducto(prod.codigo, prod.precioBaseVenta(), prod.descuento(), prod.precioFinal())