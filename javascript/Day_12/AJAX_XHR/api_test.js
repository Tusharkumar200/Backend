// const container = document.querySelector('#container');

const request = new XMLHttpRequest();
request.open('GET',"https://restcountries.com/v3.1/all");
request.send();

// to get the response
request.addEventListener('load',function(){
    const [data] = JSON.parse(this.responseText);
    console.log(data);
})