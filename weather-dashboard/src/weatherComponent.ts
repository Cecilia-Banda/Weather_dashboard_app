import { WeatherData } from './weatherInterface';

export function renderWeather(weather: WeatherData): void {
  const weatherContainer = document.getElementById('weather')!;
  weatherContainer.innerHTML = `
    <h2>Weather in ${weather.cityName}</h2>
    <p>Temperature: ${weather.temperature} °C</p>
    <p>Humidity: ${weather.humidity}%</p>
    <p>Condition: ${weather.weatherCondition}</p>
  `;
}

export function renderError(): void {
  const weatherContainer = document.getElementById('weather')!;
  weatherContainer.innerHTML = `<p>City not found. Please try again.</p>`;
}

