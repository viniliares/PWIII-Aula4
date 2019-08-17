import {P} from "./pessoa"

let resposta = new P(1.74, 68)

console.log(`IMC: ` + resposta.imc().toFixed(2))
console.log(resposta.classificar())