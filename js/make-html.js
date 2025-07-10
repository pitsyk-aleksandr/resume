/* Для динамического сайта    */
/* Формирование динамического кода страницы из структур в зависимости от языка и фильтра работ */

/* Импортирование всего контента из файла в одну структуру */
import dbLang from '../data/db-lang.js';
/* Импортирование Обязанностей из файла в структуру */
import dbResponses from '../data/db-responses.js';
/* Импортирование Достижений из файла в структуру */
import dbAchieves from '../data/db-achieves.js';

/* Деструктуризация информации - в массивы структур данных */
const { langs, contents, subtechskills, techskills, softskills, langskills, projects, additions, educations, works } = dbLang;
const { responses } = dbResponses;
const { achieves } = dbAchieves;

/* Переменная - Установка текущего языка */
let currentLang = 0;

/* Переменная фильтрации работ */
let filterWork = "it";

/* Вызов функции изменения текстового контента в зависимости от текущего языка */
changeLang(currentLang);


/* =========================================================================== */
/* Работа по меню - кнопки выбора языков */
/* --------------------------------------------------------------------------- */

/* Поиск объекта - меню с кнопками выбора языков */
const langMenu = document.querySelector('.lang-menu');

/* Добавляем "слушателя событий" на меню с кнопками выбора языка */
langMenu.addEventListener('click', onMenuLangClick);
/* =========================================================================== */


/* =========================================================================== */
/* Работа по фильтру - переключателям видов работ */
/* --------------------------------------------------------------------------- */

/* Поиск объекта - фильтр по работам */
const filterRadioBtn = document.querySelector('.inputs');

/* Добавляем "слушателя событий" на переключатель  */
filterRadioBtn.addEventListener('change', onfilterRadioBtnClick);
/* =========================================================================== */

/* =========================================================================== */
/* Функция - хендлер (при клике на кнопку меню выбора азыков) */
/* --------------------------------------------------------------------------- */
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
    // const langBtnCurrent = document.querySelector('.lang-btn.current');
    // langBtnCurrent.classList.remove('current');
    /* Присваиваем текущей кнопке - класс current */
    // event.target.classList.add('current');

    /* Находим значение атрибута data-lang */
    const nameLang = event.target.dataset.lang;
    console.log('nameLang -', nameLang);

    /* Присваиваем переменной currentLang - значение атрибута data-lang */
    /* Переводим символьное значение атрибута в число */
    currentLang = Number(nameLang);
    console.log('currentLang', currentLang); 
   
    /* Вызов функции изменения текста в зависимости от текущего языка */
    changeLang(currentLang);

    return;
};
/* =========================================================================== */


