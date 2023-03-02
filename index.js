
//Создание бургер-меню
const burgerBtn = document.querySelector('.burger_btn');
const headerNavigation = document.querySelector('.header_navigation');
const headerListLinks = document.querySelectorAll('.header_list_link');
const welcome = document.querySelector('.welcome');
const about = document.querySelector('.about');


if (burgerBtn) {
//Добавление обработчика событий при щелчке мыши по кнопке бургера
    burgerBtn.addEventListener("click",function(){
        document.body.classList.toggle('_lock');
        burgerBtn.classList.toggle('_active');
        headerNavigation.classList.toggle('_active');
    });

}

// Скрытие ссылок при щелчке на них
if (headerListLinks.length > 0) 
    headerListLinks.forEach(headerLink => {
        headerLink.addEventListener("click", onBurgerLinkClick);
        });

        function onBurgerLinkClick() {
            
        if (burgerBtn.classList.contains('_active')) {
            document.body.classList.remove('_lock');
            burgerBtn.classList.remove('_active');
            headerNavigation.classList.remove('_active');
        } 
        }   
    // Скрытие бургер-меню при щелчке вне бургера

        welcome.addEventListener('click', function(){
            document.body.classList.remove('_lock');
            burgerBtn.classList.remove('_active');
            headerNavigation.classList.remove('_active');
        });

        about.addEventListener('click', function(){
            document.body.classList.remove('_lock');
            burgerBtn.classList.remove('_active');
            headerNavigation.classList.remove('_active');
        });

//Аккордеон------------------------------------------------------------
let accordeonItemHeader = document.querySelectorAll('.accordeon_item_header');
let accordeonItemContent = document.querySelectorAll('.accordeon_item_content');
let accordeonBtn = document.querySelectorAll('.accordeon_button');

for (let i=0; i<accordeonItemHeader.length; i++) {
    accordeonItemHeader[i].addEventListener('click', function(){
        if(!(this.classList.contains('_active_accordeon'))) {
            for (let i=0; i<accordeonItemHeader.length; i++) {
                accordeonItemHeader[i].classList.remove('_active_accordeon');
            }
            this.classList.add('_active_accordeon');
        } else {
            this.classList.remove('_active_accordeon');
        }
    })
}


//-Кнопки с блюром карточек----------------------------------------------------------------------------------------------------------------------------------
//Выбор сразу всех кнопок
const serviceButtons = document.querySelectorAll('.service_button');
//Выбор всех карточек
const serviceFigures = document.querySelectorAll('.service_figure')
//Выбор самих кнопок отдельно:
const serviceButtonGarden = document.querySelector('.service_button_gardens');
const serviceButtonLawn = document.querySelector('.service_button_lawn');
const serviceButtonPlanting = document.querySelector('.service_button_planting');
//Выбор картинок соответственно:
const serviceFigureGarden = document.querySelectorAll('.service_figure_garden_care');
const serviceFigureLawn = document.querySelectorAll('.service_figure_lawn_care');
const serviceFigurePlanting = document.querySelectorAll('.service_figure_planting');

let arrServiceButtons = [serviceButtonGarden, serviceButtonLawn, serviceButtonPlanting]; 
let arrServiceCards = [serviceFigureGarden, serviceFigureLawn, serviceFigurePlanting];



//если нажата кнопка Gardens
if(serviceButtonGarden.addEventListener('click', function(){
    serviceButtonGarden.classList.toggle('_active_service_button') 
    serviceButtonLawn.classList.toggle('service_disabled_button')
    serviceButtonPlanting.classList.toggle('service_disabled_button')
    {
        for (i=0; i<serviceFigureLawn.length; i++){
            serviceFigureLawn[i].classList.toggle('blur');
        };
        for (i=0; i<serviceFigurePlanting.length; i++) {
            serviceFigurePlanting[i].classList.toggle('blur');
        };
        for (i=0; i<serviceFigureGarden.length; i++) {
            serviceFigureGarden[i].classList.remove('blur');
      };
    } 
   })    
);

//если нажата кнопка Lawn
if(serviceButtonLawn.addEventListener('click', function(){
   serviceButtonLawn.classList.toggle('_active_service_button') 
   serviceButtonGarden.classList.toggle('service_disabled_button') 
    serviceButtonPlanting.classList.toggle('service_disabled_button')
   {
        for (i=0; i<serviceFigureGarden.length; i++){
            serviceFigureGarden[i].classList.toggle('blur');
        };
        for (i=0; i<serviceFigurePlanting.length; i++) {
            serviceFigurePlanting[i].classList.toggle('blur');
        };
        for (i=0; i<serviceFigureLawn.length; i++) {
            serviceFigureLawn[i].classList.remove('blur');
        };
    } 
    })    
);

