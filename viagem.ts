class Viagem{
    constructor(public tempoGasto:number, public velocidadeMedia:number, public rendimentoVeiculo:number){}
    obterDistancia(){
        return this.tempoGasto * this.velocidadeMedia
    }
    obterConsumo(){
        return this.obterDistancia() / this.rendimentoVeiculo
    }
}

export{Viagem as V}