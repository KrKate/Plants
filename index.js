
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
const buttons = document.querySelectorAll('.service_button');
//Выбор всех карточек
const card = document.querySelectorAll('.service_figure')
//Выбор самих кнопок отдельно:
const serviceButtonGarden = document.querySelector('.service_button_gardens');
const serviceButtonLawn = document.querySelector('.service_button_lawn');
const serviceButtonPlanting = document.querySelector('.service_button_planting');
//Выбор картинок соответственно:
const serviceFigureGarden = document.querySelectorAll('.service_figure_garden_care');
const serviceFigureLawn = document.querySelectorAll('.service_figure_lawn_care');
const serviceFigurePlanting = document.querySelectorAll('.service_figure_planting');


let gardens = false;
let lawn  = false;
let planting = false;


const activeButton = (element) => {
  if (element === buttons[0]) {
    gardens = !gardens;
   } else if (element === buttons[1]) {
    lawn = !lawn;
   } else if (element === buttons[2]){
    planting = !planting;
   }
   if (element === buttons[0] && lawn === true && planting === true && gardens === true) {
    buttons[1].classList.toggle('_active_service_button')
    buttons[2].classList.toggle('_active_service_button')
    planting = !planting;
    lawn = !lawn;
   } else if (element === buttons[1] && lawn === true && planting === true && gardens === true) {
    buttons[0].classList.toggle('_active_service_button')
    buttons[2].classList.toggle('_active_service_button')
    gardens = !gardens;
    planting = !planting;
   } else if (element === buttons[2] && lawn === true && planting === true && gardens === true) {
    buttons[0].classList.toggle('_active_service_button')
    buttons[1].classList.toggle('_active_service_button')
    gardens = !gardens;
    lawn = !lawn;
   }
   return {gardens, lawn, planting};
}

const handleClick = (card) => (event) => {
  const element = event.target;
  activeButton(element);
  element.classList.toggle('_active_service_button');


  const active = activeButton();

  const addBlur = (blurIt) => {
    blurIt.forEach((value) => {
      value.classList.add('blur');
    });
  }
  const removeBlur = (noBlur) => {
    noBlur.forEach((value) => {
      value.classList.remove('blur');
    });
  }

//* add/remove blur
  if (active.gardens === false && active.lawn === false && active.planting === false) {
    removeBlur(card);
  } else if (active.gardens === true && active.lawn === false && active.planting === false) {
    addBlur([card[1], card[2], card[3], card[5]])
    removeBlur([card[0], card[4]]);
  } else if (active.gardens === false && active.lawn === true && active.planting === false) {
    removeBlur([card[2]]);
    addBlur([card[0], card[1], card[3], card[4], card[5]]);
  } else if (active.gardens === true && active.lawn === true && active.planting === false) {
    addBlur([card[1], card[3], card[5]]);
    removeBlur([card[0], card[2], card[4]]);
  } else if (active.gardens === false && active.lawn === false && active.planting === true) {
    addBlur([card[0], card[2], card[4]]);
    removeBlur([card[1], card[3], card[5]]);
  } else if (active.gardens === false && active.lawn === true && active.planting === true) {
    addBlur([card[0], card[4]]);
    removeBlur([card[1], card[2], card[3], card[5]]);
  } else if (active.gardens === true && active.lawn === false && active.planting === true) {
    addBlur([card[2]]);
    removeBlur([card[0], card[1], card[3],card[4], card[5]]);
  }
}


buttons.forEach((button,) => {
  button.addEventListener('click', handleClick(card));
});




// //если нажата кнопка Gardens
// if(serviceButtonGarden.addEventListener('click', function(){
//     serviceButtonGarden.classList.toggle('_active_service_button') 
//     serviceButtonLawn.classList.toggle('service_disabled_button')
//     serviceButtonPlanting.classList.toggle('service_disabled_button')
//     {
//         for (i=0; i<serviceFigureLawn.length; i++){
//             serviceFigureLawn[i].classList.toggle('blur');
//         };
//         for (i=0; i<serviceFigurePlanting.length; i++) {
//             serviceFigurePlanting[i].classList.toggle('blur');
//         };
//         for (i=0; i<serviceFigureGarden.length; i++) {
//             serviceFigureGarden[i].classList.remove('blur');
//       };
//     } 
//    })    
// );

// //если нажата кнопка Lawn
// if(serviceButtonLawn.addEventListener('click', function(){
//    serviceButtonLawn.classList.toggle('_active_service_button') 
//    serviceButtonGarden.classList.toggle('service_disabled_button') 
//     serviceButtonPlanting.classList.toggle('service_disabled_button')
//    {
//         for (i=0; i<serviceFigureGarden.length; i++){
//             serviceFigureGarden[i].classList.toggle('blur');
//         };
//         for (i=0; i<serviceFigurePlanting.length; i++) {
//             serviceFigurePlanting[i].classList.toggle('blur');
//         };
//         for (i=0; i<serviceFigureLawn.length; i++) {
//             serviceFigureLawn[i].classList.remove('blur');
//         };
//     } 
//     })    
// );

// //если нажата кнопка Planting
// if(serviceButtonPlanting.addEventListener('click', function(){
//     serviceButtonPlanting.classList.toggle('_active_service_button')
//     serviceButtonLawn.classList.toggle('service_disabled_button') 
//     serviceButtonGarden.classList.toggle('service_disabled_button') 
//     {
//         for (i=0; i<serviceFigureGarden.length; i++){
//             serviceFigureGarden[i].classList.toggle('blur');
//         };
//         for (i=0; i<serviceFigureLawn.length; i++) {
//             serviceFigureLawn[i].classList.toggle('blur');
//         };
//         for (i=0; i<serviceFigurePlanting.length; i++) {
//             serviceFigurePlanting[i].classList.remove('blur');
//         };
//    } 
//     })    
// );


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

