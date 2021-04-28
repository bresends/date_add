"use strict";
$(function () {
    $('#dataInicio').datepicker({
        dateFormat: 'dd/mm/yy',
        dayNames: [
            'Domingo',
            'Segunda',
            'Terça',
            'Quarta',
            'Quinta',
            'Sexta',
            'Sábado',
            'Domingo',
        ],
        dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S', 'D'],
        dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
        monthNames: [
            'Janeiro',
            'Fevereiro',
            'Março',
            'Abril',
            'Maio',
            'Junho',
            'Julho',
            'Agosto',
            'Setembro',
            'Outubro',
            'Novembro',
            'Dezembro',
        ],
        monthNamesShort: [
            'Jan',
            'Fev',
            'Mar',
            'Abr',
            'Mai',
            'Jun',
            'Jul',
            'Ago',
            'Set',
            'Out',
            'Nov',
            'Dez',
        ],
        todayHighlight: true,
    });
});
const inputDate = document.querySelector('#dataInicio');
const outputDate = document.querySelector('#data-retorno');
const qtdDias = document.querySelector('#qtd-dias');
const btnCopiar = document.querySelector('#btn-copiar');
function retornarData(e) {
    e.preventDefault();
    outputDate.value = addDays(inputDate.value, Number(qtdDias.value)).toLocaleDateString();
}
/**
 * Recebe uma data no formato XX/XX/XXXX
 * Transforma essa data em uma lista e cria nova data a partir dela
 * Cria uma copia dessa data no formato de milisegundos (Number)
 * Pega o número do dia no mês da data inicial
 * @param date -> Data no formato XX/XX/XXXX
 * @param days -> Quantidade de dias a serem somados
 * @returns Date
 */
function addDays(date, days) {
    const formatedDateList = date.split('/');
    const dataInicial = new Date(Number(formatedDateList[2]), Number(formatedDateList[1]) - 1, Number(formatedDateList[0]));
    const dataFinal = new Date(Number(dataInicial));
    dataFinal.setDate(dataInicial.getDate() + days - 1);
    return dataFinal;
}
function copyDate(e) {
    e.preventDefault();
    const conteudo = outputDate.value;
    if (conteudo && conteudo != 'Invalid Date') {
        navigator.clipboard.writeText(conteudo);
        btnCopiar.classList.toggle('copiado');
        btnCopiar.value = 'Copiado para Área de Transferência';
        setTimeout(() => {
            btnCopiar.value = 'Copiar';
            btnCopiar.classList.toggle('copiado');
        }, 2000);
    }
    else {
        btnCopiar.classList.toggle('erro');
        btnCopiar.value = 'Insira uma data e quantidade de dias';
        setTimeout(() => {
            btnCopiar.value = 'Copiar';
            btnCopiar.classList.toggle('erro');
        }, 2000);
    }
}
qtdDias.addEventListener('input', retornarData);
btnCopiar.addEventListener('click', copyDate);
