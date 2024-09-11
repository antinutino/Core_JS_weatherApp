const apikey = 'd97624b43b6c33e5fa7c0bf2aa7b393b';
const apiurl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");

async function weatherupdate(location) {
    const response = await fetch(apiurl + location + `&appid=${apikey}`);
    var data = await response.json();
    console.log(data);

    // Clear previous content before appending new data
    const tempDiv = document.getElementById('temp');
    tempDiv.innerHTML = ''; // Clear the previous temperature
    const newParagraph = document.createElement('h2');
    newParagraph.textContent = Math.round(data.main.temp) + `° C`;
    tempDiv.appendChild(newParagraph);
    
    document.querySelector(".location").innerHTML = data.name;

    // Clear and update humidity
    const humidityDiv = document.getElementById("humidity");
    humidityDiv.innerHTML = '<p>Humidity</p>'; // Reset title and clear previous data
    const humidity = document.createElement('h2');
    humidity.textContent = data.main.humidity + '%';
    humidityDiv.appendChild(humidity);

    // Clear and update pressure
    const pressureDiv = document.getElementById("pressure");
    pressureDiv.innerHTML = ''; // Clear previous pressure
    const pressure = document.createElement('h3');
    pressure.textContent = data.main.pressure + ' Pa';
    pressureDiv.appendChild(pressure);

    // Clear and update wind speed
    const windDiv = document.getElementById("wind");
    windDiv.innerHTML = ''; // Clear previous wind speed
    const wind = document.createElement('h3');
    wind.textContent = data.wind.speed + ' Km/h';
    windDiv.appendChild(wind);

    // Clear and update weather condition
    const conditionDiv = document.getElementById("condition");
    conditionDiv.innerHTML = '';
    const condition = document.createElement('h3');
    condition.textContent = data.weather[0].main;
    conditionDiv.appendChild(condition);
}

// Initial weather update for Dhaka
weatherupdate("Dhaka");

// Update weather on button click
searchbtn.addEventListener('click', () => {
    weatherupdate(searchbox.value);
});