//если нажата кнопка Planting
if(serviceButtonPlanting.addEventListener('click', function(){
    serviceButtonPlanting.classList.toggle('_active_service_button')
    serviceButtonLawn.classList.toggle('service_disabled_button') 
    serviceButtonGarden.classList.toggle('service_disabled_button') 
    {
        for (i=0; i<serviceFigureGarden.length; i++){
            serviceFigureGarden[i].classList.toggle('blur');
        };
        for (i=0; i<serviceFigureLawn.length; i++) {
            serviceFigureLawn[i].classList.toggle('blur');
        };
        for (i=0; i<serviceFigurePlanting.length; i++) {
            serviceFigurePlanting[i].classList.remove('blur');
        };
   } 
    })    
);


//--Select--------------------------------------------------------------------------------------------------------------------------------
const contactImg = document.querySelector('.contacts_img');

let select = function () {
    let selectHeader = document.querySelectorAll('.select_header');
    let selectItem = document.querySelectorAll('.select_item');

//При клике на шапку селекта добавляю активный класс самой шапке и выпадающему списку городов
    selectHeader.forEach(item => {
        item.addEventListener('click', function(){
            this.classList.add('_active_select');
            this.parentElement.classList.toggle('_active_select');
        })
    });

//При клике на каждый город меняю название в шапке
    selectItem.forEach(item => {
        item.addEventListener('click', function(){
            let currentText = this.closest('.contacts_select').querySelector('.select_current');
            let text = this.innerText;
            let select = this.closest('.contacts_select');
            currentText.innerText = text;
            select.classList.remove('_active_select');
            contactImg.classList.add('active_women');
        })
    });
};

select();

//Клик на Canandaigua
const canandaiguaId = document.querySelector('#canandaigua');
const canandaiguaClass = document.querySelector('.canandaigua');
canandaiguaId.addEventListener('click', function(){
    sherrillClass.classList.remove('_active_city');
    newYorkClass.classList.remove('_active_city');
    yonkersClass.classList.remove('_active_city');
    canandaiguaClass.classList.add('_active_city');
})
//Клик на New York
const newYorkId = document.querySelector('#newYork');
const newYorkClass = document.querySelector('.new_york');
newYorkId.addEventListener('click', function(){
    sherrillClass.classList.remove('_active_city');
    yonkersClass.classList.remove('_active_city');
    canandaiguaClass.classList.remove('_active_city');
    newYorkClass.classList.add('_active_city');
})
//Клик на Yonkers
const yonkersId = document.querySelector('#yonkers');
const yonkersClass = document.querySelector('.yonkers');
yonkersId.addEventListener('click', function(){
    sherrillClass.classList.remove('_active_city');
    newYorkClass.classList.remove('_active_city');
    canandaiguaClass.classList.remove('_active_city');
    yonkersClass.classList.add('_active_city');
})
//Клик на Sherrill
const sherrillId = document.querySelector('#sherrill');
const sherrillClass = document.querySelector('.sherrill');
sherrillId.addEventListener('click', function(){
    newYorkClass.classList.remove('_active_city');
    canandaiguaClass.classList.remove('_active_city');
    yonkersClass.classList.remove('_active_city');
    sherrillClass.classList.add('_active_city');
})

//----------------------------------------------------------------------------------------------------------------------------------------------------------


    console.log(`

        Score: 105/125 => Общая оценка 100 баллов

        [30/50] При нажатии на кнопки:Gargens,Lawn,Planting происходит смена фокуса на услугах в разделе service +50
   
        + При выборе одной услуги (нажатии одной кнопки), остальные карточки услуг принимают эффект blur, выбранная услуга остается неизменной + 20
    
        - Пользователь может нажать одновременно две кнопки услуги, тогда эта кнопка тоже принимает стиль активной и карточки с именем услуги выходят из эффекта blur. При этом пользователь не может нажать одновременно все три кнопки услуг. +20
        
        + Анимации плавного перемещения кнопок в активное состояние и карточек услуг в эффект blur +10
    
        [50/50] + Accordion в секции prices реализация 3-х выпадающих списков об услугах и ценах + 50
    
            + При нажатии на dropdown кнопку появляется описание тарифов цен в соответствии с макетом. Внутри реализована кнопка order, которая ведет на секцию contacts, при нажатии на нее Accordion все еще остается открытым. +25
    
            + Пользователь может самостоятельно закрыть содержимое нажав на кнопку dropup, но не может одновременно открыть все тарифы услуг, при открытии нового тарифа предыдущее автоматически закрывается. +25
        
        [25/25] В разделе contacts реализован select с выбором городов +25
    
        + В зависимости от выбора пользователя появляется блок с адресом и телефоном офиса в определенном городе +15
    
        + При нажатии на кнопку Call us реализован вызов по номеру, который соответствует выбранному городу +10
    `)