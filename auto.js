var Auto = /** @class */ (function () {
    function Auto(paramMarca, paramModelo, paramColor) {
        this.marca = paramMarca;
        this.modelo = paramModelo;
        this.color = paramColor;
        this.ruedaAuxilio = false;
    }
    // Funciones     
    Auto.prototype.getPropietario = function () {
        return this.propietario;
    };
    Auto.prototype.setPropietario = function (paramPropietario) {
        this.propietario = paramPropietario;
    };
    Auto.prototype.getModelo = function () {
        return this.modelo;
    };
    Auto.prototype.setModelo = function (paramModelo) {
        this.modelo = paramModelo;
    };
    Auto.prototype.getColor = function () {
        return this.color;
    };
    Auto.prototype.setColor = function (paramColor) {
        this.color = paramColor;
    };
    Auto.prototype.getRuedaAuxilio = function () {
        return this.ruedaAuxilio;
    };
    Auto.prototype.setRuedaAuxilio = function () {
        this.ruedaAuxilio = !this.ruedaAuxilio;
    };
    return Auto;
}());
var miAuto = new Auto('VW', 'GOL POWER', 'BLANCO');
var colorAuto = miAuto.getColor();
console.log('Color del Auto: ' + colorAuto);
