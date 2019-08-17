import {V} from "./viagem"

let resultado = new V(2, 100, 10)

console.log(`Distância: ` + resultado.obterDistancia() + ` Km`)
console.log(`Consumo: ` + resultado.obterConsumo() + ` L`)