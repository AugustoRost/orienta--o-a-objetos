export class Carteira {
    titular: string
    saldo: number
  
    constructor(titular: string, saldo: number,) {
      this.titular = titular
      this.saldo = saldo > 0 ? saldo : 0
    }
  
    sacar(valorDeSaque): any {

        if (valorDeSaque > this.saldo) {
            console.log(`Saldo Indisponivel`);
            
        } else {

            this.saldo = this.saldo - valorDeSaque
        
            console.log(`Saldo atual R$: ${this.saldo}`)
        }
    }

    deposito(valorDeDeposito): any {
        this.saldo = this.saldo + valorDeDeposito
    
        console.log(`Saldo atual R$: ${this.saldo}`)
      }
  }
  