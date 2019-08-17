class  Pessoa{
    constructor(public altura:number, public peso:number){}
    imc(){
        return this.peso / (this.altura * this.altura)
    }
    classificar(){
        if(this.imc() < 18.5){
            return `Situação: Abaixo do Peso`
        }
        else if(this.imc() >=18.5 && this.imc() <=24.9){
            return `Situação: Peso Normal`
        }
        else if(this.imc() >= 25.0 && this.imc() <= 29.9){
            return `Situação: Pré Obesidade`
        }
        else if(this.imc() >= 30.0 && this.imc() <= 34.9){
            return `Situação: Obesidade Grau I`
        }
        else if(this.imc() >= 35.0 && this.imc() <= 39.99){
            return `Situação: Obesidade Grau II`
        }
        else{
            return `Situação: Obesidade Grau III`
        }
    }
}
export{Pessoa as P}
