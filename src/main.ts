// src/main.ts


import { getLocation, getCurrentWeather, displayLocation, displayWeatherData } from './utils.ts';

const form = document.getElementById("weather-form") as HTMLFormElement;

form.addEventListener('submit', (event) => {
  event.preventDefault(); //Evitar el comportamiento predeterminado de envío del formulario.

  const locationInput = document.getElementById("location") as HTMLInputElement;
  const locationName = locationInput.value;
  locationInput.value = ""; // Clear the form

  getLocation(locationName)
    .then((response) => {
      if(response.results){

        // 
        const location = response.results[0];

        // 
        displayLocation(location);

        // 
        return getCurrentWeather(location);
      } else {
        //
        throw new Error('Location not found');
      }
    })
    .then((weatherData) => {

      //
      displayWeatherData(weatherData);
      
    })
    .catch((error) => {
      console.log("Error getting weather data");
      console.log(error);
    });

});
