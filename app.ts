class Aluno{
    constructor(public nome:string){}
    exibir(){
        console.log("Nome:"+this.nome)
    }
}



let ronqui = new Aluno("Rafel Ronqui")

ronqui.exibir()