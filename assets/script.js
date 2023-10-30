// target api url example
// https://api.openweathermap.org/data/2.5/weather?q=Charlotte&units=imperial&callback-test&appid=ab11508788fb351f936a398833feadf7

// global variables

/* dayjs formatting
var today = dayjs();
$('#date').text(today.format("(MM/DD/YYYY)"));*/

//to call Current Weather API
var currentApiURL = "https://api.openweathermap.org/data/2.5/weather?q="
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

  var submitButton = document.getElementById("submit-button")
  //submitButton.addEventListener("click", handleUserSubmit);

    var userCity = document.querySelector(".user-city").value;
   // var formEl = document.querySelector(".search-form")
    var currentQueryURL = currentApiURL + userCity + appID + apiKey;

    fetch(currentQueryURL)
    .then(function (response) {
    return response.json();
    })
    .then(function (data) {
    console.log("For City: " + userCity + "," + " USA");
    //let pastSearch = 

    document.getElementById("city-name").innerHTML = "Current Weather In: " + userCity + ", USA"
    let temperature = data.main.temp
    document.getElementById("temperature").innerHTML = "Temp: " + temperature + "°F"
    let windSpeed = data.wind.speed
    document.getElementById("wind").innerHTML = "Wind: " + windSpeed + " MPH"
    let humidityPercent = data.main.humidity
    document.getElementById("humidity").innerHTML = "Humidity: " + humidityPercent + "%"

    console.log(temperature, windSpeed, humidityPercent);
  });
    //console.log(currentQueryURL.main.temp);


  function userSubmit() {
    this.fetchUserSubmit(document.querySelector("#user-city").value);
  }
  /*function changePage() {
  location.replace("./assets/forecast.js");
}*/
    
  }