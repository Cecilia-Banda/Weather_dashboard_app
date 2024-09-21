import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { WeatherDataInterface } from '../services/Weather';

interface WeatherDetailProps {
  weatherData: WeatherDataInterface;
}

export const WeatherDetail: React.FC<WeatherDetailProps> = ({ weatherData }) => {
  // Convert UNIX timestamp to a readable time format
  const formatTime = (timestamp: number) => {
    const date = new Date(timestamp * 1000);
    return `${date.getHours()}:00`;
  };

  // Use the hourly data or provide an empty array if it's not available
  const hourlyData = weatherData.hourly ?? [];

  return (
    <div className="weather-detail">
      <h2>Weather Details for {weatherData.name}</h2>

      <div className="temperature-graph" style={{ height: '350px' }}>
        <h3>Temperature Changes (Next 24 Hours)</h3>
        {hourlyData.length > 0 ? (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={hourlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="dt" tickFormatter={formatTime} />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="temp" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        ) : (
          <p>Loading hourly data...</p> // This can be replaced with a loader or another message if preferred
        )}
      </div>
    </div>
  );
};
