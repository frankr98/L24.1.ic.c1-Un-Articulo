/** análisis
 * se tienen los siguientes datos de un vendedor
 * cedula, monto total de ventas
 * se requiere un programa que genere un reporte con el 20% de comision del monto total de ventas
 */

import Cl_Vendedor from "./Cl_Vendedor.js";
import Cl_IVendedor from "./Cl_IVendedor.js";

let iVend = new Cl_IVendedor(),
    c = iVend.leerCedula(),
    m = iVend.leerMontotv(),
    cm = new Cl_Vendedor(c, m);

    let Vend = new Cl_Vendedor(c, m, cm);

    salida.innerHTML = iVend.reporteVendedor(Vend.cedula, Vend.montotv, Vend.calcularComision());



