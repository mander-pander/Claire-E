let lessonsLink = document.getElementById('lessons-link');
let compositionLink = document.getElementById('composition-link');
let lessons = document.getElementById('lessons');
let composition = document.getElementById('composition');


function showLessons() {
    lessons.classList.toggle("lessons-container");
}

function showComposition() {
    composition.classList.toggle("composition-container");
}

lessonsLink.addEventListener('click', showLessons);
compositionLink.addEventListener('click', showComposition);
