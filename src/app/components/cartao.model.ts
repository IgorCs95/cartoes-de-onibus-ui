
export interface Cartao{
  numeroCartao:number
  nome:String
  status:boolean
  tipocartao:TipoCartao
  user:{
    id:number
  }

}

export enum TipoCartao{
  comun = "COMUN",
  estudante="ESTUDANTE",
  trabalhador="TRABALHADOR"
}