/* =========================================================================== */
// Функция изменения текстового контента на сайте - динамический контент
/* --------------------------------------------------------------------------- */
function changeLang(newCurrentLang) {

     /* Удаление элементов, которые будут переформированы динамически */

    /* section - techskills = Секция ТЕХНИЧЕСКИЕ НАВЫКИ */  
    const sectionTechskillsEl = document.querySelector('.section.tech-skills');
    if (sectionTechskillsEl) {
        sectionTechskillsEl.remove();
    };

    const sectionLangskillsEl = document.querySelector('.section.lang-skills');
    if (sectionLangskillsEl) {
        sectionLangskillsEl.remove();
    };
    
    const sectionSoftskillsEl = document.querySelector('.section.soft-skills');
    if (sectionSoftskillsEl) {
        sectionSoftskillsEl.remove();
    };
    
    const sectionAdditionsEl = document.querySelector('.section.additions');
    if (sectionAdditionsEl) {
        sectionAdditionsEl.remove();
    };
    
    /* Поиск всех элементов с проектами в списке*/
    const itemProjectsEls = document.querySelectorAll('.item.project');
    if (itemProjectsEls) {
        /* Удаление всех элементов li class="item project" */
        for (const element of itemProjectsEls) {
         element.remove();
        };
    };

    /* Поиск всех элементов с работами в списке*/
    const itemWorkEls = document.querySelectorAll('.item.work');
    if (itemWorkEls) {
        /* Удаление всех элементов li class="item work" */
        for (const element of itemWorkEls) {
        element.remove();
        };
    };

    /* Поиск всех элементов с образованиями в списке*/
    const itemEduEls = document.querySelectorAll('.item.education');
    if (itemEduEls) {
        /* Удаление всех элементов li class="item education" */
        for (const element of itemEduEls) {
            element.remove();
        };
    };

        

    /* ================================================================================================ */
    /* Фильтрация массива структур по текущему языку (кроме techskills) - в отфильтрованные массивы */
    const contentsLang = contents.filter(content => content.lang_id === newCurrentLang);
    console.log('contentsLang ', contentsLang[0]);

    /* Технические навыки присваиваются без сортировки массива по текущему языку */
    const techskillsLang = techskills;
    console.log('techskillsLang', techskillsLang);

    const softskillsLang = softskills.filter(softskill => softskill.lang_id === newCurrentLang);
    console.log('softskillsLang', softskillsLang);

    const langskillsLang = langskills.filter(langskill => langskill.lang_id === newCurrentLang);
    console.log('langskillsLang', langskillsLang);

    const projectsLang = projects.filter(project => project.lang_id === newCurrentLang);
    console.log('projectsLang', projectsLang);

    const additionsLang = additions.filter(addition => addition.lang_id === newCurrentLang);
    console.log('additionsLang', additionsLang);

    const educationsLang = educations.filter(edu => edu.lang_id === newCurrentLang);
    console.log('educationsLang', educationsLang);

    const worksLang = works.filter(work => work.lang_id === newCurrentLang);
    console.log('worksLang', worksLang);

    const responsesLang = responses.filter(response => response.lang_id === newCurrentLang);
    console.log('responsesLang', responsesLang);

    const achievesLang = achieves.filter(achieve => achieve.lang_id === newCurrentLang);
    console.log('achievesLang', achievesLang);

    /* Деструктуризация основного контента в переменные из массива структуры текущего языка */
    const { lang_id, headtitle, myposition, myname, photoalt, contactstitle, techtitle, langtitle,
        softtitle, addstitle, introtitle, introtext, projectstitle, workstitle,
        filtertitle, filterit, filterall, responsetitle, achievetitle, edutitle,
        titlephoto, titleprint, titleemail, titletelegram, titlelinkedin,  titledetails} = contentsLang[0];

    /* ============================================================================ */
    /* Изменяем - Атрибут <html lang=> */
    /* ---------------------------------------------------------------------------- */
    /*  Изменение основного языкового атрибута тега <html lang="uk">  */
    const htmlEl = document.querySelector('html');
    console.log(htmlEl);

    /*  setAttribute(name, value) */
    switch (newCurrentLang) {
        case 0:
            htmlEl.setAttribute('lang', 'uk');
            break;
        case 1:
            htmlEl.setAttribute('lang', 'en');
            break;
        case 2:
            htmlEl.setAttribute('lang', 'ru');
            break;
    };
    /* ============================================================================ */

    /* ============================================================================ */
    /* Изменяем - Заголовок страницы - <title> </title> в <head> */
    /* ---------------------------------------------------------------------------- */
    /* Название сайта */
    console.log('contentsLang.headtitle', headtitle);
    document.title = headtitle;
    /* ============================================================================ */

    /* ============================================================================ */
    /* Изменяем - Вид кнопки - выбора текущего языка */
    /* ---------------------------------------------------------------------------- */
    /* Ищем кнопку выбора языка с class="current" - классом текущей кнопки выбора языка */
    const langBtnCurrentOld = document.querySelector('.lang-btn.current');
    /* Если есть кнопка с текущим классом */
    if (!null) {
        /* Снимаем класс со старой текущей кнопки выбора языка */
        langBtnCurrentOld.classList.remove('current');
    };
    /* Поиск кнопки с выбором текущего языка */
    const langBtnCurrentNew = document.querySelector(`.lang-btn[data-lang="${newCurrentLang}"]`);
    /* Добавляем на эту кнопку class="current" */
    langBtnCurrentNew.classList.add('current');
    /* ============================================================================ */

    /* ============================================================================ */
    /* Изменяем - в header - Имя и Должность */
    /* ---------------------------------------------------------------------------- */
    /* Поиск элемента по селектору id */
    const mynameEl = document.querySelector('#my-name');
    const mypositionEl = document.querySelector('#my-position');
    /* Изменение контента */
    mynameEl.textContent = myname;
    mypositionEl.textContent = myposition;
    /* ============================================================================ */

    /* ============================================================================ */
    /* Изменяем - Атрибуты alt и title для фотографии */
    /* ---------------------------------------------------------------------------- */
    /* Ищем элемент с тегом img - саму фотографию  */
    const photoEl = document.querySelector('.section .photo');
    /* Изменяем значения атрибутов в зависимости от языка */
    photoEl.setAttribute('alt', `${photoalt}`);
    photoEl.setAttribute('title', `${titlephoto}`);
    /* ============================================================================ */

    /* ============================================================================ */
    /* Изменяем - Атрибут  title для ссылки - email */
    /* ---------------------------------------------------------------------------- */
    /* Ищем элемент - ссылку - email */
    const emailLinkEl = document.querySelector('.link.email');
    /* Изменяем значения атрибутов в зависимости от языка */
    emailLinkEl.setAttribute('title', `${titleemail}`);
    /* ============================================================================ */

    /* ============================================================================ */
    /* Изменяем - Атрибут  title для ссылки - telegram */
    /* ---------------------------------------------------------------------------- */
    /* Ищем элемент - ссылку - telegram */
    const telegramLinkEl = document.querySelector('.link.telegram');
    /* Изменяем значения атрибутов в зависимости от языка */
    telegramLinkEl.setAttribute('title', `${titletelegram}`);
    /* ============================================================================ */

        /* ============================================================================ */
    /* Изменяем - Атрибут  title для ссылки - linkedin */
    /* ---------------------------------------------------------------------------- */
    /* Ищем элемент - ссылку - linkedin */
    const linkedinLinkEl = document.querySelector('.link.linkedin');
    /* Изменяем значения атрибутов в зависимости от языка */
    linkedinLinkEl.setAttribute('title', `${titlelinkedin}`);
    /* ============================================================================ */

    /* ============================================================================ */
    /* Изменяем - Атрибут  title для кнопки - Детали */
    /* ---------------------------------------------------------------------------- */
    /* Ищем элемент - кнопку - Детали */
    // const detailsBtnEl = document.querySelector('.btn-details');
    /* Изменяем значения атрибутов в зависимости от языка */
    // detailsBtnEl.setAttribute('title', `${titledetails}`);
    /* ============================================================================ */

    /* ============================================================================ */
    /* Изменяем - Атрибут  title для кнопки - Печать */
    /* ---------------------------------------------------------------------------- */
    /* Ищем элемент - кнопку - Печать */
    const btnPrintEl = document.querySelector('.btn-print');
    /* Изменяем значения атрибутов в зависимости от языка */
    btnPrintEl.setAttribute('title', `${titleprint}`);
    /* ============================================================================ */

    /* ============================================================================ */
    /* Изменяем - Название блока Контакты */
    /* ---------------------------------------------------------------------------- */
    const contactsTitleEl = document.querySelector('#contacts-title');
    contactsTitleEl.textContent = contactstitle;
    /* ============================================================================ */


    /* ============================================================================ */
    /* Формируем динамический HTML в зависимости от языка */
    /* ---------------------------------------------------------------------------- */
    /* Метод insertAdjacentHTML() */
    /* Сначала формирует весь HTML, а затем один раз вставляем в DOM */
    /* ---------------------------------------------------------------------------- */

    /* ЛЕВАЯ сторона сайта */
    const sideLeftEl = document.querySelector('.side-left');

   
    /* section - techskills */
    /* Секция ТЕХНИЧЕСКИЕ НАВЫКИ */
    /* Простановка уровней навыков (skill) в зависимости от указанного в БД (или в структуре) */

    /* Переменная для формирования левой стороны */
    let markUpSideLeft = ``;

    /* Переменная для формирования списков */ 
    let list = ``;
    
    /* Переменная для формирования типов технических навыков */ 
    let markUpSubTech = '';

    /* Цикл по типам технических навыков*/
    for (const subtechskill of subtechskills) {
        console.log(subtechskill);

        /* Фильтрация навыков по типам */
        let techskillsSub = techskills.filter(techskill => techskill.subtechskill_id === subtechskill.subtechskill_id);
            console.log(techskillsSub);
        for (const techskill of techskillsSub) {
            console.log(techskill.name);
            let item = `
                <li class="item">
                    <p class="text-big">${techskill.name}</p>
                    <!-- Блок с уровнем знаний. Уровень навыка определяется дополнительным классом class="level-4" -->
                    <div class="levels level-${techskill.level}">
                        <div class="level one"></div>
                        <div class="level two"></div>
                        <div class="level three"></div>
                        <div class="level four"></div>
                        <div class="level five"></div>
                    </div>
                </li>
            `;
            list = list + item;
        }

        markUpSubTech = markUpSubTech +
        `<!-- Под-Секция ТЕХНИЧЕСКИЕ НАВЫКИ -->
        <div class="subsection">
        <h4 class="text-title-subsection">${subtechskill.name}</h4>
            <ul class="list">`
                + list +
            `</ul >
        </div>`; 

        /* Обнуляем значение Переменной для формирования списков */ 
        list = ``;
        
    }

    markUpSideLeft = markUpSideLeft +
        `<!-- Секция ТЕХНИЧЕСКИЕ НАВЫКИ -->
        <section class="section tech-skills">
            <h3 id="tech-title" class="text-title-section">${techtitle}</h3>`
                + markUpSubTech +
            `</section>`;          

        
    /* section - langskills */
    /* Секция ЗНАНИЕ ЯЗЫКОВ */

    list = ``;
    for (const langskill of langskillsLang) {
        let item = `
            <li class="item">
                <p class="text-big">${langskill.name}</p>
                <!-- Блок с уровнем знаний. Уровень навыка определяется дополнительным классом class="level-4" -->
                <div class="levels level-${langskill.level}">
                    <div class="level one"></div>
                    <div class="level two"></div>
                    <div class="level three"></div>
                    <div class="level four"></div>
                    <div class="level five"></div>
                </div>
            </li>
        `;
        list = list + item;
    };

    markUpSideLeft = markUpSideLeft +
        `<!-- Секция ЗНАНИЕ ЯЗЫКОВ -->
        <section class="section lang-skills">
            <h3 id="lang-title" class="text-title-section">${langtitle}</h3>
            <ul class="list">`
                + list +
            `</ul >
        </section>`;

    
    /* section - softskills */
    /* Секция ЛИЧНЫЕ КАЧЕСТВА */              

    list = ``;
    for (const softskill of softskillsLang) {
        let item = `
            <li class="item">
                <p id="soft-1" class="text-big">${softskill.name}</p>
            </li>
        `;
        list = list + item;
    };

    markUpSideLeft = markUpSideLeft +
        `<!-- Секция ЛИЧНЫЕ КАЧЕСТВА -->
        <section class="section soft-skills">
            <h3 id="soft-title" class="text-title-section">${softtitle}</h3>
            <ul class="list">`
                + list +
            `</ul >
        </section>`;   


    /* section - additions */
    /* Секция - Дополнительная информация */

    /* СЕКЦИЯ - НЕ ФОРМИРУЕТСЯ - закомментирована !!! */
               
    list = ``;
    for (const addition of additionsLang) {
        let item = `
        <li class="item">
            <p id="addition-1" class="text-small">${addition.name}</p>
        </li>
        `;
        list = list + item;
    };

    markUpSideLeft = markUpSideLeft +
        `<!-- Секция - Дополнительная информация -->
        <section class="section additions">
            <h3 id="additions-title" class="text-title-section">${addstitle}</h3>
            <ul class="list">`
                + list +
            `</ul >
        </section>`;


    /* Вставляем в DOM динамически сформированный остаток ЛЕВОЙ стороны*/
    sideLeftEl.insertAdjacentHTML("beforeend", markUpSideLeft);

    /* ПРАВАЯ сторона сайта */
    // const sideRightEl = document.querySelector('.side-right');
    

    /* section - intro */
    /* Секция ПРЕДСТАВЛЕНИЕ - коротко обо мне */

    /* Изменяем - Название блока ПРЕДСТАВЛЕНИЕ */
    const introTitleEl = document.querySelector('#intro-title');
    introTitleEl.textContent = introtitle;
    /* Изменяем - Содержание блока ПРЕДСТАВЛЕНИЕ */
    const introTextEl = document.querySelector('#intro-text');
    introTextEl.textContent = introtext;


    /* section - projects */
    /* Секция ПРОЕКТЫ */

    /* Изменяем - Название блока ПРОЕКТЫ */

    const projectsTitleEl = document.querySelector('#projects-title');
    projectsTitleEl.textContent = projectstitle;
    /* ============================================================================ */
        
    /* Поиск блока со списком проектов */
    const listProjectsEl = document.querySelector('.list.projects');
    
    let listProjects = ``;  
    
    for (const project of projectsLang) {
        let item = `
        <!-- Ссылка на проект. Открывается в новом окне -->
        <li class="item project">
          <p id="project-1" class="text-small">${project.name}</p>
          <a
            href="${project.link_url}"
            target="_blank"
            class="link text-small"
            >${project.link_name}</a
          >
        </li>
        `;
        listProjects = listProjects + item;
    };

  
    /* Вставляем в DOM динамически сформированный список проектов*/
    listProjectsEl.insertAdjacentHTML("beforeend", listProjects);


    /* ============================================================================ */
    /* section - works */
    /* Секция ОПЫТ РАБОТЫ */
    /* ---------------------------------------------------------------------------- */

    /* Изменяем - Название блока ОПЫТ РАБОТЫ */
    const worksTitleEl = document.querySelector('#works-title');
    worksTitleEl.textContent = workstitle;
    /* ============================================================================ */
    /* Изменяем - Название элементов по фильтрации */
    const filterTitleEl = document.querySelector('#filter-title');
    filterTitleEl.textContent = filtertitle;
    const filterItEl = document.querySelector('#filter-it');
    filterItEl.textContent = filterit;
    const filterAllEl = document.querySelector('#filter-all');
    filterAllEl.textContent = filterall;
    /* ============================================================================ */
    
    
    /* Вызов функции - Формирование списка работ в зависимости от фильтра */
    changeFilterWork(filterWork, worksLang, responsesLang, achievesLang, responsetitle, achievetitle, titledetails);


    /* section - educations */
    /* ! Секция ОБРАЗОВАНИЕ  */
    /* Изменяем - Название блока ОБРАЗОВАНИЕ */

    const educationsTitleEl = document.querySelector('#edu-title');
    educationsTitleEl.textContent = edutitle;
    /* ============================================================================ */
    
    /* Поиск блока со списком образований */
    const listEducationsEl = document.querySelector('.list.educations');

    let listEducations = ``;    
    for (const education of educationsLang) {
        let item = `
            <li class="item education">
                <p id="edu-1-position" class="text-big">${education.position}</p>
                <div class="firm-town">
                  <p id="edu-1-firm" class="text-medium">${education.firm}</p>
                  <p id="edu-1-town" class="text-small">${education.town}</p>
                </div>
                <p id="edu-1-period" class="text-small">${education.period}</p>
            </li> `;
        
        listEducations = listEducations + item;
    };

    /* Вставляем в DOM динамически сформированный список образований*/
    listEducationsEl.insertAdjacentHTML("beforeend", listEducations);


};
/* =========================================================================== */


