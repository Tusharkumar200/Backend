
//   https://icanhazdadjoke.com/
// https://goweather.herokuapp.com/weather/us


/*
<div id="joke" class="joke">
            Awesome Joke is loading...
        </div>
        <button id="jokeBtn" class="btn">Next Joke</button>
    </div>

    */

// promises in java script

const jokes = document.getElementById('joke');
const jokeBtn = document.querySelector('#jokeBtn');

const generateJokes = () => 
{

    const setHeader = {
        Headers: {
            Accept: "application/json"
        }
    }

    fetch('https://goweather.herokuapp.com/weather/us', setHeader)
        .then((res) => res.json())
            .then((data) => {
                jokes.innerHTML = data.wind;
                
            })
            // .catch((error) => {
            //     console.log(error);
            // })

}
    jokeBtn.addEventListener('click',generateJokes)
generateJokes();