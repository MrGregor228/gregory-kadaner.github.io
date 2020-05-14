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

let myProjects = document.querySelectorAll('.myProjects__text .text__divs .myProjects-text'),
    links = ["https://coralife-books.cf/", "https://kei-evenings.ml/", "https://ithub-coworking.com/", "https://coralife.cf/", "https://vasyl-pilka.ml/"];


for (let i = 0; i < myProjects.length; i++) {    
    myProjects[i].addEventListener('click', function() {
        window.open(`${links[i]}`);
    });
}