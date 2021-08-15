const names = document.getElementById('names');
const author = document.getElementById('author');
const des = document.getElementById('des');
const year = document.getElementById('year');


const showMovieNames = document.getElementById('show-movie-names');
const showMovieAuthor = document.getElementById('show-movie-author');
const showMovieDes = document.getElementById('show-movie-des');
const showMovieYear = document.getElementById('show-movie-year');


const submitBtn = document.getElementById('submit-btn');



names.addEventListener('keyup', () => {
    var nameText = names.value
    if (nameText != '') {
        submitBtn.removeAttribute("disabled");


    }



});

submitBtn.addEventListener('click', function () {

    // const nameText = names.value;
    // showMovieNames.innerText = nameText;
    // names.value = '';

    // const authorText = author.value;
    // showMovieAuthor.innerText = authorText;
    // author.value = '';

    // const desText = des.value;
    // showMovieDes.innerText = desText;
    // des.value = '';

    // const yearText = year.value;
    // showMovieYear.innerText = yearText;
    // year.value = '';

    if (names != '' && author != '' && des != '' && year != '') {
        const nameText = names.value;
        showMovieNames.innerText = nameText;
        names.value = '';

        const authorText = author.value;
        showMovieAuthor.innerText = authorText;
        author.value = '';

        const desText = des.value;
        showMovieDes.innerText = desText;
        des.value = '';

        const yearText = year.value;
        showMovieYear.innerText = yearText;
        year.value = '';

        document.getElementById('errorMsg').classList.remove('d-none');


    }




})

