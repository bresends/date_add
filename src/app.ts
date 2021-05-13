import { addDays, inputDate, outputDate, btnCopiar, qtdDias } from './utils';

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
    onSelect: function returnDate() {
      if (qtdDias.value) {
        retornarData()
      }
    },
  });
});

qtdDias.addEventListener('input', retornarData);

function retornarData() {
  outputDate.value = addDays(
    inputDate.value,
    Number(qtdDias.value)
  ).toLocaleDateString();
}

btnCopiar.addEventListener('click', copyDate);

function copyDate(e: Event) {
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
  } else {
    btnCopiar.classList.toggle('erro');
    btnCopiar.value = 'Insira uma data e quantidade de dias';
    setTimeout(() => {
      btnCopiar.value = 'Copiar';
      btnCopiar.classList.toggle('erro');
    }, 2000);
  }
}
