// const API_KEY = 'b2644eba00822333e65a7cfd7380d25b';
// const weather = document.querySelector("#weather span:first-child");
// const city = document.querySelector("#weather span:last-child");

// function onGeoOk(position) {
//     const lat = position.coords.latitude;
//     const lng = position.coords.longitude;
//     const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
//     fetch(url).then(response => response.json()).then(data => {
//         city.innerText = data.name;
//         weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
//       });
// }

// function onGeoError() {
//     alert("Can't find you. No weather for you.");
// }

// navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);


const COORDS = 'coords';
const API_KEY = 'f32d3ba57242e98dad9a1c4348095ab2';

const weatherContainer = document.querySelector('.weather-container'),
    tempContainer = weatherContainer.querySelector('.temp-container'),
    temperature = weatherContainer.querySelector('.temperature'),
    placeText = weatherContainer.querySelector('.place');

function setIcon(name) {
    let iconName = '';
    if (name === 'Thunderstorm') {
        iconName = 'fa-bolt';
    } else if (name === 'Drizzle') {
        iconName = 'fa-umbrella';
    } else if (name === 'Rain') {
        iconName = 'fa-cloud-showers-heavy';
    } else if (name === 'Snow') {
        iconName = 'fa-snowflake';
    } else if (name === 'Mist' || name === 'Smoke' || name === 'Dust' || name === 'Fog' || name === 'Haze') {
        iconName = 'fa-smog';
    } else if (name === 'Clouds') {
        iconName = 'fa-cloud';
    } else {
        iconName = 'fa-sun';
    }
    return iconName;
}

function getWeather(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            console.log(json.weather[0]);
            const temp = json.main.temp.toFixed(1);
            const place = json.name;
            const iconName = setIcon(json.weather[0].main);

            // const icon = document.createElement('i');
            // icon.classList.add('fas');
            // icon.classList.add(iconName);
            // tempContainer.prepend(icon);
            // console.log(icon);
            // const img = new Image();
            // const icon = json.weather[0].icon;
            // img.src = `http://openweathermap.org/img/wn/${icon}.png`;
            // console.log(img);
            // tempContainer.prepend(img);
            temperature.innerHTML = `<i class="fas ${iconName}"></i> ${temp}°`;
            console.log(temperature);
            placeText.innerHTML = `${place}`;
        });
}

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
    const { latitude, longitude } = position.coords;
    const coordsObj = {
        latitude,
        longitude,
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}
function handleGeoError() {
    console.error('Access geo Error');
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);

    if (loadedCoords === null) {
        askForCoords();
    } else {
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}

function init() {
    loadCoords();
}
init();