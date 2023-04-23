const jokeText = document.querySelector('.jokes');
const newJokeBtn = document.querySelector('.newJoke');
const tweetBtn = document.querySelector('.tweet-btn');

getJoke();
function getJoke() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'a00a8b4b51msh9b27cab62d74b47p18b9a7jsn20d6d5fcbb26',
            'X-RapidAPI-Host': 'jokes-by-api-ninjas.p.rapidapi.com'
        }
    };

    fetch('https://jokes-by-api-ninjas.p.rapidapi.com/v1/jokes', options)
        .then(response => response.json())
        .then(function (response) {
            console.log(response);
            const joke = response[0]['joke'];
            jokeText.innerText = joke;
            const tweetlink = `https://twitter.com/share?text=${joke}`;
            tweetBtn.setAttribute('href', tweetlink);

        })
        .catch(function (err) {
            tweetBtn.removeAttribute('href');
            console.error(err);
        });

}
newJokeBtn.addEventListener('click', getJoke);