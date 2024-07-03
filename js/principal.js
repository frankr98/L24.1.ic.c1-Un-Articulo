/** Análisis
 * conociendo la cantidad de chicos y chicas indicar el porcentaje de cada uno.
 */

import Cl_IPorcentaje from "./Cl_IPorcentaje.js";
import Cl_Porcentaje from "./Cl_Porcentaje.js";

let Iporc = new Cl_IPorcentaje(),
co = Iporc.leerCantidadChicos(),
ca = Iporc.leerCantidadChicas(),

Porc = new Cl_Porcentaje(co, ca),
salida = document.getElementById("salida")
salida.innerHTML = Iporc.reportePorcentaje(Porc.porcentajeChicos(), Porc.porcentajeChicas())