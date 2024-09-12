const apikey = 'd97624b43b6c33e5fa7c0bf2aa7b393b';
const apiurl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");

async function weatherupdate(location) {
    const response = await fetch(apiurl + location + `&appid=${apikey}`);
    var data = await response.json();
    console.log(data);
    if(data.cod=='404')
    {
        window.alert('City not found');
    }
   
    const tempDiv = document.getElementById('temp');
    tempDiv.innerHTML = `<h1>${Math.round(data.main.temp) + `° C`}</h1>`
    tempDiv.innerHTML+=`<h1>${data.name}</h1>`

    const humidityDiv = document.getElementById("humidity");
    humidityDiv.innerHTML = `<p>Humidity</p> <h2>${data.main.humidity + '%'}</h2>`; 

    const pressureDiv = document.getElementById("pressure");
    pressureDiv.innerHTML =`<p>Pressure</p> <h3>${data.main.pressure + 'hPa'}</h3>`;

    const windDiv = document.getElementById("wind");
    windDiv.innerHTML = `<p>Wind</p> <h3>${data.wind.speed + 'Km/h'}</h3>`;


    const conditionDiv = document.getElementById("condition");
    conditionDiv.innerHTML =`<p>Weather</p> <h2>${data.weather[0].main}</h2>`;
}

// Initial weather update for Dhaka
weatherupdate("Dhaka");

// Update weather on button click
searchbtn.addEventListener('click', () => {
    weatherupdate(searchbox.value);
});
