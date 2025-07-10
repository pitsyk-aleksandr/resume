/* Работа по кнопке - Печать  */

/* ==================================================== */
/* Поиск объекта - кнопка - Печать */
const btnPrint = document.querySelector('.btn-print');

/* Добавляем "слушателя событий" на кнопку - Печать */
btnPrint.addEventListener('click', onBtnPrintClick);

/* Функция - хендлер (при клике на кнопку Печать) */
function onBtnPrintClick(event) { 
    window.print();
};
/* ==================================================== */