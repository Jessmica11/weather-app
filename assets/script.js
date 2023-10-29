// target api url example
// https://api.openweathermap.org/data/2.5/weather?q=Charlotte&units=imperial&callback-test&appid=ab11508788fb351f936a398833feadf7

// global variables

// dayjs formatting
var today = dayjs();
$('#date').text(today.format("(MM/DD/YYYY)"));

//to call Current Weather API
var currentApiURL = "http://api.openweathermap.org/data/2.5/weather?q="
var appID = "&units=imperial&appid="
var apiKey = "ab11508788fb351f936a398833feadf7"

/* local variables
var userCity = document.querySelector(".user-city").value;
var formEl = document.querySelector(".search-form")*/

// Event listener on submit button
var submitButton = document.getElementById("submit-button")
submitButton.addEventListener("click", handleUserSubmit);

// prevent form from running then immediately clearing
function handleUserSubmit(event) {
  event.preventDefault();
    var userCity = document.querySelector(".user-city").value;
    var formEl = document.querySelector(".search-form")
    var currentQueryURL = currentApiURL + userCity + appID + apiKey;
    fetch(currentQueryURL)
    .then(function (response) {
    return response.json();
    })
    .then(function (data) {
    console.log("For City: " + userCity + "," + " USA");

    var weatherIcon = data.weather[0].icon
    var temperature = data.main.temp
    var wind = data.wind.speed
    var humidity = data.main.humidity

    function displayCurrentWeather(data){
      document.getElementById("city-name").innerText = userCity
      document.getElementById("icon").innerText = weatherIcon
      document.getElementById("temperature").innerText = temperature
      document.getElementById("wind").innerText = wind + " MPH"
      document.getElementById("humidity").innerText = humidity + "%"

    }

    console.log(temperature, wind, humidity, weatherIcon);
  });
    //console.log(currentQueryURL.main.temp);
}

  function userSubmit() {
    this.fetchUserSubmit(document.querySelector("#submit-button").value);
  }

  /*fetch(currentQueryURL)
    .then(function (response) {
    return response.json();
    })
    .then(function (data) {
    console.log("For City: " + userCity + "," + "USA");
    console.log(data);
  });

  // I want to be able to pull multiple pieces of data and create an object (?)
    var weatherIcon = response.data.weather[0].icon
    var temperature = response.data.main.temp
    var wind = response.data.wind.speed
    var humidity = reseponse.data.main.humidity

  /*function getWeatherData(){
    
    
    const temperature = {
      response.data.main.temp
    }

    function displayCurrentWeather(data){
      document.getElementById("city-name").innerText = userCity
      document.getElementById("icon").innerText = weatherIcon
      document.getElementById("temperature").innerText = "Temp: " + temperature
      document.getElementById("wind").innerText = "Wind: " + wind + " MPH"
      document.getElementById("humidity").innerText = "Humidity: " + humidity + "%"

    }*/
