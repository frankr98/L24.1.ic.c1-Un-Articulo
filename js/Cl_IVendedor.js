export default class Cl_IVendedor {
    leerCedula(c){
        prompt("ingrese la cedula");
    }
    leerMontotv(m){
        prompt("ingrese el monto total de ventas");
    }

    reporteVendedor(c,m, cm)
    { return `
        <br> cedula: ${c}
        <br> monto total de ventas: ${m}
        <br> comision: ${cm}
        `
    }
}