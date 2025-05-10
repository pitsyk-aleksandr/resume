/* Скрипт изменения текущего языка при нажатии на кнопку */

/* Импортирование всего контента на разных языках */
import langContent from '../data/lang-content.js';


/* Текущий язык сайта */
/* (Не забывать ставить в index.html class="current" для кнопки текущего языка) */
let currentLang = 'ru';

/* Вызов функции изменения текстового контента в зависимости от текущего языка */
changeLang(currentLang);

/* Поиск объекта - меню с кнопками выбора языков */
const langMenu = document.querySelector('.lang-menu');

/* Добавляем "слушателя событий" на меню с кнопками выбора языка */
langMenu.addEventListener('click', onMenuLangClick);

/* Функция - хендлер (при клике на кнопку меню выборя азыков) */
function onMenuLangClick(event) {
    
    /* Поиск текущего объекта - нажатой кнопки */
    const isLangBtn = event.target.classList.contains('lang-btn');

    /* Если событие произошло не на кнопке (объекте с классом lang-btn) */
    if (!isLangBtn) {
        console.log('Клик не на кнопке');
        return;
    }

    /* Если событие произошло на объекте с классом current, то пропускаем действия по изменению языка */
    const isLangCurrent = event.target.classList.contains('current');
    if (isLangCurrent) {
        console.log('Текущий элемент', event.target);
        return;
    };

    /* Если событие произошло не на кнопке с классом current, то изменяем язык */

    /* Снимаем класс со старой текущей кнопки выбора языка */
    const langBtnCurrent = document.querySelector('.lang-btn.current');
    langBtnCurrent.classList.remove('current');

    /* Находим значение атрибута data-lang */
    const dataLang = event.target.dataset;
    console.log('dataLang -', dataLang);
    const nameLang = event.target.dataset.lang;
    console.log('nameLang -', nameLang);

    /* Присваиваем текущей кнопке - класс current */
    event.target.classList.add('current');

    /* Присваиваем переменной currentLang - значение атрибута data-lang */
    currentLang = nameLang;

    /* Вызов функции изменения текста в зависимости от текущего языка */
    changeLang(currentLang);

    return;
};

/* =========================================================================== */
/* Функция изменения текстового контента на сайте - 1 вариант - без структуры  */
/* --------------------------------------------------------------------------- */
// function changeLang(newCurrentLang) {
//     const position = document.querySelector('#text-position');
//     const name = document.querySelector('#text-name');

//     switch (newCurrentLang) {
//         case 'ua':
//             position.textContent = 'Full-Stack Розробник';
//             name.textContent = 'Піцик Олександр';
//             break;
//         case 'en':
//             position.textContent = 'Full-Stack Developer';
//             name.textContent = 'Pitsyk Oleksandr';
//             break;
//         case 'ru':
//             position.textContent = 'Full-Stack Разработчик';
//             name.textContent = 'Пицык Александр';
//             break;
//     };
// }
/* =========================================================================== */

