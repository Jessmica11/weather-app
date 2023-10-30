// target api url example
// http://api.openweathermap.org/data/2.5/forecast/daily?q=Charlotte&units=imperial&appid=ab11508788fb351f936a398833feadf7

//api.openweathermap.org/data/2.5/forecast/daily?q={city name}&cnt={cnt}&appid={API key}
// global variables

// dayjs formatting
var today = dayjs();
$('#date').text(today.format("(MM/DD/YYYY) "));

//to call Current Weather API
var forecastApiURL = "api.openweathermap.org/data/2.5/forecast/daily?q="
var forecastAppID = "&cnt=5&units=imperial&appid="
// generated a different api key for this call
var apiKey = "e8521634193aceebc8a35f31401bdf0e"

//local variables
var userCity = document.querySelector(".user-city").value;
// var formEl = document.querySelector(".search-form")

// Event listener on submit button
var forecastButton = document.getElementById("forecast-button")
forecastButton.addEventListener("click", handleUserSubmit);

// prevent form from running then immediately clearing
function handleUserSubmit(event) {
  event.preventDefault();
  
  var forecastButton = document.getElementById("forecast-button")
  //submitButton.addEventListener("click", handleUserSubmit);

    var userCity = document.querySelector(".user-city").value;
   // var formEl = document.querySelector(".search-form")
    var forecastQueryURL = forecastApiURL + userCity + forecastAppID + apiKey;

function weatherForecast(city) {
    fetch(forecastQueryURL)  
    .then(function(resp) {
        return resp.json()
    })
    .then(function(data) {
        console.log(userCity + ", USA" +(JSON.stringify(data)));
        drawWeather(data);
    })
    function printResults(data) {
  console.log(data);
  }
  // loop through each array of forecast API data
  var forecastDays = data.list[i]

  for (var i = 0; i < forecastDays.length; i ++) {

  // To create day cards for results
  // variables we'll need:
  // list[i].dt_txt (date)
  // list[i].main.temp (temperature)
  // list[i].wind.speed (wind speed)
  // list[i].main.humidity (humidity)

  var projectDate = dayjs(forecastDays.dt_txt);

  var forecastDiv = document.createElement('div');
  forecastDiv.classList.add('card', 'bg-light', 'text-dark', 'mb-3', 'p-3');

  var dayCard = document.createElement('div');
  dayCard.classList.add('card-body');
  forecastDiv.append(dayCard);

  var dateEl = document.createElement('h3');
  dateEl.textContent = data.list[i].dt_txt;

  var tempContentEl = document.createElement('p');
  bodyContentEl.innerHTML =
    '<strong>Date:</strong> ' + data.list[i].main.temp + '<br/>';

  var windContentEl = document.createElement('p');
  bodyContentEl.innerHTML =
    '<strong>Date:</strong> ' + data.list[i].wind.speed + '<br/>';
    
  var humidityContentEl = document.createElement('p');
  bodyContentEl.innerHTML =
    '<strong>Date:</strong> ' + data.list[i].main.humidity + '<br/>';  

  dayCard.append(dateEl, tempContentEl, windContentEl, humidityContentEl);

  forecastDiv.append(dayCard);
}


/*
  }

  function printResults(data) {
  console.log(data);
  }
  // loop through each array of forecast API data
  var forecastDays = data.list[i]

  for (var i = 0; i < forecastDays.length; i ++) {

  // To create day cards for results
  // variables we'll need:
  // list[i].dt_txt (date)
  // list[i].main.temp (temperature)
  // list[i].wind.speed (wind speed)
  // list[i].main.humidity (humidity)

  var projectDate = dayjs(forecastDays.dt_txt);

  var forecastDiv = document.createElement('div');
  forecastDiv.classList.add('card', 'bg-light', 'text-dark', 'mb-3', 'p-3');

  var dayCard = document.createElement('div');
  dayCard.classList.add('card-body');
  forecastDiv.append(dayCard);

  var dateEl = document.createElement('h3');
  dateEl.textContent = data.list[i].dt_txt;

  var tempContentEl = document.createElement('p');
  bodyContentEl.innerHTML =
    '<strong>Date:</strong> ' + data.list[i].main.temp + '<br/>';

  var windContentEl = document.createElement('p');
  bodyContentEl.innerHTML =
    '<strong>Date:</strong> ' + data.list[i].wind.speed + '<br/>';
    
  var humidityContentEl = document.createElement('p');
  bodyContentEl.innerHTML =
    '<strong>Date:</strong> ' + data.list[i].main.humidity + '<br/>';  

  dayCard.append(dateEl, tempContentEl, windContentEl, humidityContentEl);

  forecastDiv.append(dayCard);
}

  //console.log(userCity, tempContentEl, windContentEl, humidityContentEl);

    //console.log(currentQueryURL.main.temp);


  function handleSearchFormSubmit(event) {
  event.preventDefault();
  }
  var searchInputVal = document.querySelector('#search-input').value;
  var formatInputVal = document.querySelector('#format-input').value;

  if (!searchInputVal) {
    console.error('You need a search input value!');
    return;
  }
}*/
};