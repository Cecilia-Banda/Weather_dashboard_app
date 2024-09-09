// Weather Service (weatherService.ts): Implement a service to fetch weather data from
// a public API (e.g., OpenWeatherMap API). Use fetch API to handle HTTP requests.


import { WeatherInterface } from './weatherInterface';

export class WeatherService {
  async fetchWeatherData(city: string): Promise<WeatherInterface> {
    const apiKey = '';

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    );

    const weatherData = await response.json();
    
    return {
      temperature: weatherData.main.temp,
      humidity: weatherData.main.humidity,
      weatherCondition: weatherData.weather[0].description,
      city: weatherData.name,
    };
    }
}

// test
const weatherService = new WeatherService();
weatherService.fetchWeatherData('London').then((weatherData) => {
  console.log(weatherData);
});
