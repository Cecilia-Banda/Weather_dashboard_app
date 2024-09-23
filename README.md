# Weather Dashboard Application

A weather dashboard application built with React and TypeScript that allows users to search for and display detailed weather information for a specified city.

## Table of Contents
1. [General Info](#general-info)
2. [Technologies](#technologies)
3. [Setup](#setup)
4. [Application Structure](#application-structure)
5. [Features](#features)
6. [Advanced Features](#advanced-features)

## General Info
This project is an advanced weather dashboard application that fetches weather data for a specified city using the OpenWeatherMap API. The application provides real-time weather details such as temperature, humidity, wind speed, and a graphical representation of temperature changes over the next 24 hours. The search feature allows users to easily input a city name and retrieve the relevant weather information.

## Technologies
This project is built with:
- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A statically typed language that builds on JavaScript.
- **Axios**: A promise-based HTTP client used to fetch weather data from external APIs.
- **Styled-components**: A library for writing scoped CSS within JavaScript/TypeScript files.
- **React-icons**: A collection of popular icons for use in React applications.
- **Webpack or Flit**: Module bundlers for bundling the application.

## Setup
To set up and run this project locally:

1. Clone the repository:
    ```bash
    git clone https://github.com/Cecilia-Banda/Weather_dashboard_app
    ```
2. Navigate to the project directory:
    ```bash
    cd weather_app
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Start the development server:
    ```bash
    npm start
    ```
    This will start the application in development mode with hot module reloading.

## Application Structure
- **Components**:
  - `WeatherDisplay.tsx`: React component to display the weather details.
  - `SearchBar.tsx`: React component for handling city input and form submission.
  - `App.tsx`: Main React component that uses WeatherDisplay and SearchBar.
- **Services**:
  - `WeatherService.ts`: A service to fetch weather data using Axios or Fetch API.
- **Types**:
  - `Weather.ts`: TypeScript interfaces or types for the weather data.

## Features
- **Search by city**: Users can input a city name and retrieve the current weather details.
- **Weather details**: Displays temperature, humidity, wind speed, and a 24-hour temperature graph.
- **Error handling**: User-friendly error messages for invalid city names or network issues.
- **Loading states**: Displays a loading spinner while fetching data.
- **Responsive design**: Optimized for both mobile and desktop views.
- **State management**: Uses React context or Redux to manage application state.

## Advanced Features
- **24-hour graph**: Graphical representation of temperature changes over the next 24 hours using a react-chartjs-2 library.
- **Maps integration**: Displays maps for the searched city using the leaflet library + react-leaflet.
- **PWA features (optional)**: Service workers for offline capability. manifest.json inside the public folder for adding the app to the home screen. Used Workbox for service workers.

