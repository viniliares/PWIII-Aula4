"use strict";
exports.__esModule = true;
var pessoa_1 = require("./pessoa");
var resposta = new pessoa_1.P(1.74, 68);
console.log("IMC: " + resposta.imc().toFixed(2));
console.log(resposta.classificar());
