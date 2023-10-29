// target api url example
// https://api.openweathermap.org/data/2.5/weather?q=Charlotte&units=imperial&callback-test&appid=ab11508788fb351f936a398833feadf7

// global variables
var today = dayjs();
$('#date').text(today.format("(MM/DD/YYYY)"));

// dayjs formatting
const dayjs = require('dayjs')
//import dayjs from 'dayjs' // ES 2015
dayjs().format()

//to call Current Weather API
var currentApiURL = "http://api.openweathermap.org/data/2.5/weather?q="
var appID = "&units=imperial&callback=test&appid="
var apiKey = "ab11508788fb351f936a398833feadf7"

// local variables
var userCity = document.querySelector(".user-city").value;
var formEl = document.querySelector(".search-form")

// Event listener on submit button
var submitButton = document.getElementById("submit-button")
submitButton.addEventListener("click", handleUserSubmit);

// prevent form from running then immediately clearing
function handleUserSubmit(event) {
  event.preventDefault();
    var formEl = document.querySelector(".search-form")
    var currentQueryURL = currentApiURL + userCity + appID + apiKey

  fetch(currentQueryURL)
    .then(function (response) {
    return response.json();
    })
    .then(function (data) {
    console.log("For City: " + userCity + "," + "USA");
    console.log(data);
  });

  // I want to be able to pull multiple pieces of data and create an object (?)
  getWeatherData(data)
    const  {
      icon = data.weather.icon,
      temperature = data.main.temp,
      wind = data.wind.speed,
      humidity = data.main.humidtiy,
      console.log(data);
    } 

    var icon = data.weather.icon
    var temperature = data.main.temp
    var wind = data.wind.speed
    var humidity = data.main.humidity


    return {
      icon,
      temperature,
      wind,
      humidtiy,
    }

    displayCurrentWeather: function (data){
      const  {
      icon = data.weather.icon;
      temperature = data.main.temp;
      wind = data.wind.speed;
      humidity = data.main.humidtiy;
      console.log(getWeatherData)

      document.getElementById("city-name").innerText = userCity
      document.getElementById("icon").innerText = icon
      document.getElementById("temperature").innerText = "Temp: " + temperature
      document.getElementById("wind").innerText = "Wind: " + wind + " MPH"
      document.getElementById("humidity").innerText = "Humidity: " + humidity + "%"

    }

};
