export default class Cl_Porcentaje {
    constructor(cantidadChicos, cantidadChicas) {
        this.cantidadChicos = cantidadChicos;
        this.cantidadChicas = cantidadChicas;
    }
    set cantidadChicos(co) {
        this._cantidadChicos = +co;
    }

    get cantidadChicos() {
        return this._cantidadChicos;
    }

    set cantidadChicas(ca) {
        this._cantidadChicas = +ca;
    }

    get cantidadChicas() {
        return this._cantidadChicas;
    }

    porcentajeChicos() {
        return (this.cantidadChicos / (this.cantidadChicos + this.cantidadChicas)) * 100;
    }

    porcentajeChicas() {
        return (this.cantidadChicas / (this.cantidadChicos + this.cantidadChicas)) * 100;
    }
}
