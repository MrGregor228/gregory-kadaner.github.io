// Добавление класса при нахождении совпадения в textContent

let langObj = {
    html: "html-color",
    css: "css-color",
    js: "js-color",
    jquery: "jquery-color",
    scss: "scss-color"
};

let allSpans = document.getElementsByTagName('span');
console.log(allSpans);
for (let i = 0; i < allSpans.length; i++) {        
    if (allSpans[i].textContent == 'html') {
        allSpans[i].classList.add(langObj.html);
    } else if (allSpans[i].textContent == 'css') {
        allSpans[i].classList.add(langObj.css);
    } else if (allSpans[i].textContent == 'js') {
        allSpans[i].classList.add(langObj.js);
    } else if (allSpans[i].textContent == 'jQuery') {
        allSpans[i].classList.add(langObj.jquery);
    }  else if (allSpans[i].textContent == 'scss') {
        allSpans[i].classList.add(langObj.scss);
    }        
}

// Переадресация по клику на определённый проект

let myProjects = document.querySelectorAll('.myProjects__text .text__divs .myProjects-text'),
    links = ["https://coralife-books.cf/", "https://kei-evenings.ml/", "https://ithub-coworking.com/", "https://coralife.cf/", "https://vasyl-pilka.ml/"];


for (let i = 0; i < myProjects.length; i++) {    
    myProjects[i].addEventListener('click', function() {
        window.open(`${links[i]}`);
    });
}

// Валидация формы

let emailInput = document.querySelector('input[type="email"]'),
    nameInput = document.querySelector('input[name="Имя"]'),
    submitButton = document.querySelector('input[type="submit"]'),
    fieldEmail = document.querySelector('.email'),
    fieldName = document.querySelector('.fio'),
    form = document.querySelector('.myForm'),
    shower = document.getElementById('shower');

function unfilledField(a) {
   a.classList.add('unFilledField');
}
function filledField(b) {
   b.classList.remove('unFilledField');
}

function submitButtonLock() {
   submitButton.setAttribute('disabled','disabled');
}

function submitButtonUnblock() {
   submitButton.removeAttribute('disabled','disabled');
}

function checkFields() {
   if(emailInput.value.indexOf('@') == -1 || emailInput.value.length <= 5 ) {
      unfilledField(fieldEmail);
      submitButtonLock();
      emailInput.placeholder = "Необходимо заполнить поле корректно!";
   } else {
      filledField(fieldEmail);
      submitButtonUnblock();   
      emailInput.placeholder = "";
   } 
   
   if (nameInput.value.length <= 6) {
       unfilledField(fieldName);
      submitButtonLock();
      nameInput.placeholder = "Необходимо заполнить поле корректно!";
   } else {
       filledField(fieldName);
      submitButtonUnblock();
      nameInput.placeholder = "";
   }
}

function hideshow() {
	form.style.cssText="animation:hierrr 1s 1 linear;display:none;";
	shower.style.cssText="display:block;animation:showwww 1s 1 linear;";
}

// Show modals
let modalWindow = document.querySelector('.modal-window');

function closeModal() {
    modalWindow.style.opacity = 0 ;
    setTimeout(function () {
        modalWindow.style.display = "none";
    },500);    
}

function showModal() {  
    
    modalWindow.style.display = "flex";
    setTimeout(function () {
        modalWindow.style.opacity = 1;
    },100); 
}