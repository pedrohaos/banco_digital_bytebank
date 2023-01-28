import { Cliente } from "./JS/Cliente.js";
import { ContaCorrente } from "./JS/ContaCorrente.js";

const cliente1 = new Cliente("Pedro", 11122233309);

const Conta1 = new ContaCorrente(cliente1, 1001);

const cliente2 = new Cliente("Alenxandra", 88822233309);

const Conta2 = new ContaCorrente(cliente2, 2002);
 
console.log(ContaCorrente.numeroDeContas);