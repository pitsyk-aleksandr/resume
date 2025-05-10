/* Скрипт при нажатии на кнопку Подробнее... */

const experienceAll = document.querySelector('.section.works');

/* Добавляем "слушателя событий" на всю секцию с опытом работы */
/* и затем контролируем нажатия только на кнопки - с детальным описанием опыта работы */
experienceAll.addEventListener('click', onDetailsClick);

function onDetailsClick(event) {
    /* Если событие произошло не на кнопке (объекте с классом btn-details) */
    const isBtnDetails = event.target.classList.contains('btn-details');

    if (!isBtnDetails) {
        console.log('Клик не на кнопке');
        return;
    };

    /* event.target = элемент НАЖАТАЯ КНОПКА */
    const btnDetails = event.target;

    /* Проверка на наличие на кнопке class "show" */
    const isClassShow = btnDetails.classList.contains('show');
    if (!isClassShow) {
        /* Если на кнопке нет class "show" - то необходимо показывать подробности :  */
        /* Установить class "show", позволяющий показывать подробности (details):    */
        /*  - Для раздела с подробностями (class="details") */
        btnDetails.nextElementSibling.classList.add('show');
        /*  - Для кнопки - Подробности - Добавить класс "show" (Будет изменен вид кнопки)  */
        btnDetails.classList.add('show');

        /* Изменение текста кнопки */
        btnDetails.textContent = "Скрыть подробности ...";

    } else {
        /* Ести есть - то необходимо скрыть подробности : */
        /*  Убрать class "show" : */
        /*  - Для раздела с подробностями (class="details") - "узел сосед справа" = nextElementSibling */
        btnDetails.nextElementSibling.classList.remove('show');
        /*  - Для кнопки - Подробности (Будет изменен вид кнопки) */
        btnDetails.classList.remove('show');

        /* Изменение текста кнопки */
        btnDetails.textContent = "Подробнее ...";
    }

    /* Убираем фокус с кнопки - Вызываем для кнопки метод blur() */
    btnDetails.blur();
       
    /* ========== На будущее =================== */
    /* Определение места работы (по значению атрибута data-work) */
    const work = event.target.dataset.work;
    console.log('work - ', work);

    /* Действия при выборе конкретной работы */ 
    switch (work) {
        case '1':

            break;
        case '2':
            break;
        default:

    };
    /* ====================================*/
}

