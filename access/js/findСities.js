let darkBlok = document.querySelector(".dark_blok");

searchInput.addEventListener("focus", onSearchFocus);
darkBlok.addEventListener("click", onFocusOut);
searchInput.addEventListener("input", findCities);

function onSearchFocus(event) {
   darkBlok.style.display = 'block';
}

function onFocusOut(event) {
   darkBlok.style.display = 'none';
   cityListUl.innerHTML = '';
   searchInput.value = '';
}

async function findCities(event) {

   if (searchInput.value.length < 3) {
      return;
   }

   cityListUl.innerHTML = '';

   let sortCitiesList = window.cicitiesListArr.map(city => city.toLowerCase()).filter(city => (city + '').includes(searchInput.value.toLowerCase()));
   for (let city of sortCitiesList) {
      let cityName = city.split(' ___ ')[0];
      let cityId = city.split(' ___ ')[1];

      let cityElem = document.createElement('li');

      cityElem.id = cityId;

      cityElem.innerHTML = cityName[0].toUpperCase() + cityName.slice(1, length - 2) + cityName.slice(length - 2).toUpperCase();
      cityElem.className = 'city_name';
      cityListUl.append(cityElem);
   }
}