// specific location chosen so I can view the API data for a specific location
fetch('http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=ab11508788fb351f936a398833feadf7')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log('Weather API: Raw data \n----------');
    console.log(data);
  });

