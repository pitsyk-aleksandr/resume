/* Работа по кнопке - Печать  */

/* ==================================================== */
/* Поиск объекта - кнопка - Печать */
const printBtn = document.querySelector('.print-btn');

/* Добавляем "слушателя событий" на кнопку - Печать */
printBtn.addEventListener('click', onPrintBtnClick);

/* Функция - хендлер (при клике на кнопку Печать) */
function onPrintBtnClick(event) { 
    window.print();
};
/* ==================================================== */