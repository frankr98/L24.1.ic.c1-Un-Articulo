export default class Cl_Vendedor {
    constructor(cedula, montotv) {
        this._cedula = cedula;
        this._montotv = montotv;
    }
    set cedula(c) {
        this._cedula = c;
    }
    get cedula() {
        return this.cedula;
    }
    set montotv(m) {
        this._montotv = +m;
    }
    get montotv() {
        return this.montotv;
    }

    calcularComision(cm) {
        return this.montotv * 20/100;
    }
}