import { WeatherData } from "./weatherInterface";

export async function fetchWeather(city: string): Promise<WeatherData | null> {
    const apiKey = '15f88e50bd7919f812970b811c08a233';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    try {
        const response = await fetch(url);
        if (!response.ok) {
            const errorData = await response.json();  // Parse the error response
            console.error('Error response:', errorData);
            throw new Error(errorData.message || 'City not found');
        }

        const data = await response.json();
        console.log(data);  // Log the successful response

        return {
            temperature: data.main.temp,
            humidity: data.main.humidity,
            weatherCondition: data.weather[0].description,
            cityName: data.name,
        };
    } catch (error) {
        console.error('Error fetching weather data:', error);
        return null;
    }
}

