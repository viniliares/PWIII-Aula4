"use strict";
exports.__esModule = true;
var Viagem = /** @class */ (function () {
    function Viagem(tempoGasto, velocidadeMedia, rendimentoVeiculo) {
        this.tempoGasto = tempoGasto;
        this.velocidadeMedia = velocidadeMedia;
        this.rendimentoVeiculo = rendimentoVeiculo;
    }
    Viagem.prototype.obterDistancia = function () {
        return this.tempoGasto * this.velocidadeMedia;
    };
    Viagem.prototype.obterConsumo = function () {
        return this.obterDistancia() / this.rendimentoVeiculo;
    };
    return Viagem;
}());
exports.V = Viagem;
