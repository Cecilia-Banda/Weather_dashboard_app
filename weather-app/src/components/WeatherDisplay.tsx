// React component to display the weather details

// Importing the icons from react-icons library
import { WiHumidity } from 'react-icons/wi';
import { FaWind } from 'react-icons/fa';
import { RiLoader2Fill } from "react-icons/ri";

import React from 'react';
import { WeatherDisplayWrapper } from './Weather.module';
import { WeatherDataInterface } from '../services/Weather';
import { fetchCurrentWeather, fetchWeatherData } from '../services/WeatherService';
import { iconChanger } from './WeatherIcon';
import { SearchBar } from './SearchBar';
// import { AlertComponent } from './Alert';



export const WeatherDisplay = () => {

    // Create a state to store the weather data fetched from the API response
    const [weatherData, setWeatherData] = React.useState<WeatherDataInterface | null>(null);
    // Create a state to store the city name entered by the user in the input field
    const [searchCity, setSearchCity] = React.useState<string>("");
    // Create a loading state to show a loader while fetching the data
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    // Create a state to store the error message
    const [errorMessage, setErrrorMessage] = React.useState<string>("");

    // Handels the search functionality when the user enters a city name in the input field
    const handleSearch = async () => {

        // Do not search if the input field is empty
        if (searchCity.trim() === "") {
          return;
        }
        
        // Find the weather data for the city
        try {
          const { currentWeatherData } = await fetchWeatherData(searchCity);
          setWeatherData(currentWeatherData);
        } catch (error: any) {
            alert("City not found");
        }
    };


    React.useEffect(() => {
      const fetchData = async () => {
        navigator.geolocation.getCurrentPosition(async (position) => {
          const { latitude, longitude } = position.coords;
          const [currentWeather] = await Promise.all([fetchCurrentWeather(latitude, longitude)]);
          setWeatherData(currentWeather);
          setIsLoading(true);
        });
      };
  
      fetchData();
    }, [fetchCurrentWeather]);
  


    return (

        <div>

            <WeatherDisplayWrapper>

                {/* errorMessage && <AlertComponent /> */}

                <div className="container">

                    <SearchBar searchCity={searchCity} setSearchCity={setSearchCity} handleSearch={handleSearch} />

                    
                    {weatherData && isLoading ? (
                        <>
                            <div className="weatherArea">
                                <h1>{weatherData.name}</h1>
                                <span>{weatherData.sys.country}</span>
                                <div className="weatherIcon">
                                    {iconChanger(weatherData.weather[0].main)}
                                </div>
                                <h1>{weatherData.main.temp.toFixed(0)}°C</h1>
                                <h2>{weatherData.weather[0].main}</h2>
                            </div>

                            <div className="bottomInfoArea">
                                <div className="humidityLevel">
                                    <WiHumidity className="humidityIcon" />
                                    <div className="humid&windInfo">
                                        <h1>{weatherData.main.humidity}%</h1>
                                        <p>Humidity</p>
                                    </div>
                                </div>

                                <div className="windSpeed">
                                    <FaWind className="windIcon" />
                                    <div className="humid&windInfo">
                                        <h1>{weatherData.wind.speed} km/h</h1>
                                        <p>Wind Speed</p>
                                    </div>
                                </div>
                            </div>

                        </> ) : (

                            <div className="loadingArea">
                                <RiLoader2Fill className="loadingIcon" />
                                <p>Loading...</p>


                            </div>

                            )
                    }

                </div>

            </WeatherDisplayWrapper>

        </div>
    );
};

