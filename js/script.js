const names = document.getElementById('names');
const author = document.getElementById('author');
const des = document.getElementById('des');
const year = document.getElementById('year');


const showMovieNames = document.getElementById('show-movie-names');
const showMovieAuthor = document.getElementById('show-movie-author');
const showMovieDes = document.getElementById('show-movie-des');
const showMovieYear = document.getElementById('show-movie-year');


const submitBtn = document.getElementById('submit-btn');

submitBtn.addEventListener('click', function () {
    const nameText = names.value;
    showMovieNames.innerText = nameText;

    const authorText = author.value;
    showMovieAuthor.innerText = authorText;

    const desText = des.value;
    showMovieDes.innerText = desText;

    const yearText = year.value;
    showMovieYear.innerText = yearText;
})

