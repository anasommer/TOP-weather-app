const apiUrl = `https://api.weatherapi.com/v1/current.json?key=1115407f5edb4116afd133607242304&q=`;

const weatherEl = document.querySelector('.weather-container');
const btn = document.querySelector('#btn');
const form = document.querySelector('form');

async function getWeather(city) {
  const response = await fetch(`${apiUrl}${city}`);
  const weatherData = await response.json();

  console.log(weatherData);
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const city = document.querySelector('#city').value;
  console.log(city);
  getWeather(city);
});