/* =========================================================================== */
// Функция изменения текстового контента на сайте - 2 вариант
/* --------------------------------------------------------------------------- */
function changeLang(newCurrentLang) {

    /* Поиск элементов c текстовым контентом (для перевода) */

    const mypositionEl = document.querySelector('#my-position');

    const mynameEl = document.querySelector('#my-name');

    const contactsTitleEl = document.querySelector('#contacts-title');

    const techTitleEl = document.querySelector('#tech-title');

    const softTitleEl = document.querySelector('#soft-title');
    const soft1El = document.querySelector('#soft-1');
    const soft2El = document.querySelector('#soft-2');
    const soft3El = document.querySelector('#soft-3');
    const soft4El = document.querySelector('#soft-4');
    const soft5El = document.querySelector('#soft-5');
    const soft6El = document.querySelector('#soft-6');

    const langTitleEl = document.querySelector('#lang-title');
    const lang1El = document.querySelector('#lang-1');
    const lang2El = document.querySelector('#lang-2');
    const lang3El = document.querySelector('#lang-3');

    const projectsTitleEl = document.querySelector('#projects-title');
    const project1El = document.querySelector('#project-1');
    const project2El = document.querySelector('#project-2');

    const addsTitleEl = document.querySelector('#adds-title');
    const add1El = document.querySelector('#add-1');
    const add2El = document.querySelector('#add-2');

    const introTitleEl = document.querySelector('#intro-title');
    const introTextEl = document.querySelector('#intro-text');

    const eduTitleEl = document.querySelector('#edu-title');

    const edu1PositionEl = document.querySelector('#edu-1-position');
    const edu1FirmEl = document.querySelector('#edu-1-firm');
    const edu1TownEl = document.querySelector('#edu-1-town');
    const edu1PeriodEl = document.querySelector('#edu-1-period');

    const edu2PositionEl = document.querySelector('#edu-2-position');
    const edu2FirmEl = document.querySelector('#edu-2-firm');
    const edu2TownEl = document.querySelector('#edu-2-town');
    const edu2PeriodEl = document.querySelector('#edu-2-period');

    const worksTitleEl = document.querySelector('#works-title');

    const work1PositionEl = document.querySelector('#work-1-position');
    const work1FirmEl = document.querySelector('#work-1-firm');
    const work1TownEl = document.querySelector('#work-1-town');
    const work1PeriodEl = document.querySelector('#work-1-period');

    const work2PositionEl = document.querySelector('#work-2-position');
    const work2FirmEl = document.querySelector('#work-2-firm');
    const work2TownEl = document.querySelector('#work-2-town');
    const work2PeriodEl = document.querySelector('#work-2-period');

    const work3PositionEl = document.querySelector('#work-3-position');
    const work3FirmEl = document.querySelector('#work-3-firm');
    const work3TownEl = document.querySelector('#work-3-town');
    const work3PeriodEl = document.querySelector('#work-3-period');

    const work4PositionEl = document.querySelector('#work-4-position');
    const work4FirmEl = document.querySelector('#work-4-firm');
    const work4TownEl = document.querySelector('#work-4-town');
    const work4PeriodEl = document.querySelector('#work-4-period');

    const work5PositionEl = document.querySelector('#work-5-position');
    const work5FirmEl = document.querySelector('#work-5-firm');
    const work5TownEl = document.querySelector('#work-5-town');
    const work5PeriodEl = document.querySelector('#work-5-period');

    const work6PositionEl = document.querySelector('#work-6-position');
    const work6FirmEl = document.querySelector('#work-6-firm');
    const work6TownEl = document.querySelector('#work-6-town');
    const work6PeriodEl = document.querySelector('#work-6-period');

    const work7PositionEl = document.querySelector('#work-7-position');
    const work7FirmEl = document.querySelector('#work-7-firm');
    const work7TownEl = document.querySelector('#work-7-town');
    const work7PeriodEl = document.querySelector('#work-7-period');

    const work8PositionEl = document.querySelector('#work-8-position');
    const work8FirmEl = document.querySelector('#work-8-firm');
    const work8TownEl = document.querySelector('#work-8-town');
    const work8PeriodEl = document.querySelector('#work-8-period');

    const work9PositionEl = document.querySelector('#work-9-position');
    const work9FirmEl = document.querySelector('#work-9-firm');
    const work9TownEl = document.querySelector('#work-9-town');
    const work9PeriodEl = document.querySelector('#work-9-period');

    const work10PositionEl = document.querySelector('#work-10-position');
    const work10FirmEl = document.querySelector('#work-10-firm');
    const work10TownEl = document.querySelector('#work-10-town');
    const work10PeriodEl = document.querySelector('#work-10-period');

    const work11PositionEl = document.querySelector('#work-11-position');
    const work11FirmEl = document.querySelector('#work-11-firm');
    const work11TownEl = document.querySelector('#work-11-town');
    const work11PeriodEl = document.querySelector('#work-11-period');

    const work12PositionEl = document.querySelector('#work-12-position');
    const work12FirmEl = document.querySelector('#work-12-firm');
    const work12TownEl = document.querySelector('#work-12-town');
    const work12PeriodEl = document.querySelector('#work-12-period');

    /* Переборка массива - контент из структуры */
    for (const content of langContent) {
        /* Деструктуризация массива */
        const { lang, headtitle, myposition, myname, contactstitle, techtitle, 
            softtitle, soft1, soft2, soft3, soft4, soft5, soft6,
            langtitle, lang1, lang2, lang3,
            projectstitle, project1, project2,
            addstitle, add1, add2,
            introtitle, introtext,
            edutitle,
            edu1position, edu1firm, edu1town, edu1period,
            edu2position, edu2firm, edu2town, edu2period,
            workstitle,
            work1position, work1firm, work1town, work1period, 
            work2position, work2firm, work2town, work2period, 
            work3position, work3firm, work3town, work3period, 
            work4position, work4firm, work4town, work4period, 
            work5position, work5firm, work5town, work5period, 
            work6position, work6firm, work6town, work6period, 
            work7position, work7firm, work7town, work7period, 
            work8position, work8firm, work8town, work8period, 
            work9position, work9firm, work9town, work9period, 
            work10position, work10firm, work10town, work10period, 
            work11position, work11firm, work11town, work11period, 
            work12position, work12firm, work12town, work12period, 
        } = content;

        /* Если сейчас объект - не текущего языка, то переходим на следующую итерацию */
        if (lang !== newCurrentLang) {
            continue;
        };

        /* Данные текущего языка */
        console.log('lang -', lang);
        console.log('name -', myname);

        /* Присвоение контенту - текста текущего языка */

        /* Название сайта */
        document.title = headtitle;

        /* Содержимое контента */
        mypositionEl.textContent = myposition;
        mynameEl.textContent = myname;
        contactsTitleEl.textContent = contactstitle;
        techTitleEl.textContent = techtitle;

        softTitleEl.textContent = softtitle;
        soft1El.textContent = soft1;
        soft2El.textContent = soft2;
        soft3El.textContent = soft3;
        soft4El.textContent = soft4;
        soft5El.textContent = soft5;
        soft6El.textContent = soft6;

        langTitleEl.textContent = langtitle;
        lang1El.textContent = lang1;
        lang2El.textContent = lang2;
        lang3El.textContent = lang3;

        projectsTitleEl.textContent = projectstitle;
        project1El.textContent = project1;
        project2El.textContent = project2;

        addsTitleEl.textContent = addstitle;
        add1El.textContent = add1;
        add2El.textContent = add2;

        introTitleEl.textContent = introtitle;
        introTextEl.textContent = introtext;

        eduTitleEl.textContent = edutitle;

        edu1PositionEl.textContent = edu1position;
        edu1FirmEl.textContent = edu1firm;
        edu1TownEl.textContent = edu1town;
        edu1PeriodEl.textContent = edu1period;

        edu2PositionEl.textContent = edu2position;
        edu2FirmEl.textContent = edu2firm;
        edu2TownEl.textContent = edu2town;
        edu2PeriodEl.textContent = edu2period;

        worksTitleEl.textContent = workstitle;

        work1PositionEl.textContent = work1position;
        work1FirmEl.textContent = work1firm;
        work1TownEl.textContent = work1town;
        work1PeriodEl.textContent = work1period;

        work2PositionEl.textContent = work2position;
        work2FirmEl.textContent = work2firm;
        work2TownEl.textContent = work2town;
        work2PeriodEl.textContent = work2period;

        work3PositionEl.textContent = work3position;
        work3FirmEl.textContent = work3firm;
        work3TownEl.textContent = work3town;
        work3PeriodEl.textContent = work3period;        
       
        work4PositionEl.textContent = work4position;
        work4FirmEl.textContent = work4firm;
        work4TownEl.textContent = work4town;
        work4PeriodEl.textContent = work4period;    
              
        work5PositionEl.textContent = work5position;
        work5FirmEl.textContent = work5firm;
        work5TownEl.textContent = work5town;
        work5PeriodEl.textContent = work5period; 
                  
        work6PositionEl.textContent = work6position;
        work6FirmEl.textContent = work6firm;
        work6TownEl.textContent = work6town;
        work6PeriodEl.textContent = work6period; 

        work7PositionEl.textContent = work7position;
        work7FirmEl.textContent = work7firm;
        work7TownEl.textContent = work7town;
        work7PeriodEl.textContent = work7period; 

        work8PositionEl.textContent = work8position;
        work8FirmEl.textContent = work8firm;
        work8TownEl.textContent = work8town;
        work8PeriodEl.textContent = work8period; 

        work9PositionEl.textContent = work9position;
        work9FirmEl.textContent = work9firm;
        work9TownEl.textContent = work9town;
        work9PeriodEl.textContent = work9period; 

        work10PositionEl.textContent = work10position;
        work10FirmEl.textContent = work10firm;
        work10TownEl.textContent = work10town;
        work10PeriodEl.textContent = work10period;
        
        work11PositionEl.textContent = work11position;
        work11FirmEl.textContent = work11firm;
        work11TownEl.textContent = work11town;
        work11PeriodEl.textContent = work11period; 

        work12PositionEl.textContent = work12position;
        work12FirmEl.textContent = work12firm;
        work12TownEl.textContent = work12town;
        work12PeriodEl.textContent = work12period; 

    }

    /*  Изменение основного языкового атрибута тега <html lang="uk">  */
    const htmlEl = document.querySelector('html'); 
    console.log(htmlEl);

    /*  setAttribute(name, value) */
    switch (newCurrentLang) {
        case 'ua':
            htmlEl.setAttribute('lang', 'uk');
            break;
        case 'en':
            htmlEl.setAttribute('lang', 'en');
            break;
        case 'ru':
            htmlEl.setAttribute('lang', 'ru');
            break;
    };
}
/* =========================================================================== */


