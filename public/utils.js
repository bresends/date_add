/**
 * Pega uma data passada para a função e retorna qual o número daquela semana no ano
 *
 * O número de dias passados no ano subtrai a data atual do primeiro dia da data do ano (em ms)
 * e divide por 1 dia em milisegundos para o resultado em dias
 *
 * @param {Date} data
 * @returns {number} -> O numero da semana
 */
function getNumeroSemana(data) {
    const primeiroDiaAno = new Date(data.getFullYear(), 0, 1);
    const diasPassadosAno = (data.valueOf() - primeiroDiaAno.valueOf()) / 86400000;
    return Math.ceil((diasPassadosAno + primeiroDiaAno.getDay() + 1) / 7);
}
export { getNumeroSemana };
