// UI Components (weatherComponent.ts): Create a component to render the weather information. This should update
// the DOM with the fetched data.

import { WeatherService } from './weatherService';
import { WeatherInterface } from './weatherInterface';

export class WeatherComponent {
  constructor(private weatherService: WeatherService) {}

  async render(city: string) {
    const weatherData: WeatherInterface = await this.weatherService.fetchWeatherData(city);

    const weatherContainer = document.createElement('div');
    weatherContainer.innerHTML = `
      <h2>${weatherData.city}</h2>
      <p>Temperature: ${weatherData.temperature}</p>
      <p>Humidity: ${weatherData.humidity}</p>
      <p>Weather Condition: ${weatherData.weatherCondition}</p>
    `;

    document.body.appendChild(weatherContainer);
  }
}

// test
const weatherService = new WeatherService();
const weatherComponent = new WeatherComponent(weatherService);
weatherComponent.render('London');
