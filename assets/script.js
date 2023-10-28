// sample api url
// https://api.openweathermap.org/data/2.5/weather?q=charlotte&units=imperial&appid=ab11508788fb351f936a398833feadf7

// global variables
/*var weather = {
    "apiKey": "ab11508788fb351f936a398833feadf7"
}*/
var apiURL = "http://api.openweathermap.org/data/2.5/weather?q="
var appID = "&appid="
var apiKey = "ab11508788fb351f936a398833feadf7" 

// local variables
var userCity = document.querySelector('.user-city').value;
var formEl = document.querySelector(".search-form")

// Event listener on submit button
var submitButton = document.getElementById("submit-button")
submitButton.addEventListener("click", handleUserSubmit);

// prevent form from running then immediately clearing
function handleUserSubmit(event) {
  event.preventDefault();

  var userCity = document.querySelector('.user-city').value;
    var formEl = document.querySelector(".search-form")
    var queryURL = apiURL.concat(userCity) + appID + apiKey;

  fetch(queryURL)
    .then(function (response) {
    return response.json();
    })
    .then(function (data) {
    console.log("For the City of: " + userCity);
    console.log(data);
  });

// user breakpoint that triggers a modal to pop-up
    function userInput() {
        if(userCity = null){
            function showModal() {
            var errorModal = document.querySelector(".modal");
            if (errorModal.style.display === "none") {
                errorModal.style.display = "block";
            } else{
            errorModal.style.display = "none";}     
            }
            return;
        }

  location.assign(queryString);
}

// Event listener on submit button
var submitButton = document.getElementById("submit-button")
submitButton.addEventListener("click", handleUserSubmit);

};


