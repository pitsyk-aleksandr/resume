/* Для динамического сайта    */

// Подробности для работ 
// Контент на разных языках = Массив объектов (структур) - приближенный к БД
// -----------------------------------------------------------

export default {
    /* Обязанности на работе */
    responses: [
        /* ТОВ «ДДАП-РАКС» - Заступник директора з якості та контролю */
        /* - work_number: 0     = Номер работы (вне зависимости от языка) */
        /* - work_id: 0         = Id работы (с привязкой к языку) */
        {
            response_id: 0,
            work_id: 0,
            work_number: 0,
            lang_id: 0,
            name: "Організація роботи у колективі",
        },
        {
            response_id: 1,
            work_id: 0,
            work_number: 0,
            lang_id: 1,
            name: "Organization of work in a team",
        },
        {
            response_id: 2,
            work_id: 0,
            work_number: 0,
            lang_id: 2,
            name: "Организация работы в коллективе",
        },
    ],

    /* Достижения на работе */
    achieves: [
        {
            achieve_id: 0,
            work_id: 0,
            work_number: 0,
            lang_id: 0,
            name: "Досягнення 1 ",
        },
        {
            achieve_id: 1,
            work_id: 0,
            work_number: 0,
            lang_id: 1,
            name: "Arrive 1 ",
        },
        {
            achieve_id: 2,
            work_id: 0,
            work_number: 0,
            lang_id: 2,
            name: "Достижение 1 ",
        },
    ],
    

};