/* =========================================================================== */
/* Функция формирования списка работ в зависимости от установленного фильтра и языка*/
/* --------------------------------------------------------------------------- */
function changeFilterWork(newFilter, worksLang, responsesLang, achievesLang, responsetitle, achievetitle, titledetails ) {

    let worksFilter = [];

    if (newFilter==="it") {
        worksFilter = worksLang.filter(work => work.work_it === true);
    } else {
        worksFilter = worksLang.filter(work => (work.work_it === true || work.work_it === false));
    }

    console.log('worksFilter', worksFilter);

        /* Поиск блока со списком работ */
        const listWorksEl = document.querySelector('.list.works');

        let listWorks = ``;    
        for (const work of worksFilter) {
            let item = `
                <li class="item work">
                    <p class="text-big">${work.position}</p>
                    <div class="firm-town">
                        <p class="text-medium">${work.firm}</p>
                        <p class="text-small">${work.town}</p>
                    </div>
                    <div class="period-btn">`;
            
            if (work.show_btn) {
                item = item + `
                        <button type="button" data-work="" class="btn-details text-btn" title="${titledetails}"></button> `;
            } else {
                item = item + `
                        <button type="button" hidden data-work="" class="btn-details text-btn" title="${titledetails}"></button> `;
            };
            
            item = item + `
                        <p class="text-small">${work.period}</p>
                    </div>
                    <div class="details"> `;
    
            /* ------------------------------------------------------------------------------------------------ */
            /* Обязанности */
            /* Фильтрация по работе (work_id или work_number) */
            const responsesLangWork = responsesLang.filter(response => response.work_number === work.work_number);
    
            /* Если есть отметка о показе обязанностей и есть сами обязанности в списке */
            if (work.show_response && responsesLangWork.length>0 ) {
                let itemList = ``;
                
                for (const response of responsesLangWork) {
                    itemList = itemList + `<li class="response-item text-small">${response.name}</li>`;
                }
                item = item + 
                        `<div class="respons">
                            <h4 class="response-title text-medium">${responsetitle}</h4>
                             <ul class="list response">`
                        + itemList +         
                        `   </ul>
                        </div> `;
            };
            /* ------------------------------------------------------------------------------------------------ */
    
            /* ------------------------------------------------------------------------------------------------ */
            /* Достижения */
            /* Фильтрация по работе (work_id или work_number) */
            const achievesLangWork = achievesLang.filter(achieve => achieve.work_number === work.work_number);
            /* Если есть отметка о показе достижений и есть сами Достижения в списке */
            if (work.show_achieve && achievesLangWork.length>0) {
                let itemList = ``;
                
                for (const achieve of achievesLangWork) {
                    itemList = itemList + `<li class="achieve-item text-small">${achieve.name}</li>`;
                }
                item = item + 
                        `<div class="achieve">
                            <h4 class="achieve-title text-medium">${achievetitle}</h4>
                             <ul class="list achieve">`
                        + itemList +         
                        `   </ul>
                        </div> `;
            };
            /* ------------------------------------------------------------------------------------------------ */
            
            item = item +
                `   </div>
                </li > `;
                
                listWorks = listWorks + item;
        };
    
        /* Вставляем в DOM динамически сформированный список работ*/
        listWorksEl.insertAdjacentHTML("beforeend", listWorks);
    
    

}
/* =========================================================================== */


/* =========================================================================== */
/* Функция - хендлер - изменение значения радиокнопки  */
/* --------------------------------------------------------------------------- */
function onfilterRadioBtnClick(event) { 
    console.log(event.target.value);
    filterWork = event.target.value;
    /* Вызов функции изменения текстового контента  */
    changeLang(currentLang)
};
/* =========================================================================== */
