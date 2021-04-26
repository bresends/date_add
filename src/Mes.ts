import Dia from './Dia.js';

function eAnoBissexto(ano: number) {
  return ano % 100 === 0 ? ano % 400 === 0 : ano % 4 === 0;
}

export default class Mes {
  lang: string;
  nome: string;
  numero: number;
  ano: number;
  numeroDias: number;

  constructor(date: Date | null = null, lang: string = 'default') {
    const dia = new Dia(null, lang);
    const tamanhoMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    this.lang = lang;
    this.nome = dia.mes;
    this.numero = dia.mesNumero;
    this.ano = dia.ano;
    this.numeroDias = tamanhoMes[this.numero - 1];

    if (this.numero === 2) {
      this.numeroDias += eAnoBissexto(dia.ano) ? 1 : 0;
    }

   
  }
  
  getDia(date:number) {
      return new Dia(new Date(this.ano, this.numero-1, date), this.lang);
  }

   this[Symbol.iterator] = function* () {
      let numero = 1;
      yield this.getDia(numero);
      while (numero < this.numeroDias) {
        ++numero;
        yield this.getDia(numero);
      }
    };

}
