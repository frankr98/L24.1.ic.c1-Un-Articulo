export default class Cl_IPorcentaje {
    leerCantidadChicos() {
        return prompt("Introduce la cantidad de chicos");
    }
    leerCantidadChicas() {
        return prompt("Introduce la cantidad de chicas");
    }

    reportePorcentaje(pco, pca) {
        return `
        <br> Porcentaje de chicos: </b> ${pco}%
        <br> Porcentaje de chicas: </b> ${pca}%
        `
    }
}