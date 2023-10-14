
//   https://icanhazdadjoke.com/
// https://goweather.herokuapp.com/weather/us


// promises in java script

// Async Await with error handling
const jokes = document.getElementById('joke');
const jokeBtn = document.querySelector('#jokeBtn');

const generateJokes = () => 
{

    try{
        const setHeader = {
           headers:{
            Accept: "application/json"
           }
        }
        const res = await fetch('https://goweather.herokuapp.com/weather/us',setHeader)
        const data = await res.json();
        jokes.innerHTML = data.wind;
    }catch(error){
        console.log(error);
    }
    
}
    jokeBtn.addEventListener('click',generateJokes)
generateJokes();