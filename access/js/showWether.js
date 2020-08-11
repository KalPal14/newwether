cityList.onclick = showWether;

async function showWether(event) {
   let target = event.target;

   let request = await fetch(`https://api.openweathermap.org/data/2.5/weather?id=${target.id}&appid=979c80d53024dd0950698ffb2f3fc393`);

   let wetherJSON = await request.json();

   cityNameH1.innerText = wetherJSON.name + ", " + wetherJSON.sys.country;
   dateH4.innerText = showDate();
   conditionH4.innerText = wetherJSON.weather[0].main;
   weatherImg.src = `https://openweathermap.org/img/wn/${wetherJSON.weather[0].icon}@2x.png`;
   tempH1.innerHTML = ` ${Math.round(wetherJSON.main.temp - 271.15)} &#176`;
   feelsLikeElem.innerHTML = `Feels like ${Math.round(wetherJSON.main.feels_like - 271.15)}&#176`;

   windElem.innerHTML = `Wind speed: ${wetherJSON.wind.speed} m/s`
   humidityElem.innerHTML = `Humidity: ${wetherJSON.main.humidity} %`
   pressureElem.innerHTML = `Pressure: ${Math.round(wetherJSON.main.pressure * 100 / 133)} mm`;

   darkBlok.style.display = 'none';
   cityListUl.innerHTML = '';
   searchInput.value = '';
}