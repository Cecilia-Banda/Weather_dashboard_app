// Show detailed weather information, including maps and graphical representations of 
// temperature changes over the next 24 hours (use any free graph library).

import React from 'react';
import { fetchHourlyWeatherData } from '../services/WeatherService';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


interface WeatherGraphInterface {
    hourlyData: Array< { dt: number, temp: number } >;
}

export const WeatherGraph: React.FC<WeatherGraphInterface> = ({ hourlyData }) => {

    {/* Format the data to show the temperature for each hour */}
    const formattedData = hourlyData.map((data) => {
        return {
            time: new Date(data.dt * 1000).getHours(),
            temperature: data.temp
        };
    });

    return (
        <ResponsiveContainer width="100%" height={300}>
            <LineChart
                data={formattedData}
                margin={{
                    top: 5,
                    right: 20,
                    left: 10,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="temperature" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
        </ResponsiveContainer>
    );
}