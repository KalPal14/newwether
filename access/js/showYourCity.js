async function yourCity() {
   let requestLocation = await fetch('https://json.geoiplookup.io/');
   let location = await requestLocation.json();

   let requestWether = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=979c80d53024dd0950698ffb2f3fc393`);
   let wetherJSON = await requestWether.json();

   cityNameH1.innerText = location.city + ", " + location.country_name;
   dateH4.innerText = showDate();
   conditionH4.innerText = wetherJSON.weather[0].main;
   weatherImg.src = `https://openweathermap.org/img/wn/${wetherJSON.weather[0].icon}@2x.png`;
   tempH1.innerHTML = ` ${Math.round(wetherJSON.main.temp - 271.15)} &#176`;
   feelsLikeElem.innerHTML = `Feels like ${Math.round(wetherJSON.main.feels_like - 271.15)}&#176`;

   windElem.innerHTML = `Wind speed: ${wetherJSON.wind.speed} m/s`
   humidityElem.innerHTML = `Humidity: ${wetherJSON.main.humidity} %`
   pressureElem.innerHTML = `Pressure: ${Math.round(wetherJSON.main.pressure * 100 / 133)} mm`;
} yourCity();

function showDate() {
   let date = new Date();
   let minutes = date.getMinutes();
   let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

   if (minutes <= 9) {
      minutes = "0" + minutes;
   }

   return days[date.getDay()] + " " + date.getHours() + ":" + minutes;
}