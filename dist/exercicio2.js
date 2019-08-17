"use strict";
exports.__esModule = true;
var viagem_1 = require("./viagem");
var resultado = new viagem_1.V(2, 100, 10);
console.log("Dist\u00E2ncia: " + resultado.obterDistancia() + " Km");
console.log("Consumo: " + resultado.obterConsumo() + " L");
