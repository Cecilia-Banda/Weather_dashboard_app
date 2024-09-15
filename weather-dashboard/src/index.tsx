import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import { fetchWeather } from './weatherService';
////import { renderWeather } from './weatherComponent';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//document.getElementById('search-form')?.addEventListener('submit', async (event) => {
  //event.preventDefault();
  const city = (document.getElementById('city') as HTMLInputElement).value;

  //const weather = await fetchWeather(city);
  //if (weather) {
  //    renderWeather(weather);
  //} else {
      document.getElementById('error')!.textContent = 'City not found. Please try again.';
      document.getElementById('weather')!.innerHTML = '';
  //}
//});

reportWebVitals();
