let date = new Date()
let day = date.getDate();
let month = date.getMonth()+1;
let year = date.getFullYear();

let CurrentDate = `${day}.${month}.${year}.`;

document.querySelector('.weather-date').textContent = CurrentDate; 

let cities = {
756135:'Warsaw',    
1006884:'London',
625144: "Minsk",
5128581:'New York',
593116:'Vilnius',
1816670:'Beijing',
2968815:'Paris',    
}

let request = {
url:"http://api.openweathermap.org/data/2.5/",
apikey:'2b1b64f154a144043c44fbc4af058458',
}

for(let key in cities){
let select = document.querySelector('.country_input');
let option = document.createElement('option');
option.value = key;
option.textContent = cities[key];
select.append(option); 
}


function getWeather() {
let idcity = document.querySelector('#city').value;    
fetch(`${request.url}weather?id=${idcity}&units=metric&APPID=${request.apikey}`)
.then((response) => response.json())
.then(showWeather);
}
//then((response) => console.log(response));

function showWeather ({ name, weather, wind, main }) {
document.querySelector('.current-city').textContent = name;
document.querySelector('.temperature-number').textContent = Math.floor(main.temp);
document.querySelector('.wind-number').textContent = wind.speed;
document.querySelector('.pressure-number').textContent = main.pressure;
document.querySelector('.humidity-number').textContent = main.humidity;
document.querySelector('.cloud-number').textContent =  weather[0]["description"];
document.querySelector('.cloud-img').innerHTML = `<img src="https://openweathermap.org/img/wn/${weather[0]["icon"]}@2x.png"> `
}

document.querySelector('#city').onchange = getWeather;