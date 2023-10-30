// target api url example
// http://api.openweathermap.org/data/2.5/forecast?q=Charlotte&units=imperial&appid=ab11508788fb351f936a398833feadf7

// global variables

// dayjs formatting
var today = dayjs();
$('#date').text(today.format("(MM/DD/YYYY) "));

//to call Current Weather API
var forecastApiURL = "http://api.openweathermap.org/data/2.5/forecast?q="
var foreAppID = "&units=imperial&appid="
var apiKey = "ab11508788fb351f936a398833feadf7"

local variables
var userCity = document.querySelector(".user-city").value;
// var formEl = document.querySelector(".search-form")

// Event listener on submit button
var forecastButton = document.getElementById("forecast-button")
forecastButton.addEventListener("click", handleUserSubmit);

// prevent form from running then immediately clearing
function handleUserSubmit(event) {
  event.preventDefault();

  var submitButton = document.getElementById("forecast-button")
  //submitButton.addEventListener("click", handleUserSubmit);

    var userCity = document.querySelector(".user-city").value;
   // var formEl = document.querySelector(".search-form")
    var forecastQueryURL = forecastApiURL + userCity + foreAppID + apiKey;

    fetch(forecastQueryURL)
    .then(function (response) {
    return response.json();
    })
    .then(function (data) {
    console.log("For City: " + userCity + "," + " USA");
    //let pastSearch = 

  function printResults(resultObj) {
  console.log(resultObj);

  // loop through each array of forecast API data
var forecastDays = resultObj.list[i]

  for (var i = 0; i < forecastDays.length; i += 1) {
    var eachDay = forecastDays[i];
    var projectDate = dayjs(fore.date);

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
  dateEl.textContent = resultObj.list.dt_txt;

  var tempContentEl = document.createElement('p');
  bodyContentEl.innerHTML =
    '<strong>Date:</strong> ' + resultObj.list.main.temp + '<br/>';

  var windContentEl = document.createElement('p');
  bodyContentEl.innerHTML =
    '<strong>Date:</strong> ' + resultObj.list.wind.speed + '<br/>';
    
  var humidityContentEl = document.createElement('p');
  bodyContentEl.innerHTML =
    '<strong>Date:</strong> ' + resultObj.list.main.humidity + '<br/>';  

  if (resultObj.subject) {
    bodyContentEl.innerHTML +=
      '<strong>Subjects:</strong> ' + resultObj.subject.join(', ') + '<br/>';
  } else {
    bodyContentEl.innerHTML +=
      '<strong>Subjects:</strong> No subject for this entry.';
  }

  if (resultObj.description) {
    bodyContentEl.innerHTML +=
      '<strong>Description:</strong> ' + resultObj.description[0];
  } else {
    bodyContentEl.innerHTML +=
      '<strong>Description:</strong>  No description for this entry.';
  }

  dayCard.append(dateEl, tempContentEl, windContentEl, humidityContentEl);

  forecastDiv.append(dayCard);
}

  console.log(dateEl, tempContentEl, windContentEl, humidityContentEl);
  };
    //console.log(currentQueryURL.main.temp);

  /*function searchApi(query, format) {
  var locQueryUrl = 'https://www.loc.gov/search/?fo=json';

  if (format) {
    locQueryUrl = 'https://www.loc.gov/' + format + '/?fo=json';
  }

  locQueryUrl = locQueryUrl + '&q=' + query;

  fetch(locQueryUrl)
    .then(function (response) {
      if (!response.ok) {
        throw response.json();
      }

      return response.json();
    })
    .then(function (locRes) {
      // write query to page so user knows what they are viewing
      resultTextEl.textContent = locRes.search.query;

      console.log(locRes);

      if (!locRes.results.length) {
        console.log('No results found!');
        resultContentEl.innerHTML = '<h3>No results found, search again!</h3>';
      } else {
        resultContentEl.textContent = '';
        for (var i = 0; i < locRes.results.length; i++) {
          printResults(locRes.results[i]);
        }
      }
    })
    .catch(function (error) {
      console.error(error);
    });
}*/

function handleSearchFormSubmit(event) {
  event.preventDefault();

  var searchInputVal = document.querySelector('#search-input').value;
  var formatInputVal = document.querySelector('#format-input').value;

  if (!searchInputVal) {
    console.error('You need a search input value!');
    return;
  }

  searchApi(searchInputVal, formatInputVal);
}

searchFormEl.addEventListener('submit', handleSearchFormSubmit);