import { Cliente } from "./Cliente.js";

export class ContaCorrente{
    static numeroDeContas = 0;
    _cliente;
    agencia;
    _saldo = 0;



    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this.saldo;
    }



    constructor(cliente, agencia){
        this.agencia = agencia;
        this.cliente = cliente;
        ContaCorrente.numeroDeContas += 1;
    }



    sacar(valor){
        if (this._saldo >= valor){
            this._saldo -= valor;
            console.log("Transferencia efetivada");
            return valor;
        }else{
            console.log("Saldo indisponivel");
        }
    }

    depositar(valor){
        if(valor > 0){
            this._saldo += valor;
            console.log(`Valor de positado ${valor}`);
        }else{
            console.log("Valor depositado é menor que 0");
        }
    }

    transferir(Valor, Conta){
        Conta.depositar(this.sacar(Valor));
    }
}