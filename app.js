let mainNav = document.getElementById('main-navbar');
let lessonsLink = document.getElementById('lessons-link');
let compositionLink = document.getElementById('composition-link');
let formLink = document.getElementById("form-link");
let lessons = document.getElementById('lessons');
let composition = document.getElementById('composition');
let form = document.getElementById('form');

function showNavbar() {
    mainNav.classList.toggle("mainNav");
}


function showLessons() {
    lessons.classList.toggle("lessons-container");
    composition.classList.add("composition-container");
    form.classList.add("form-container");
}

function showComposition() {
    composition.classList.toggle("composition-container");
    lessons.classList.add("lessons-container");
    form.classList.add("form-container");
}

function showForm() {
    form.classList.toggle("form-container");
    lessons.classList.add("lessons-container");
    composition.classList.add("composition-container");
}

lessonsLink.addEventListener('click', showLessons);
compositionLink.addEventListener('click', showComposition);
formLink.addEventListener('click', showForm);
