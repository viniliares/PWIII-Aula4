"use strict";
exports.__esModule = true;
var Pessoa = /** @class */ (function () {
    function Pessoa(altura, peso) {
        this.altura = altura;
        this.peso = peso;
    }
    Pessoa.prototype.imc = function () {
        return this.peso / (this.altura * this.altura);
    };
    Pessoa.prototype.classificar = function () {
        if (this.imc() < 18.5) {
            return "Situa\u00E7\u00E3o: Abaixo do Peso";
        }
        else if (this.imc() >= 18.5 && this.imc() <= 24.9) {
            return "Situa\u00E7\u00E3o: Peso Normal";
        }
        else if (this.imc() >= 25.0 && this.imc() <= 29.9) {
            return "Situa\u00E7\u00E3o: Pr\u00E9 Obesidade";
        }
        else if (this.imc() >= 30.0 && this.imc() <= 34.9) {
            return "Situa\u00E7\u00E3o: Obesidade Grau I";
        }
        else if (this.imc() >= 35.0 && this.imc() <= 39.99) {
            return "Situa\u00E7\u00E3o: Obesidade Grau II";
        }
        else {
            return "Situa\u00E7\u00E3o: Obesidade Grau III";
        }
    };
    return Pessoa;
}());
exports.P = Pessoa;
