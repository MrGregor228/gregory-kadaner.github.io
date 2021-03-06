// Добавление класса при нахождении совпадения в textContent

let langObj = {
    html: "html-color",
    css: "css-color",
    js: "js-color",
    jquery: "jquery-color",
    scss: "scss-color",
    ajax: "ajax-color"
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
    } else if (allSpans[i].textContent == 'scss') {
        allSpans[i].classList.add(langObj.scss);
    } else if (allSpans[i].textContent == 'AJAX') {
        allSpans[i].classList.add(langObj.ajax);
    }
}

// Переадресация по клику на определённый проект

let myProjects = document.querySelectorAll('.myProjects__text .text__divs .myProjects-text'),
    links = ["https://coralife-books.cf/", "https://kei-evenings.ml/", "https://ithub-coworking.com/", "https://coralife.cf/", "https://vasyl-pilka.ml/", "https://gregorys-delivery-food.tk"];


for (let i = 0; i < myProjects.length; i++) {
    myProjects[i].addEventListener('click', function () {
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
    submitButton.setAttribute('disabled', 'disabled');
}

function submitButtonUnblock() {
    submitButton.removeAttribute('disabled', 'disabled');
}

function checkFields() {
    if (emailInput.value.indexOf('@') == -1 || emailInput.value.length <= 10 || emailInput.value == '' || emailInput.value == ' ') {
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
    form.style.cssText = "animation:hierrr 1s 1 linear;display:none;";
    shower.style.cssText = "display:block;animation:showwww 1s 1 linear;";
}

// Show modals
let modalWindow = document.querySelector('.modal-window');

function closeModal() {
    modalWindow.style.opacity = 0;
    setTimeout(function () {
        modalWindow.style.display = "none";
    }, 500);
}

function showModal() {

    modalWindow.style.display = "flex";
    setTimeout(function () {
        modalWindow.style.opacity = 1;
    }, 100);
}

// Блокировка F12 и ПКМ, создание сообщений


let fisrtToast = `<div class="toast">
                    <div class="toast-header">
                        <strong class="mr-auto">Внимание!</strong>
                        <button class="colse-toast">&times;</button>
                    </div>
                    <div class="toast-body">
                        Во избежание плагиата, на сайте заблокированы такие сочетания клавиш как <code>F12</code>, и вызов контекстного меню на мобильных устройствах и компьютерах с помощью (<code>ПКМ</code>)!
                    </div>
                  </div>`,
    warningsContainer = document.querySelector('.warnings .chat'),
    warningsMainCont = document.querySelector('.warnings');


document.body.addEventListener('click', function (event) {
    let target = event.target;
    if (target.closest('.colse-toast')) {
        target.closest('.toast').style.cssText = "animation: toastGoodBye .3s linear 1 both;";
        setTimeout(function () {
            target.closest('.toast').remove();
        }, 500);
    }

    if (target.closest('.info-panel button')) {
        target.closest('.warnings').style.right = "-100%";
    }

});

function showToast() {
    let toast = document.querySelectorAll('.toast');
    warningsMainCont.style.right = "0px";
    if (!toast[0]) {
        warningsContainer.insertAdjacentHTML('afterbegin', fisrtToast);
    } else {
        warningsContainer.insertAdjacentHTML('afterbegin', `
        <div class="toast">
            <div class="toast-header">
                <strong class="mr-auto">Внимание!</strong>
                <button class="colse-toast">&times;</button>
            </div>
            <div class="toast-body">
                Во избежание плагиата, на сайте заблокированы такие сочетания клавиш как <code>F12</code>, и вызов контекстного меню на мобильных устройствах и компьютерах с помощью (<code>ПКМ</code>)!
            </div>
        </div>`);
    }
}

document.onkeypress = function (event) {
    event = (event || window.event);
    if (event.key == 123) {
        showToast();
        return false;
    }
};

document.onmousedown = function (event) {
    event = (event || window.event);
    if (event.key == 123) {
        showToast();
        return false;
    }
};

document.onkeydown = function (event) {
    event = (event || window.event);
    if (event.key == 123) {
        showToast();
        return false;
    }
};