// React component to display the weather details

// Importing the icons from react-icons library
import { WiHumidity } from 'react-icons/wi';
import { FaWind } from 'react-icons/fa';
import { RiLoader2Fill } from "react-icons/ri";

import React from 'react';
import { WeatherDisplayWrapper } from './Weather.module';
import { WeatherDataInterface } from '../services/Weather';
import { fetchCurrentWeather, fetchWeatherData, fetchHourlyWeatherData } from '../services/WeatherService';
import { iconChanger } from './WeatherIcon';
import { SearchBar } from './SearchBar';
// import { AlertComponent } from './Alert';

// Soner library for toast notifications
import { Toaster, toast } from 'sonner';

// React component to display graphical representation of the weather
import { WeatherGraph } from './WeatherGraph';

// React component to display the map of the city
// import { WeatherMap } from './WeatherMap';

export const WeatherDisplay = () => {

    // Create a state to store the weather data fetched from the API response
    const [weatherData, setWeatherData] = React.useState<WeatherDataInterface | null>(null);
    // Create a state to store the city name entered by the user in the input field
    const [searchCity, setSearchCity] = React.useState<string>("");
    // Create a loading state to show a loader while fetching the data
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    // Create a state to store the error message
    const [hourlyData, setHourlyData] = React.useState<Array< { dt: number, temp: number } > | null>(null);

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

          // Fetch the hourly weather data for the next 24 hours
          const hourlyData = await fetchHourlyWeatherData(currentWeatherData.coord.lat, currentWeatherData.coord.lon);
          setHourlyData(hourlyData);

        } catch (error: any) {
            // If the city is not found, show a toast notification
            toast.error("City not found");
            
        }
    };

    // Use React.useEffect to fetch the weather data when the component mounts
    React.useEffect(() => {
      const fetchData = async () => {
        navigator.geolocation.getCurrentPosition(async (position) => {
            const { latitude, longitude } = position.coords;

            // Fetch the current weather data for the user's location
            const [currentWeather] = await Promise.all([fetchCurrentWeather(latitude, longitude)]);
            setWeatherData(currentWeather);

            // Fetch the hourly weather data for the next 24 hours
            //   const hourlyData = await fetchHourlyWeatherData(latitude, longitude);
            //   setHourlyData(hourlyData);

          setIsLoading(true);
        });
      };
  
      fetchData();
    }, [fetchCurrentWeather]);
  


    return (

        <div>

            <WeatherDisplayWrapper>

                <Toaster position='top-center' /> {/* Ypu can use richColor, position, and duration props */}

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


                            {/* Weather graph to display the hourly weather data *
                            {hourlyData && (
                                <div className='weatherGraphArea'>
                                    <WeatherGraph hourlyData={hourlyData.slice(0, 24)} />
                                </div>
                            )}

                            Weather map to display the map of the city
                            {weatherData && (
                            <div className="mapArea">
                                <h3>{`Map of ${weatherData.name}`}</h3>
                                <WeatherMap lat={weatherData.coord.lat} lon={weatherData.coord.lon} city={weatherData.name} />
                            </div>
                            )}
                            */}


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

