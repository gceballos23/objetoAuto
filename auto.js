var auto = /** @class */ (function () {
    function auto(paramMarca, paramModelo, paramColor) {
        this.marca = paramMarca;
        this.modelo = paramModelo;
        this.color = paramColor;
        this.ruedaAuxilio = false;
    }
    // Funciones     
    auto.prototype.getPropietario = function () {
        return this.propietario;
    };
    auto.prototype.setPropietario = function (paramPropietario) {
        this.propietario = paramPropietario;
    };
    auto.prototype.getModelo = function () {
        return this.modelo;
    };
    auto.prototype.setModelo = function (paramModelo) {
        this.modelo = paramModelo;
    };
    auto.prototype.getColor = function () {
        return this.color;
    };
    auto.prototype.setColor = function (paramColor) {
        this.color = paramColor;
    };
    auto.prototype.getRuedaAuxilio = function () {
        return this.ruedaAuxilio;
    };
    auto.prototype.setRuedaAuxilio = function () {
        this.ruedaAuxilio = !this.ruedaAuxilio;
    };
    return auto;
}());
var miAuto = new auto('VW', 'GOL POWER', 'BLANCO');
var colorAuto = miAuto.getColor();
console.log('Color del Auto: ' + colorAuto);
