const calcularDepreciacionNIIF = (precioInicial, precioFinal, vidaUtil, numeroPeriodoAconsultar) => {
    if ( vidaUtil <= 0 ) {
        return 0;
    }
    if ( numeroPeriodoAconsultar > vidaUtil ) {
        return precioFinal;
    }
    let annualDepreciation = ( precioInicial - precioFinal ) / vidaUtil;
    for ( let i = 0; i < numeroPeriodoAconsultar; i++ ) {
        depreciation = precioInicial - ( numeroPeriodoAconsultar * annualDepreciation );
    }
    return depreciation;
}

const calcularDepreciacionNIIFEnDolares = (precioInicial, precioFinal, vidaUtil, numeroPeriodoAconsultar) => {
    const USDtoCOP = 3778;
    if ( precioInicial < 0 ) {
        throw "error"
    }
    return calcularDepreciacionNIIF(precioInicial, precioFinal, vidaUtil, numeroPeriodoAconsultar) / USDtoCOP;
}

module.exports.calcularDepreciacionNIIF=calcularDepreciacionNIIF;
module.exports.calcularDepreciacionNIIFEnDolares=calcularDepreciacionNIIFEnDolares;