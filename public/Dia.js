import { getNumeroSemana } from './utils.js';
export default class Dia {
    constructor(date = null, lang = 'default') {
        date = date !== null && date !== void 0 ? date : new Date();
        this.DateObj = date;
        this.diaMes = date.getDate();
        this.diaSemanaCompleto = date.toLocaleString(lang, { weekday: 'long' });
        this.diaSemanaCurto = date.toLocaleString(lang, { weekday: 'short' });
        this.diaSemanaNumerico = date.getDay() + 1;
        this.ano = date.getFullYear();
        this.anoCurto = Number(date.toLocaleString(lang, { year: '2-digit' }));
        this.mes = date.toLocaleDateString(lang, { month: 'long' });
        this.mesCurto = date.toLocaleString(lang, { month: '2-digit' });
        this.mesNumero = Number(date.toLocaleDateString(lang, { month: '2-digit' }));
        this.timeStamp = date.getTime();
        this.numeroSemanaAno = getNumeroSemana(date);
    }
    get diaEHoje() {
        return this.dataIgual(new Date());
    }
    dataIgual(date) {
        date = date instanceof Dia ? date.DateObj : date;
        return (date.getDate() === this.diaMes &&
            date.getMonth() === this.mesNumero - 1 &&
            date.getFullYear() === this.ano);
    }
    /**
     * Faz a conversão da data para o formato desejado
     * @param stringFormato -> Recebe em texto os parametros desejados do output de data.
     * @returns -> Data formatada (na linguagem especificada ao instanciar a classe)
     */
    format(stringFormato) {
        return stringFormato
            .replace(/\bYYYY\b/, this.ano.toString())
            .replace(/\bYYY\b/, this.anoCurto.toString())
            .replace(/\bWW\b/, this.numeroSemanaAno.toString().padStart(2, '0'))
            .replace(/\bW\b/, this.numeroSemanaAno.toString())
            .replace(/\bDDDD\b/, this.diaSemanaCompleto)
            .replace(/\bDDD\b/, this.diaSemanaCurto)
            .replace(/\bDD\b/, this.diaSemanaNumerico.toString().padStart(2, '0'))
            .replace(/\bD\b/, this.diaMes.toString())
            .replace(/\bMMMM\b/, this.mes)
            .replace(/\bMMM\b/, this.mesCurto)
            .replace(/\bMM\b/, this.mesNumero.toString().padStart(2, '0'))
            .replace(/\bM\b/, this.mesNumero.toString());
    }
}
