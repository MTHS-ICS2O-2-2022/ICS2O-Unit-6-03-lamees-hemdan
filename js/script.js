// Copyright (c) 2023 Lamees Hemdan rights reserved
//
// Created by: Lamees Hemdan
// Created on: May 2023
// This file contains the JS functions for index.html

"use strict"

const getWeather = async (URLAddress) => {
  try {
    const response = await fetch(URLAddress)
    const myJson = await response.json()
    const temperatureCelcius = Math.round(myJson.main.temp-273.15)
    const temperatureCelciusFeelsLike = Math.round(myJson.main.feels_like-273.15)
    document.getElementById('weather').innerHTML = "The weather is " + temperatureCelcius + "°C" + " and it feels like" + temperatureCelciusFeelsLike + "°C"
    const imageTage = "<img src=http://openweathermap.org/img/wn/" + myJson.weather[0].icon + "@2x.png>"
    document.getElementById('weather-icon').innerHTML = imageTage
  }catch(err) {
    console.log(err)
  }
}

getWeather("https://api.openweathermap.org/data/2.5/weather?lat=45.4211435&lon=-75.6900574&appid=fe1d80e1e103cff8c6afd190cad23fa5")
