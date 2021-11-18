const calcularDepreciacionNIIF = (precioInicial, precioFinal, vidaUtil,numeroPeriodoAconsultar) => {
    if (vidaUtil<=0) {
        return 0;
    } else {
        if (numeroPeriodoAconsultar>vidaUtil) {
            return precioFinal;
        } else {
            for (let index = 0; index < numeroPeriodoAconsultar; index++) {
                var depreciacion = (precioInicial-precioFinal)/vidaUtil;
            }
            return depreciacion;
        }
    }
}

const calcularDepreciacionNIIFEnDolares = (precioInicial, precioFinal, vidaUtil,numeroPeriodoAconsultar) => {
    if (vidaUtil<=0) {
        return 0;
    } else {
        if (numeroPeriodoAconsultar>vidaUtil) {
            return precioFinal;
        } else {
            if (precioInicial<0) {
                return "error";
            } else {
                for (let index = 0; index < numeroPeriodoAconsultar; index++) {
                    var depreciacion = (precioInicial-precioFinal)/vidaUtil;
                }
                return depreciacion;
            }
        }
    }
}

module.exports.calcularDepreciacionNIIF=calcularDepreciacionNIIF;
module.exports.calcularDepreciacionNIIFEnDolares=calcularDepreciacionNIIFEnDolares;