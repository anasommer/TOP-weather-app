const apiUrl = `https://api.weatherapi.com/v1/current.json?key=1115407f5edb4116afd133607242304&q=`;

const weatherEl = document.querySelector('.weather-container');
const btn = document.querySelector('#btn');
const form = document.querySelector('form');

function createHtml(data) {
  const name = data.location.name;
  const { temp_c, temp_f } = data.current;
  const { text, icon } = data.current.condition;

  const h2 = document.createElement('h2');
  h2.textContent = name;

  const celsius = document.createElement('p');
  celsius.textContent = `°C: ${temp_c}°`;

  const fahr = document.createElement('p');
  fahr.textContent = `°F: ${temp_f}°`;

  const iconImg = document.createElement('img');
  iconImg.src = icon;

  const textEl = document.createElement('p');
  textEl.textContent = text;

  weatherEl.append(h2, celsius, fahr, iconImg, textEl);
  return weatherEl;
}

async function getWeather(city) {
  try {
    const response = await fetch(`${apiUrl}${city}`);
    const weatherData = await response.json();
    createHtml(weatherData);
    console.log(weatherData);
  } catch (error) {
    console.log(error);
  }
}

form.addEventListener('submit', (e) => {
  weatherEl.innerHTML = '';
  e.preventDefault();
  const city = document.querySelector('#city').value;
  console.log(city);
  getWeather(city);
  form.reset();
});
